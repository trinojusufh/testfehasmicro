<template>
  <nav class="bg-slate-900 text-white sticky top-0 z-50">
    <div class="container-page flex justify-between items-center h-14">

      <!-- LOGO -->
      <RouterLink
        to="/"
        class="flex items-center gap-2 hover:opacity-90 transition"
      >
        <img
          src="https://www.hashmicro.com/assets/improved-img/logo-hashmicro-white-155.webp"
          alt="HashMicro Logo"
          class="h-6 md:h-7 object-contain"
        />
      </RouterLink>

      <!-- DESKTOP MENU -->
      <div class="hidden md:flex items-center gap-8 text-sm font-medium">
        <RouterLink
          to="/products"
          class="hover:text-orange-400 transition"
          active-class="text-orange-400"
        >
          Products
        </RouterLink>

        <RouterLink
          to="/industries"
          class="hover:text-orange-400 transition"
          active-class="text-orange-400"
        >
          Industries Served
        </RouterLink>

        <RouterLink
          to="/products/create"
          class="btn-primary text-sm"
        >
          + Create
        </RouterLink>
      </div>

      <!-- MOBILE BUTTON -->
      <button
        class="md:hidden text-2xl leading-none"
        @click="open = !open"
        aria-label="Toggle Menu"
      >
        ☰
      </button>
    </div>

    <!-- MOBILE MENU -->
    <transition name="fade">
      <div
        v-if="open"
        class="md:hidden bg-slate-900 border-t border-white/10"
      >
        <RouterLink
          to="/products"
          class="block px-4 py-3 hover:bg-white/10 transition"
          @click="open = false"
        >
          Products
        </RouterLink>

        <RouterLink
          to="/industries"
          class="block px-4 py-3 hover:bg-white/10 transition"
          @click="open = false"
        >
          Industries Served
        </RouterLink>

        <RouterLink
          to="/products/create"
          class="block px-4 py-3 hover:bg-white/10 transition"
          @click="open = false"
        >
          Create Product
        </RouterLink>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
