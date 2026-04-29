<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white border-b" aria-label="Хлебные крошки">
      <div class="container mx-auto px-4 py-3">
        <div class="flex items-center gap-2 text-sm">
          <router-link to="/" class="text-gray-500 hover:text-primary">Главная</router-link>
          <span class="text-gray-400">/</span>
          <span class="text-gray-900 font-medium">Частые вопросы</span>
        </div>
      </div>
    </nav>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">Частые вопросы</h1>
      <div class="mb-6">
        <input type="text" placeholder="Поиск вопроса..." class="w-full md:w-96 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
      </div>
      <div class="space-y-4">
        <div v-for="i in 5" :key="i" class="bg-white rounded-xl shadow-md p-6">
          <h3 class="font-bold text-lg mb-2">Вопрос {{ i }}: Как передать показания счётчиков?</h3>
          <p class="text-gray-700">Вы можете передать показания через личный кабинет, по телефону диспетчерской службы или заполнив форму на сайте в разделе "Жителю".</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// FAQ page component
</script>
