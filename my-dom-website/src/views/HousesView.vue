<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Breadcrumbs -->
    <nav class="bg-white border-b" aria-label="Хлебные крошки">
      <div class="container mx-auto px-4 py-3">
        <div class="flex items-center gap-2 text-sm">
          <router-link to="/" class="text-gray-500 hover:text-primary">Главная</router-link>
          <span class="text-gray-400">/</span>
          <span class="text-gray-900 font-medium">Дома в управлении</span>
        </div>
      </div>
    </nav>

    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">Дома в управлении</h1>

      <!-- Filters -->
      <div class="bg-white rounded-xl shadow-md p-6 mb-6">
        <div class="grid md:grid-cols-4 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Адрес</label>
            <input 
              v-model="filters.address"
              type="text" 
              placeholder="Введите адрес..." 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              @input="applyFilters"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Год постройки от</label>
            <input 
              v-model.number="filters.yearFrom"
              type="number" 
              placeholder="1960" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              @input="applyFilters"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Год постройки до</label>
            <input 
              v-model.number="filters.yearTo"
              type="number" 
              placeholder="2024" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              @input="applyFilters"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Площадь от, м²</label>
            <input 
              v-model.number="filters.areaFrom"
              type="number" 
              placeholder="1000" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              @input="applyFilters"
            />
          </div>
        </div>
        <div class="flex justify-between items-center mt-4 pt-4 border-t">
          <p class="text-sm text-gray-600">Найдено домов: <strong>{{ filteredBuildings.length }}</strong></p>
          <button @click="resetFilters" class="text-primary hover:underline text-sm">Сбросить фильтры</button>
        </div>
      </div>

      <!-- Buildings Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div v-for="building in filteredBuildings" :key="building.id" 
             class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border">
          <div class="h-48 bg-gray-200 flex items-center justify-center text-6xl">
            🏢
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-lg mb-2">{{ building.address }}</h3>
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2 py-1 bg-success/10 text-success text-xs rounded-full">✅ {{ building.status }}</span>
            </div>
            <div class="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
              <div>📅 {{ building.year }} г.</div>
              <div>🏗️ {{ building.floors }} эт.</div>
              <div>📐 {{ formatArea(building.area) }}</div>
              <div>🚪 {{ building.apartments }} кв.</div>
            </div>
            <router-link :to="`/houses/${building.id}`" 
                       class="block w-full text-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors">
              Подробнее
            </router-link>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredBuildings.length === 0" class="text-center py-16">
        <div class="text-6xl mb-4">🏠</div>
        <h3 class="text-xl font-semibold mb-2">Ничего не найдено</h3>
        <p class="text-gray-600 mb-4">Попробуйте изменить параметры поиска</p>
        <button @click="resetFilters" class="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors">
          Сбросить фильтры
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAppStore } from '@/stores/app'

const store = useAppStore()
const filters = ref({
  address: '',
  yearFrom: null,
  yearTo: null,
  areaFrom: null,
  areaTo: null
})

const filteredBuildings = computed(() => {
  return store.filterBuildings(filters.value)
})

function applyFilters() {
  // Filters are reactive, so this is automatic
}

function resetFilters() {
  filters.value = {
    address: '',
    yearFrom: null,
    yearTo: null,
    areaFrom: null,
    areaTo: null
  }
}

function formatArea(area) {
  return area.toLocaleString('ru-RU') + ' м²'
}
</script>
