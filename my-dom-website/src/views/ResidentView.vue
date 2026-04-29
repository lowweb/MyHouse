<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white border-b" aria-label="Хлебные крошки">
      <div class="container mx-auto px-4 py-3">
        <div class="flex items-center gap-2 text-sm">
          <router-link to="/" class="text-gray-500 hover:text-primary">Главная</router-link>
          <span class="text-gray-400">/</span>
          <span class="text-gray-900 font-medium">Жителю</span>
        </div>
      </div>
    </nav>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">Жителю</h1>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <router-link to="/resident/?action=readings" class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <div class="text-4xl mb-4">📝</div>
          <h3 class="text-xl font-bold mb-2">Передать показания</h3>
          <p class="text-gray-600">Отправьте показания счётчиков онлайн</p>
        </router-link>
        <router-link to="/faq/" class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <div class="text-4xl mb-4">❓</div>
          <h3 class="text-xl font-bold mb-2">Частые вопросы</h3>
          <p class="text-gray-600">Найдите ответы на популярные вопросы</p>
        </router-link>
        <router-link to="/resident/?action=phones" class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <div class="text-4xl mb-4">📞</div>
          <h3 class="text-xl font-bold mb-2">Телефоны ЖКХ</h3>
          <p class="text-gray-600">Контакты аварийных служб</p>
        </router-link>
        <router-link to="/resident/?action=links" class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <div class="text-4xl mb-4">🔗</div>
          <h3 class="text-xl font-bold mb-2">Полезные ссылки</h3>
          <p class="text-gray-600">Ресурсы для жителей</p>
        </router-link>
        <router-link to="/documents/templates/" class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <div class="text-4xl mb-4">📄</div>
          <h3 class="text-xl font-bold mb-2">Образцы заявлений</h3>
          <p class="text-gray-600">Шаблоны документов для скачивания</p>
        </router-link>
        <router-link to="/calculator/" class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <div class="text-4xl mb-4">💰</div>
          <h3 class="text-xl font-bold mb-2">Калькулятор платежей</h3>
          <p class="text-gray-600">Рассчитайте стоимость услуг</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
// Resident page component
</script>
