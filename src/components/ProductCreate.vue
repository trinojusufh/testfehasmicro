<template>
  <div class="max-w-xl mx-auto card">
    <h2 class="text-lg sm:text-xl font-semibold mb-5 text-slate-800">
      Create Product
    </h2>

    <!-- NAME -->
    <div class="mb-4">
      <label class="block text-sm font-medium mb-1 text-slate-700">
        Product Name
      </label>
      <input
        v-model="form.name"
        placeholder="Product Name"
        class="input"
      />
    </div>

    <!-- PRICE -->
    <div class="mb-4">
      <label class="block text-sm font-medium mb-1 text-slate-700">
        Price
      </label>
      <input
        v-model="form.price"
        placeholder="Rp 0"
        class="input"
      />
    </div>

    <!-- DESCRIPTION -->
    <div class="mb-6">
      <label class="block text-sm font-medium mb-1 text-slate-700">
        Description
      </label>
      <textarea
        v-model="form.desc"
        rows="3"
        placeholder="Product description"
        class="input resize-none"
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

const form = reactive({
  name: '',
  price: '',
  desc: '',
  icon: 'Server'
})

const save = async () => {
  if (!form.name || !form.price) {
    errorAlert('Validation Error', 'Name & price are required')
    return
  }

  store.addProduct({ ...form })
  await successAlert('Success', 'Product created')
  router.push('/products')
}

const cancel = () => {
  router.push('/products')
}
</script>
