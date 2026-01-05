<template>
  <div
    class="flex flex-col items-center justify-center
           gap-3 p-6 rounded-xl
           border border-white/10
           hover:border-orange-400
           hover:text-orange-400
           transition cursor-pointer"
  >
    <component
      :is="icon"
      class="w-10 h-10"
    />
    <p class="text-sm font-medium text-center">
      {{ name }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  icon: Object
})
</script>
