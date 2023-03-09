<template>
  <div class="app">
    <component :is="setLayout">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </component>
  </div>
</template>

<script setup>
import { computed } from "vue";

import { useRoute } from "vue-router";

const route = useRoute();

const setLayout = computed(() => {
  return `${route.meta.layout}-layout` ?? "default-layout";
});
</script>
