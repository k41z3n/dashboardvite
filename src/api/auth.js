import axiosConfig from "./axios";

export const auth = {
    auth: ({ username, password }) => {
        return new Promise((resolve, reject) => {
            console.log({ username, password });
            axiosConfig
                .post(`/auth/token?username=${username}`,
                    {
                        username,
                        password,
                    },
                    {
                        withCredentials: false,
                        headers: {
                            password
                        }
                    })
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
};
