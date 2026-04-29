<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white border-b" aria-label="Хлебные крошки">
      <div class="container mx-auto px-4 py-3">
        <div class="flex items-center gap-2 text-sm">
          <router-link to="/" class="text-gray-500 hover:text-primary">Главная</router-link>
          <span class="text-gray-400">/</span>
          <span class="text-gray-900 font-medium">Экстренные объявления</span>
        </div>
      </div>
    </nav>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">🚨 Экстренные объявления</h1>
      <div class="space-y-4">
        <div v-for="announcement in store.emergencyList" :key="announcement.id" 
             class="bg-white rounded-xl shadow-md p-6 border-l-4 border-warning">
          <div class="flex items-start justify-between mb-4">
            <h2 class="text-xl font-bold">{{ announcement.title }}</h2>
            <span class="text-sm text-gray-500">{{ formatDate(announcement.date) }}</span>
          </div>
          <p class="text-gray-700 mb-4">{{ announcement.description }}</p>
          <div class="flex items-center gap-2 text-gray-600">
            <span>📍</span>
            <span>{{ announcement.addresses.join(', ') }}</span>
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
