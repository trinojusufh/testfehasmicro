import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      {
        id: 1,
        name: 'Hash Core ERP',
        price: 'Rp 10.000.000',
        desc: 'Software ERP terbaik dan terlengkap',
        icon: 'Server'
      },
      {
        id: 2,
        name: 'EVA HRIS',
        price: 'Rp 5.000.000',
        desc: 'Software HRM & payroll online',
        icon: 'Users'
      },
      {
        id: 3,
        name: 'Hash Retail Innovation',
        price: 'Rp 7.500.000',
        desc: 'Otomasi bisnis retail',
        icon: 'Store'
      }
    ],
    selectedProduct: null
  }),

  actions: {
    addProduct(product) {
      this.products.push({
        id: Date.now(),
        ...product
      })
    },

    selectProduct(product) {
      this.selectedProduct = { ...product }
    },

    updateProduct(updatedProduct) {
      const index = this.products.findIndex(
        p => p.id === updatedProduct.id
      )
      if (index !== -1) {
        this.products[index] = updatedProduct
      }
      this.selectedProduct = null
    },

    deleteProduct(id) {
      this.products = this.products.filter(p => p.id !== id)
    },

    clearSelected() {
      this.selectedProduct = null
    }
  }
})
