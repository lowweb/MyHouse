<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white border-b" aria-label="Хлебные крошки">
      <div class="container mx-auto px-4 py-3">
        <div class="flex items-center gap-2 text-sm">
          <router-link to="/" class="text-gray-500 hover:text-primary">Главная</router-link>
          <span class="text-gray-400">/</span>
          <span class="text-gray-900 font-medium">Новости</span>
        </div>
      </div>
    </nav>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">Новости</h1>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="item in store.newsList" :key="item.id" 
             class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div class="h-48 bg-gray-200 flex items-center justify-center text-6xl">📰</div>
          <div class="p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="px-2 py-1 bg-blue-100 text-primary text-xs rounded-full">{{ item.category }}</span>
              <span class="text-sm text-gray-500">{{ formatDate(item.date) }}</span>
            </div>
            <h3 class="font-semibold text-lg mb-2">{{ item.title }}</h3>
            <p class="text-gray-600 text-sm mb-4">{{ item.preview }}</p>
            <a href="#" class="text-primary font-medium hover:underline">Читать далее →</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useAppStore } from '@/stores/app'
const store = useAppStore()
function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
}
</script>
