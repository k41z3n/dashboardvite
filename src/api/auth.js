import axiosConfig from "./axios";

import { useStorage } from "@vueuse/core";

export const auth = {
  auth: ({ username, password }) => {
    return new Promise((resolve, reject) => {
      console.log({ username, password });
      axiosConfig
        .post(
          `/auth/token?username=${username}`,
          {
            username,
            password,
          },
          {
            withCredentials: false,
            headers: {
              password,
            },
          }
        )
        .then((res) => {

          let currentDate = new Date();

          currentDate.setMinutes(
            currentDate.getMinutes() + parseInt(res.headers["expiration"])
          );

          useStorage("currentuser", {
            ...res.data,
            tokenInfo: {
              timeout: Number(res.headers["expiration"]),
              expiration: currentDate,
              authenticationType: res.headers["authentication-type"],
            },
          });

          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
