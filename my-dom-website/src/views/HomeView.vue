<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary to-blue-700 text-white py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-3xl md:text-5xl font-bold mb-6">
            Управляющая компания «Мой Дом»
          </h1>
          <p class="text-lg md:text-xl mb-8 text-blue-100">
            Профессиональное управление и обслуживание многоквартирных домов
          </p>
          
          <!-- Search Bar -->
          <div class="relative max-w-2xl mx-auto mb-8">
            <input 
              v-model="searchAddress"
              type="text" 
              placeholder="Найти дом по адресу..." 
              class="w-full px-6 py-4 pl-12 rounded-xl text-gray-900 text-lg focus:ring-4 focus:ring-white/30 focus:outline-none"
              @keyup.enter="searchBuilding"
              aria-label="Поиск дома по адресу"
            />
            <span class="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">🔍</span>
            <button 
              @click="searchBuilding"
              class="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-primary hover:bg-blue-600 rounded-lg font-medium transition-colors"
            >
              Найти
            </button>
          </div>
          
          <!-- Quick Actions -->
          <div class="flex flex-wrap justify-center gap-3 md:gap-4">
            <router-link to="/resident/?action=readings" class="px-6 py-3 bg-success hover:bg-green-600 rounded-xl font-medium transition-colors flex items-center gap-2">
              📝 Передать показания
            </router-link>
            <router-link to="/calculator/" class="px-6 py-3 bg-white text-primary hover:bg-gray-100 rounded-xl font-medium transition-colors flex items-center gap-2">
              💰 Оплатить
            </router-link>
            <router-link to="/feedback/" class="px-6 py-3 bg-warning hover:bg-orange-600 rounded-xl font-medium transition-colors flex items-center gap-2">
              📋 Подать заявку
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Emergency Announcements -->
    <section v-if="store.hasEmergency" class="py-8 bg-warning/10">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
          🚨 Экстренные объявления
        </h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div v-for="announcement in store.emergencyList" :key="announcement.id" 
               class="bg-white rounded-xl p-6 shadow-md border-l-4 border-warning">
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-semibold text-lg">{{ announcement.title }}</h3>
              <span class="text-sm text-gray-500">{{ formatDate(announcement.date) }}</span>
            </div>
            <p class="text-gray-600 mb-3">{{ announcement.description }}</p>
            <div class="flex items-center gap-2 text-sm text-gray-500">
              <span>📍</span>
              <span>{{ announcement.addresses.join(', ') }}</span>
            </div>
            <router-link to="/emergency/" class="inline-block mt-4 text-primary font-medium hover:underline">
              Подробнее →
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Director's Message -->
    <section class="py-12 md:py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="flex flex-col md:flex-row items-center gap-8">
            <div class="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-200 flex items-center justify-center text-6xl flex-shrink-0">
              👤
            </div>
            <div class="flex-1">
              <h2 class="text-2xl md:text-3xl font-bold mb-4">Обращение директора</h2>
              <blockquote class="text-lg text-gray-700 italic mb-4">
                «Уважаемые жители! Наша команда стремится сделать проживание в ваших домах максимально комфортным. 
                Мы работаем над улучшением качества услуг и открыты для диалога.»
              </blockquote>
              <p class="font-semibold text-gray-900">— Иванов Иван Иванович</p>
              <p class="text-sm text-gray-500">Директор УК «Мой Дом»</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Facts -->
    <section class="py-12 md:py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl md:text-3xl font-bold text-center mb-8">Наши показатели</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div v-for="fact in store.factsList" :key="fact.id" 
               class="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div class="text-4xl mb-3">{{ fact.icon }}</div>
            <div class="text-3xl md:text-4xl font-bold text-primary mb-2">{{ fact.value }}</div>
            <div class="text-gray-600">{{ fact.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Buildings Preview -->
    <section class="py-12 md:py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-2xl md:text-3xl font-bold">Дома в управлении</h2>
          <router-link to="/houses/" class="text-primary font-medium hover:underline flex items-center gap-1">
            Все дома →
          </router-link>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="building in displayedBuildings" :key="building.id" 
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
      </div>
    </section>

    <!-- News -->
    <section class="py-12 md:py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-2xl md:text-3xl font-bold">Новости</h2>
          <router-link to="/news/" class="text-primary font-medium hover:underline flex items-center gap-1">
            Все новости →
          </router-link>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="item in store.newsList" :key="item.id" 
               class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gray-200 flex items-center justify-center text-6xl">
              📰
            </div>
            <div class="p-4">
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-1 bg-blue-100 text-primary text-xs rounded-full">{{ item.category }}</span>
                <span class="text-sm text-gray-500">{{ formatDate(item.date) }}</span>
              </div>
              <h3 class="font-semibold text-lg mb-2">{{ item.title }}</h3>
              <p class="text-gray-600 text-sm mb-4">{{ item.preview }}</p>
              <router-link :to="`/news/?id=${item.id}`" class="text-primary font-medium hover:underline">
                Читать далее →
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-12 md:py-16 bg-primary text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">Остались вопросы?</h2>
        <p class="text-lg mb-8 text-blue-100">Свяжитесь с нами любым удобным способом</p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="tel:+74232222222" class="px-6 py-3 bg-white text-primary rounded-xl font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
            📞 Позвонить
          </a>
          <router-link to="/feedback/" class="px-6 py-3 bg-warning hover:bg-orange-600 rounded-xl font-medium transition-colors flex items-center gap-2">
            ✉️ Написать сообщение
          </router-link>
          <router-link to="/faq/" class="px-6 py-3 border-2 border-white rounded-xl font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
            ❓ Частые вопросы
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAppStore } from '@/stores/app'
import { useRouter } from 'vue-router'

const store = useAppStore()
const router = useRouter()
const searchAddress = ref('')

const displayedBuildings = computed(() => {
  return store.buildingsList.slice(0, 4)
})

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
}

function formatArea(area) {
  return area.toLocaleString('ru-RU') + ' м²'
}

function searchBuilding() {
  if (searchAddress.value.trim()) {
    router.push({ path: '/houses/', query: { search: searchAddress.value } })
  }
}
</script>
