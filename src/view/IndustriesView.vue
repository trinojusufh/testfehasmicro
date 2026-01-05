<template>
  <section class="bg-slate-900  text-white py-20">
    <div class="container-page">

      <!-- TITLE -->
      <h2 class="text-2xl md:text-3xl font-semibold mb-10">
        Industries We Serve
      </h2>

      <!-- GRID -->
      <div
        class="grid grid-cols-2 sm:grid-cols-3
               md:grid-cols-4 gap-6"
      >
        <!-- LOADING -->
        <template v-if="store.loading">
          <SkeletonCard
            v-for="n in 8"
            :key="n"
          />
        </template>

        <!-- DATA -->
        <IndustryCard
          v-else
          v-for="item in store.items"
          :key="item.name"
          :name="item.name"
          :icon="icons[item.icon]"
        />
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useIndustriesStore } from '@/stores/industriesStore'
import IndustryCard from '@/components/IndustryCard.vue'
import SkeletonCard from '@/components/SkeletonCard.vue'

import {
  Store,
  Factory,
  Truck,
  Utensils,
  Building2,
  HardHat,
  User,
  GraduationCap,
  Key,
  Cog,
  DollarSign,
  Presentation,
  Ship,
  Pickaxe,
  Landmark,
  Hotel
} from 'lucide-vue-next'

const icons = {
  Store,
  Factory,
  Truck,
  Utensils,
  Building2,
  HardHat,
  User,
  GraduationCap,
  Key,
  Cog,
  DollarSign,
  Presentation,
  Ship,
  Pickaxe,
  Landmark,
  Hotel
}

const store = useIndustriesStore()

onMounted(() => {
  store.fetchIndustries()
})
</script>
