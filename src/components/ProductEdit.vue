<template>
  <div
    v-if="product"
    class="max-w-xl mx-auto card"
  >
    <h2 class="text-lg sm:text-xl font-semibold mb-5 text-slate-800">
      Edit Product
    </h2>

    <!-- NAME -->
    <div class="mb-4">
      <label class="block text-sm font-medium mb-1 text-slate-700">
        Product Name
      </label>
      <input
        v-model="product.name"
        class="input"
        placeholder="Product Name"
      />
    </div>

    <!-- PRICE -->
    <div class="mb-4">
      <label class="block text-sm font-medium mb-1 text-slate-700">
        Price
      </label>
      <input
        v-model="product.price"
        class="input"
        placeholder="Rp 0"
      />
    </div>

    <!-- DESCRIPTION -->
    <div class="mb-6">
      <label class="block text-sm font-medium mb-1 text-slate-700">
        Description
      </label>
      <textarea
        v-model="product.desc"
        rows="3"
        class="input resize-none"
        placeholder="Product description"
      />
    </div>

    <!-- ACTIONS -->
    <div class="flex flex-col sm:flex-row gap-3">
      <button
        class="btn-primary"
        @click="save"
      >
        Save
      </button>

      <button
        class="btn-outline"
        @click="cancel"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useProductStore } from '@/stores/productStore'
import { successAlert, errorAlert } from '@/utils/swal'

const router = useRouter()
const store = useProductStore()

// clone biar aman
const product = store.selectedProduct
  ? reactive({ ...store.selectedProduct })
  : null

const save = async () => {
  if (!product?.name || !product?.price) {
    errorAlert('Validation Error', 'Name & price are required')
    return
  }

  store.updateProduct(product)
  await successAlert('Updated', 'Product updated successfully')
  router.push('/products')
}

const cancel = () => {
  router.push('/products')
}
</script>
