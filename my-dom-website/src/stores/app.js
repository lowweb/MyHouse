import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { buildings, emergencyAnnouncements, news, companyFacts, tariffs } from '@/data/mockData'

export const useAppStore = defineStore('app', () => {
  // State
  const emergencyBarVisible = ref(true)
  const mobileMenuOpen = ref(false)
  const searchQuery = ref('')
  
  // Getters
  const buildingsList = computed(() => buildings)
  const emergencyList = computed(() => emergencyAnnouncements)
  const newsList = computed(() => news)
  const factsList = computed(() => companyFacts)
  const tariffsList = computed(() => tariffs)
  
  const hasEmergency = computed(() => emergencyAnnouncements.length > 0)
  
  // Actions
  function toggleMobileMenu() {
    mobileMenuOpen.value = !mobileMenuOpen.value
  }
  
  function closeMobileMenu() {
    mobileMenuOpen.value = false
  }
  
  function setSearchQuery(query) {
    searchQuery.value = query
  }
  
  function hideEmergencyBar() {
    emergencyBarVisible.value = false
  }
  
  function getBuildingById(id) {
    return buildings.find(b => b.id === parseInt(id))
  }
  
  function filterBuildings(filters) {
    let result = [...buildings]
    
    if (filters.address) {
      result = result.filter(b => 
        b.address.toLowerCase().includes(filters.address.toLowerCase())
      )
    }
    
    if (filters.yearFrom) {
      result = result.filter(b => b.year >= parseInt(filters.yearFrom))
    }
    
    if (filters.yearTo) {
      result = result.filter(b => b.year <= parseInt(filters.yearTo))
    }
    
    if (filters.areaFrom) {
      result = result.filter(b => b.area >= parseInt(filters.areaFrom))
    }
    
    if (filters.areaTo) {
      result = result.filter(b => b.area <= parseInt(filters.areaTo))
    }
    
    return result
  }
  
  return {
    // State
    emergencyBarVisible,
    mobileMenuOpen,
    searchQuery,
    
    // Getters
    buildingsList,
    emergencyList,
    newsList,
    factsList,
    tariffsList,
    hasEmergency,
    
    // Actions
    toggleMobileMenu,
    closeMobileMenu,
    setSearchQuery,
    hideEmergencyBar,
    getBuildingById,
    filterBuildings
  }
})
