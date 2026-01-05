<template>
  <div class="max-w-2xl mx-auto card">
    <!-- HEADER -->
    <div class="flex items-center gap-3 mb-5">
      <component
        :is="icons[product.icon]"
        class="w-9 h-9 text-orange-500"
      />
      <h2 class="text-lg sm:text-xl font-semibold text-slate-800">
        Product Detail
      </h2>
    </div>

    <!-- CONTENT -->
    <div class="space-y-3">
      <p class="text-base sm:text-lg font-semibold text-slate-900">
        {{ product.name || '-' }}
      </p>

      <p class="text-sm sm:text-base text-slate-500">
        {{ product.desc || 'No description available' }}
      </p>

      <p class="text-sm sm:text-base font-semibold text-slate-800">
        {{ product.price || '-' }}
      </p>
    </div>

    <!-- ACTION -->
    <div class="mt-6">
      <button
        class="btn-outline w-full sm:w-auto"
        @click="back"
      >
        ← Back to List
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useProductStore } from '@/stores/productStore'
import { Server, Users, Store } from 'lucide-vue-next'

const router = useRouter()
const store = useProductStore()

const product = computed(() => store.selectedProduct || {})

const icons = {
  Server,
  Users,
  Store
}

const back = () => {
  router.push('/products')
}
</script>
