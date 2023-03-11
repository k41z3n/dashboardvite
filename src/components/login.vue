<template>
  <div class="login animate__animated animate__fadeIn login">
    <div class="card">
      <div class="card-content">
        <p class="title">CEPTINEL</p>
        <p class="subtitle">login</p>
        <form class="content" @submit.prevent="submit">
          <div class="field">
            <p class="control has-icons-left">
              <input
                class="input"
                type="text"
                placeholder="username"
                v-model="form.username"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="password"
                placeholder="password"
                v-model="form.password"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button class="button is-success">Login</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";

import { auth } from "@/api/auth";
import { useRouter } from "vue-router";

const router = useRouter()

const form = reactive({
  username: "ceptinel",
  password: "hola",
});

const submit = async () => {
  try {
    const res = await auth.auth(form);
    console.log({ res });
    router.replace('/')
  } catch (error) {
    console.log({ error });
  }
};
</script>
<style>

.login {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  width: 100%;
  align-items: center;
  height: 70vh;
}
</style>
