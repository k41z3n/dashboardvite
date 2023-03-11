<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <RouterLink class="navbar-item" to="/">
        <img
          src="@/assets/logotipo_full.png"
          
        />
      </RouterLink>

     
    </div>

    <div  class="navbar-menu">

      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <i class="fa fa-user mr-2"></i>
          {{ store.currentUser.fullName }}
        </div>
        <div class="navbar-item">
          <i class="fa fa-bell "></i>
        </div>
        <div class="navbar-item">
          <i class="fa fa-bars "></i>
        </div>
      </div>
  </nav>
</template>

<script setup>
import { useAppStore } from '@/store/app'

const store = useAppStore()

</script>
