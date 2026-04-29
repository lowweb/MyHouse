<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white border-b" aria-label="Хлебные крошки">
      <div class="container mx-auto px-4 py-3">
        <div class="flex items-center gap-2 text-sm">
          <router-link to="/" class="text-gray-500 hover:text-primary">Главная</router-link>
          <span class="text-gray-400">/</span>
          <span class="text-gray-900 font-medium">Стоимость услуг</span>
        </div>
      </div>
    </nav>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">Стоимость услуг</h1>
      <div class="bg-white rounded-xl shadow-md p-6">
        <h2 class="text-xl font-bold mb-4">Тарифы на коммунальные услуги (2024)</h2>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b">
                <th class="text-left py-3 px-4">Услуга</th>
                <th class="text-left py-3 px-4">Ед. измерения</th>
                <th class="text-right py-3 px-4">Тариф</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="tariff in store.tariffsList" :key="tariff.id" class="border-b">
                <td class="py-3 px-4">{{ tariff.name }}</td>
                <td class="py-3 px-4 text-gray-600">{{ tariff.unit }}</td>
                <td class="py-3 px-4 text-right font-semibold">{{ tariff.price.toFixed(2) }} ₽</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useAppStore } from '@/stores/app'
const store = useAppStore()
</script>
