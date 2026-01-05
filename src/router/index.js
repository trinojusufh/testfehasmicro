import { createRouter, createWebHistory } from 'vue-router'

import ProductList from '@/components/ProductList.vue'
import ProductDetail from '@/components/ProductDetail.vue'
import ProductEdit from '@/components/ProductEdit.vue'
import ProductCreate from '@/components/ProductCreate.vue'
import IndustriesView from '../view/IndustriesView.vue'

const routes = [
  { path: '/', redirect: '/products' },

  { path: '/products', component: ProductList },
  { path: '/products/create', component: ProductCreate },
  { path: '/products/:id', component: ProductDetail },
  { path: '/products/:id/edit', component: ProductEdit },

  { path: '/industries', component: IndustriesView }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
