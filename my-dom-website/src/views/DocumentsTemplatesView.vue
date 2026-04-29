<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white border-b" aria-label="Хлебные крошки">
      <div class="container mx-auto px-4 py-3">
        <div class="flex items-center gap-2 text-sm">
          <router-link to="/" class="text-gray-500 hover:text-primary">Главная</router-link>
          <span class="text-gray-400">/</span>
          <span class="text-gray-900 font-medium">Шаблоны документов</span>
        </div>
      </div>
    </nav>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">Шаблоны документов</h1>
      <div class="grid md:grid-cols-2 gap-6">
        <div v-for="doc in documents" :key="doc.id" class="bg-white rounded-xl shadow-md p-6 flex justify-between items-center">
          <div>
            <h3 class="font-semibold mb-1">{{ doc.name }}</h3>
            <p class="text-sm text-gray-600">{{ doc.type }}</p>
          </div>
          <button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
            📄 Скачать
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const documents = [
  { id: 1, name: 'Заявление на передачу показаний', type: 'DOC/PDF' },
  { id: 2, name: 'Заявление на перерасчёт', type: 'DOC/PDF' },
  { id: 3, name: 'Договор управления МКД', type: 'PDF' },
  { id: 4, name: 'Акт осмотра помещения', type: 'DOC/PDF' }
]
</script>
