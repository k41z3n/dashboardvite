<template>
  <Header/>
  <main class="container is-fluid mb-5" style="min-height: 80vh;">
    <slot />
  </main>
  <pre>footer</pre>
</template>
<script setup>
import Header from './Header.vue';
</script>