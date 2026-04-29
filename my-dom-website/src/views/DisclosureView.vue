<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white border-b" aria-label="Хлебные крошки">
      <div class="container mx-auto px-4 py-3">
        <div class="flex items-center gap-2 text-sm">
          <router-link to="/" class="text-gray-500 hover:text-primary">Главная</router-link>
          <span class="text-gray-400">/</span>
          <span class="text-gray-900 font-medium">Раскрытие информации</span>
        </div>
      </div>
    </nav>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">Раскрытие информации</h1>
      <div class="space-y-6">
        <div class="bg-white rounded-xl shadow-md p-6">
          <h2 class="text-xl font-bold mb-4">Форма 1.1–2.6</h2>
          <p class="text-gray-700 mb-4">Стандарт раскрытия информации управляющими организациями</p>
          <button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors">📄 Скачать формы</button>
        </div>
        <div class="bg-white rounded-xl shadow-md p-6">
          <h2 class="text-xl font-bold mb-4">Финансовые отчёты</h2>
          <ul class="space-y-2">
            <li><a href="#" class="text-primary hover:underline flex items-center gap-2">📄 Отчёт за 2024 год</a></li>
            <li><a href="#" class="text-primary hover:underline flex items-center gap-2">📄 Отчёт за 2023 год</a></li>
            <li><a href="#" class="text-primary hover:underline flex items-center gap-2">📄 Отчёт за 2022 год</a></li>
          </ul>
        </div>
        <div class="bg-white rounded-xl shadow-md p-6">
          <h2 class="text-xl font-bold mb-4">Планы работ</h2>
          <ul class="space-y-2">
            <li><a href="#" class="text-primary hover:underline flex items-center gap-2">📋 План на 2024 год</a></li>
            <li><a href="#" class="text-primary hover:underline flex items-center gap-2">📋 План на 2023 год</a></li>
          </ul>
        </div>
        <div class="bg-white rounded-xl shadow-md p-6">
          <h2 class="text-xl font-bold mb-4">Капитальный ремонт</h2>
          <p class="text-gray-700 mb-4">Информация о программе капитального ремонта</p>
          <button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors">📄 Подробнее</button>
        </div>
        <div class="bg-white rounded-xl shadow-md p-6">
          <h2 class="text-xl font-bold mb-4">Архив документов</h2>
          <p class="text-gray-700 mb-4">Документы за предыдущие периоды</p>
          <button class="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">📁 Открыть архив</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// Disclosure page component
</script>
