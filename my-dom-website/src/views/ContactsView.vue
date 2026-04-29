<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Breadcrumbs -->
    <nav class="bg-white border-b" aria-label="Хлебные крошки">
      <div class="container mx-auto px-4 py-3">
        <div class="flex items-center gap-2 text-sm">
          <router-link to="/" class="text-gray-500 hover:text-primary">Главная</router-link>
          <span class="text-gray-400">/</span>
          <span class="text-gray-900 font-medium">Контакты</span>
        </div>
      </div>
    </nav>

    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">Контакты</h1>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="space-y-6">
          <div class="bg-white rounded-xl shadow-md p-6">
            <h2 class="text-xl font-bold mb-4">Офис компании</h2>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <span class="text-2xl">📍</span>
                <div>
                  <p class="font-semibold">Адрес:</p>
                  <p class="text-gray-700">г. Владивосток, ул. Светланская, д. 25, офис 101</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-2xl">🕐</span>
                <div>
                  <p class="font-semibold">Режим работы:</p>
                  <p class="text-gray-700">Пн-Пт: 8:00–17:00</p>
                  <p class="text-gray-700">Сб-Вс: Выходной</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-2xl">📞</span>
                <div>
                  <p class="font-semibold">Телефоны:</p>
                  <p class="text-gray-700">Диспетчер: +7(4232)222-22-22</p>
                  <p class="text-gray-700">Бухгалтерия: +7(4232)222-22-23</p>
                  <p class="text-gray-700">Приёмная: +7(4232)222-22-24</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-2xl">✉️</span>
                <div>
                  <p class="font-semibold">Email:</p>
                  <a href="mailto:info@moidom-uk.ru" class="text-primary hover:underline">info@moidom-uk.ru</a>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-md p-6">
            <h2 class="text-xl font-bold mb-4">Аварийная служба</h2>
            <div class="bg-warning/10 border-l-4 border-warning p-4 rounded-lg">
              <p class="font-semibold text-lg mb-2">🚨 Круглосуточно</p>
              <a href="tel:+74232222222" class="text-2xl font-bold text-primary hover:underline">+7(4232)222-22-22</a>
              <p class="text-sm text-gray-600 mt-2">По вопросам аварийных ситуаций</p>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div class="bg-white rounded-xl shadow-md p-6">
            <h2 class="text-xl font-bold mb-4">Написать сообщение</h2>
            <form @submit.prevent="submitForm" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">ФИО *</label>
                <input v-model="form.name" type="text" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Телефон *</label>
                <input v-model="form.phone" type="tel" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input v-model="form.email" type="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Сообщение *</label>
                <textarea v-model="form.message" rows="4" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>
              </div>
              <button type="submit" class="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- Map Placeholder -->
      <div class="mt-6 bg-white rounded-xl shadow-md p-6">
        <h2 class="text-xl font-bold mb-4">Карта проезда</h2>
        <div class="h-96 bg-gray-200 rounded-lg flex items-center justify-center text-6xl">
          🗺️
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  phone: '',
  email: '',
  message: ''
})

function submitForm() {
  alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.')
  form.value = { name: '', phone: '', email: '', message: '' }
}
</script>
