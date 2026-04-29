<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white border-b" aria-label="Хлебные крошки">
      <div class="container mx-auto px-4 py-3">
        <div class="flex items-center gap-2 text-sm">
          <router-link to="/" class="text-gray-500 hover:text-primary">Главная</router-link>
          <span class="text-gray-400">/</span>
          <span class="text-gray-900 font-medium">Фотогалерея</span>
        </div>
      </div>
    </nav>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">Фотогалерея</h1>
      <div class="flex flex-wrap gap-2 mb-6">
        <button 
          v-for="cat in categories" 
          :key="cat.id"
          @click="activeCategory = cat.id"
          class="px-4 py-2 rounded-lg font-medium transition-colors"
          :class="activeCategory === cat.id ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100'"
        >
          {{ cat.name }}
        </button>
      </div>
      <div class="grid md:grid-cols-3 gap-6">
        <div v-for="i in 6" :key="i" class="bg-white rounded-xl overflow-hidden shadow-md">
          <div class="h-48 bg-gray-200 flex items-center justify-center text-6xl">📷</div>
          <div class="p-4">
            <p class="font-medium">Фото {{ i }}</p>
            <p class="text-sm text-gray-600">{{ activeCategoryName }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
const categories = [
  { id: 'all', name: 'Все' },
  { id: 'landscaping', name: 'Благоустройство' },
  { id: 'holidays', name: 'Праздники' },
  { id: 'subbotniks', name: 'Субботники' },
  { id: 'before-after', name: 'До и после ремонта' },
  { id: 'awards', name: 'Награды' }
]
const activeCategory = ref('all')
const activeCategoryName = computed(() => {
  const cat = categories.find(c => c.id === activeCategory.value)
  return cat ? cat.name : ''
})
</script>
