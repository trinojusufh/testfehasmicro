import { defineStore } from 'pinia'

export const useIndustriesStore = defineStore('industries', {
  state: () => ({
    loading: true,
    items: []
  }),

  actions: {
    fetchIndustries() {
      this.loading = true

      // simulasi API delay
      setTimeout(() => {
        this.items = [
          { name: 'Retail', icon: 'Store' },
          { name: 'Manufacturing', icon: 'Factory' },
          { name: 'Trading', icon: 'Truck' },
          { name: 'Food & Beverage', icon: 'Utensils' },
          { name: 'Real Estate', icon: 'Building2' },
          { name: 'Construction', icon: 'HardHat' },
          { name: 'Professional Services', icon: 'User' },
          { name: 'Education', icon: 'GraduationCap' },
          { name: 'Rental', icon: 'Key' },
          { name: 'Engineering', icon: 'Cog' },
          { name: 'Finance', icon: 'DollarSign' },
          { name: 'Project-Based', icon: 'Presentation' },
          { name: 'Logistics', icon: 'Ship' },
          { name: 'Mining', icon: 'Pickaxe' },
          { name: 'Government', icon: 'Landmark' },
          { name: 'Hospitality', icon: 'Hotel' }
        ]

        this.loading = false
      }, 1200)
    }
  }
})
