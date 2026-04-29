<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <!-- Emergency Bar -->
    <div v-if="store.hasEmergency && store.emergencyBarVisible" class="bg-warning text-white px-4 py-2 text-sm">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center gap-2">
          <span class="text-lg">🚨</span>
          <span><strong>Внимание:</strong> {{ store.emergencyList[0]?.title }}</span>
        </div>
        <button @click="store.hideEmergencyBar" class="hover:bg-white/20 rounded p-1" aria-label="Закрыть">
          ✕
        </button>
      </div>
    </div>

    <!-- Main Header -->
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-3" aria-label="УК Мой Дом - главная страница">
          <div class="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl md:text-2xl">
            🏠
          </div>
          <div class="hidden sm:block">
            <h1 class="text-lg md:text-xl font-bold text-gray-900">Мой Дом</h1>
            <p class="text-xs text-gray-500">Управляющая компания</p>
          </div>
        </router-link>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-1" aria-label="Основное меню">
          <router-link 
            v-for="item in menuItems" 
            :key="item.path"
            :to="item.path"
            class="px-3 py-2 rounded-lg text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200 text-sm font-medium"
            :class="{ 'bg-primary text-white': $route.path === item.path }"
          >
            {{ item.label }}
          </router-link>
          
          <!-- Dropdown for Services -->
          <div class="relative group">
            <button class="px-3 py-2 rounded-lg text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200 text-sm font-medium flex items-center gap-1">
              Стоимость услуг
              <span>▼</span>
            </button>
            <div class="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg py-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <router-link to="/services/" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Цены на доп. услуги</router-link>
              <router-link to="/services/?tab=tariffs" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Тарифы ЖКУ</router-link>
              <router-link to="/calculator/" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Калькулятор платежей</router-link>
            </div>
          </div>

          <!-- Dropdown for Gallery -->
          <div class="relative group">
            <button class="px-3 py-2 rounded-lg text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200 text-sm font-medium flex items-center gap-1">
              Фотогалерея
              <span>▼</span>
            </button>
            <div class="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg py-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <router-link to="/gallery/?cat=landscaping" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Благоустройство</router-link>
              <router-link to="/gallery/?cat=holidays" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Праздники</router-link>
              <router-link to="/gallery/?cat=subbotniks" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Субботники</router-link>
              <router-link to="/gallery/?cat=before-after" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">До и после ремонта</router-link>
              <router-link to="/gallery/?cat=awards" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Награды</router-link>
            </div>
          </div>

          <!-- Dropdown for Resident -->
          <div class="relative group">
            <button class="px-3 py-2 rounded-lg text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200 text-sm font-medium flex items-center gap-1">
              Жителю
              <span>▼</span>
            </button>
            <div class="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg py-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <router-link to="/resident/?action=readings" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Передать показания</router-link>
              <router-link to="/faq/" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Частые вопросы</router-link>
              <router-link to="/resident/?action=phones" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Телефоны ЖКХ</router-link>
              <router-link to="/resident/?action=links" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Полезные ссылки</router-link>
              <router-link to="/documents/templates/" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Образцы заявлений</router-link>
            </div>
          </div>

          <!-- Dropdown for Disclosure -->
          <div class="relative group">
            <button class="px-3 py-2 rounded-lg text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200 text-sm font-medium flex items-center gap-1">
              Раскрытие информации
              <span>▼</span>
            </button>
            <div class="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg py-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <router-link to="/disclosure/?form=1.1" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Форма 1.1–2.6</router-link>
              <router-link to="/disclosure/?type=financial" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Финансовые отчёты</router-link>
              <router-link to="/disclosure/?type=plans" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Планы работ</router-link>
              <router-link to="/disclosure/?type=repair" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Капремонт</router-link>
              <router-link to="/disclosure/?type=archive" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Архив документов</router-link>
            </div>
          </div>
        </nav>

        <!-- Search and Mobile Menu Button -->
        <div class="flex items-center gap-2 md:gap-4">
          <!-- Search -->
          <div class="hidden md:block relative">
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Поиск по сайту..." 
              class="w-48 lg:w-64 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
              @keyup.enter="handleSearch"
              aria-label="Поиск по сайту"
            />
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          </div>

          <!-- Quick Actions Desktop -->
          <div class="hidden lg:flex items-center gap-2">
            <router-link to="/resident/?action=readings" class="px-4 py-2 bg-success text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
              Передать показания
            </router-link>
            <router-link to="/feedback/" class="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
              Подать заявку
            </router-link>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            @click="store.toggleMobileMenu" 
            class="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Открыть меню"
            :aria-expanded="store.mobileMenuOpen"
          >
            <span class="text-2xl">{{ store.mobileMenuOpen ? '✕' : '☰' }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="store.mobileMenuOpen" class="lg:hidden bg-white border-t">
        <div class="container mx-auto px-4 py-4 space-y-2 max-h-[80vh] overflow-y-auto">
          <!-- Mobile Search -->
          <div class="relative mb-4">
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Поиск по сайту..." 
              class="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              @keyup.enter="handleSearch"
              aria-label="Поиск по сайту"
            />
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          </div>

          <!-- Mobile Menu Items -->
          <router-link 
            v-for="item in menuItems" 
            :key="item.path"
            :to="item.path"
            class="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 font-medium"
            :class="{ 'bg-primary text-white': $route.path === item.path }"
            @click="store.closeMobileMenu"
          >
            {{ item.label }}
          </router-link>

          <!-- Mobile Quick Actions -->
          <div class="pt-4 border-t space-y-2">
            <router-link to="/resident/?action=readings" class="block w-full px-4 py-3 bg-success text-white rounded-lg font-medium text-center" @click="store.closeMobileMenu">
              📝 Передать показания
            </router-link>
            <router-link to="/calculator/" class="block w-full px-4 py-3 bg-primary text-white rounded-lg font-medium text-center" @click="store.closeMobileMenu">
              💰 Калькулятор платежей
            </router-link>
            <router-link to="/feedback/" class="block w-full px-4 py-3 bg-gray-800 text-white rounded-lg font-medium text-center" @click="store.closeMobileMenu">
              ✉️ Подать заявку
            </router-link>
          </div>

          <!-- Mobile Contact Buttons -->
          <div class="pt-4 border-t space-y-2">
            <a href="tel:+74232222222" class="block w-full px-4 py-3 border-2 border-primary text-primary rounded-lg font-medium text-center hover:bg-primary hover:text-white transition-colors">
              📞 Позвонить
            </a>
            <a href="mailto:info@moidom-uk.ru" class="block w-full px-4 py-3 border border-gray-300 rounded-lg font-medium text-center hover:bg-gray-100 transition-colors">
              ✉️ Написать
            </a>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useAppStore } from '@/stores/app'
import { useRouter } from 'vue-router'

const store = useAppStore()
const router = useRouter()
const searchQuery = ref('')

const menuItems = [
  { path: '/', label: 'Главная' },
  { path: '/about/', label: 'О компании' },
  { path: '/houses/', label: 'Дома в управлении' },
  { path: '/contacts/', label: 'Контакты' }
]

function handleSearch() {
  if (searchQuery.value.trim()) {
    // Navigate to search results or filter current page
    console.log('Searching for:', searchQuery.value)
    store.setSearchQuery(searchQuery.value)
  }
}
</script>
