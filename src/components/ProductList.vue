<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
  >
    <div
      v-for="item in store.products"
      :key="item.id"
      class="card flex flex-col"
    >
      <!-- ICON -->
      <div class="mb-3">
        <component
          :is="icons[item.icon]"
          class="w-9 h-9 text-orange-500"
        />
      </div>

      <!-- CONTENT -->
      <h3 class="font-semibold text-lg text-slate-800">
        {{ item.name }}
      </h3>

      <p class="text-slate-500 text-sm flex-grow mt-1">
        {{ item.desc }}
      </p>

      <p class="mt-3 font-semibold text-slate-900">
        {{ item.price }}
      </p>

      <!-- ACTIONS -->
      <div
        class="flex flex-wrap gap-4 mt-4 text-sm font-medium"
      >
        <button
          class="text-slate-900 hover:text-orange-500 transition"
          @click="view(item)"
        >
          View
        </button>

        <button
          class="text-orange-600 hover:text-orange-700 transition"
          @click="edit(item)"
        >
          Edit
        </button>

        <button
          class="text-red-600 hover:text-red-700 transition"
          @click="remove(item.id)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useProductStore } from '@/stores/productStore'
import { confirmDelete, successAlert } from '@/utils/swal'
import {
  Server,
  Users,
  Store
} from 'lucide-vue-next'

const store = useProductStore()
const router = useRouter()

const icons = { Server, Users, Store }

const view = (item) => {
  store.selectProduct(item)
  router.push(`/products/${item.id}`)
}

const edit = (item) => {
  store.selectProduct(item)
  router.push(`/products/${item.id}/edit`)
}

const remove = async (id) => {
  const result = await confirmDelete()
  if (result.isConfirmed) {
    store.deleteProduct(id)
    successAlert('Deleted!', 'Product has been removed')
  }
}
</script>
