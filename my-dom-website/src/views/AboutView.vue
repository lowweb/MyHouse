<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Breadcrumbs -->
    <nav class="bg-white border-b" aria-label="Хлебные крошки">
      <div class="container mx-auto px-4 py-3">
        <div class="flex items-center gap-2 text-sm">
          <router-link to="/" class="text-gray-500 hover:text-primary">Главная</router-link>
          <span class="text-gray-400">/</span>
          <span class="text-gray-900 font-medium">О компании</span>
        </div>
      </div>
    </nav>

    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">О компании</h1>

      <div class="grid md:grid-cols-3 gap-6">
        <!-- Main Content -->
        <div class="md:col-span-2 space-y-6">
          <div class="bg-white rounded-xl shadow-md p-6">
            <h2 class="text-2xl font-bold mb-4">История</h2>
            <p class="text-gray-700 mb-4">
              Управляющая компания «Мой Дом» была основана в 2009 году с целью предоставления качественных услуг 
              по управлению многоквартирными домами. За годы работы мы зарекомендовали себя как надёжный партнёр 
              для собственников жилья.
            </p>
            <p class="text-gray-700">
              Сегодня под нашим управлением находится более 150 домов, в которых проживают тысячи семей. 
              Мы постоянно развиваемся, внедряем новые технологии и улучшаем качество обслуживания.
            </p>
          </div>

          <div class="bg-white rounded-xl shadow-md p-6">
            <h2 class="text-2xl font-bold mb-4">Юридические реквизиты</h2>
            <div class="space-y-3 text-sm">
              <div class="flex justify-between py-2 border-b">
                <span class="text-gray-600">Полное наименование:</span>
                <span class="font-medium">ООО «УК Мой Дом»</span>
              </div>
              <div class="flex justify-between py-2 border-b">
                <span class="text-gray-600">ИНН:</span>
                <span class="font-medium">2500000000</span>
              </div>
              <div class="flex justify-between py-2 border-b">
                <span class="text-gray-600">КПП:</span>
                <span class="font-medium">250001001</span>
              </div>
              <div class="flex justify-between py-2 border-b">
                <span class="text-gray-600">ОГРН:</span>
                <span class="font-medium">1092500000000</span>
              </div>
              <div class="flex justify-between py-2 border-b">
                <span class="text-gray-600">Лицензия:</span>
                <span class="font-medium">№25 от 15.05.2015</span>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-md p-6">
            <h2 class="text-2xl font-bold mb-4">Команда</h2>
            <div class="grid sm:grid-cols-2 gap-4">
              <div class="border rounded-lg p-4 flex items-center gap-4">
                <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-3xl">👤</div>
                <div>
                  <h3 class="font-semibold">Иванов Иван Иванович</h3>
                  <p class="text-sm text-gray-600">Директор</p>
                </div>
              </div>
              <div class="border rounded-lg p-4 flex items-center gap-4">
                <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-3xl">👤</div>
                <div>
                  <h3 class="font-semibold">Петрова Анна Сергеевна</h3>
                  <p class="text-sm text-gray-600">Главный бухгалтер</p>
                </div>
              </div>
              <div class="border rounded-lg p-4 flex items-center gap-4">
                <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-3xl">👤</div>
                <div>
                  <h3 class="font-semibold">Сидоров Пётр Петрович</h3>
                  <p class="text-sm text-gray-600">Технический директор</p>
                </div>
              </div>
              <div class="border rounded-lg p-4 flex items-center gap-4">
                <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-3xl">👤</div>
                <div>
                  <h3 class="font-semibold">Кузнецова Мария Ивановна</h3>
                  <p class="text-sm text-gray-600">Руководитель отдела работы с жителями</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
          <div class="bg-white rounded-xl shadow-md p-6">
            <h3 class="text-lg font-bold mb-4">Документы</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="flex items-center gap-2 text-primary hover:underline">
                  📄 Лицензия на управление МКД
                </a>
              </li>
              <li>
                <a href="#" class="flex items-center gap-2 text-primary hover:underline">
                  📄 Свидетельство о регистрации
                </a>
              </li>
              <li>
                <a href="#" class="flex items-center gap-2 text-primary hover:underline">
                  📄 Устав компании
                </a>
              </li>
              <li>
                <a href="#" class="flex items-center gap-2 text-primary hover:underline">
                  📄 Сертификаты соответствия
                </a>
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-xl shadow-md p-6">
            <h3 class="text-lg font-bold mb-4">Социальная ответственность</h3>
            <p class="text-sm text-gray-700 mb-4">
              Мы активно участвуем в жизни города и поддерживаем социальные инициативы:
            </p>
            <ul class="space-y-2 text-sm text-gray-700">
              <li class="flex items-start gap-2">
                <span>✓</span>
                <span>Благоустройство дворовых территорий</span>
              </li>
              <li class="flex items-start gap-2">
                <span>✓</span>
                <span>Поддержка ветеранов и пожилых людей</span>
              </li>
              <li class="flex items-start gap-2">
                <span>✓</span>
                <span>Экологические акции</span>
              </li>
              <li class="flex items-start gap-2">
                <span>✓</span>
                <span>Спортивные мероприятия для жителей</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// About page component
</script>
