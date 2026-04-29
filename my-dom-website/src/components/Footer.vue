<template>
  <footer class="bg-gray-900 text-white">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-2xl">
              🏠
            </div>
            <div>
              <h3 class="text-xl font-bold">Мой Дом</h3>
              <p class="text-sm text-gray-400">Управляющая компания</p>
            </div>
          </div>
          
          <div class="space-y-3 text-sm">
            <div class="flex items-start gap-2">
              <span>📍</span>
              <span>г. Владивосток, ул. Светланская, д. 25</span>
            </div>
            <div class="flex items-center gap-2">
              <span>📞</span>
              <div>
                <p class="font-medium">Диспетчер: +7(4232)222-22-22</p>
                <p class="text-gray-400 text-xs">пн-пт 8:00–17:00</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <span>🚨</span>
              <div>
                <p class="font-medium">Аварийная: +7(4232)222-22-22</p>
                <p class="text-gray-400 text-xs">24/7</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <span>✉️</span>
              <a href="mailto:info@moidom-uk.ru" class="hover:text-primary transition-colors">info@moidom-uk.ru</a>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Быстрые ссылки</h4>
          <ul class="space-y-2 text-sm">
            <li><router-link to="/resident/?action=readings" class="hover:text-primary transition-colors">Передать показания</router-link></li>
            <li><router-link to="/calculator/" class="hover:text-primary transition-colors">Оплатить квитанцию</router-link></li>
            <li><router-link to="/feedback/" class="hover:text-primary transition-colors">Подать заявку</router-link></li>
            <li><router-link to="/documents/templates/" class="hover:text-primary transition-colors">Скачать документы</router-link></li>
            <li><router-link to="/faq/" class="hover:text-primary transition-colors">Задать вопрос</router-link></li>
          </ul>
        </div>

        <!-- Sections -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Разделы</h4>
          <ul class="space-y-2 text-sm">
            <li><router-link to="/about/" class="hover:text-primary transition-colors">О компании</router-link></li>
            <li><router-link to="/houses/" class="hover:text-primary transition-colors">Дома в управлении</router-link></li>
            <li><router-link to="/services/" class="hover:text-primary transition-colors">Тарифы</router-link></li>
            <li><router-link to="/disclosure/" class="hover:text-primary transition-colors">Раскрытие информации</router-link></li>
            <li><router-link to="/contacts/" class="hover:text-primary transition-colors">Контакты</router-link></li>
            <li><router-link to="/news/" class="hover:text-primary transition-colors">Новости</router-link></li>
          </ul>
        </div>

        <!-- Social & Legal -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Соцсети и мессенджеры</h4>
          <div class="flex flex-wrap gap-2 mb-6">
            <a href="#" class="px-3 py-2 bg-blue-500 rounded-lg text-sm hover:bg-blue-600 transition-colors" aria-label="Telegram">
              📱 Telegram
            </a>
            <a href="#" class="px-3 py-2 bg-blue-600 rounded-lg text-sm hover:bg-blue-700 transition-colors" aria-label="ВКонтакте">
              💬 ВКонтакте
            </a>
            <a href="#" class="px-3 py-2 bg-orange-500 rounded-lg text-sm hover:bg-orange-600 transition-colors" aria-label="Одноклассники">
              👍 Одноклассники
            </a>
          </div>
          
          <h4 class="text-lg font-semibold mb-4">Юридическая информация</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><router-link to="/legal-info/?type=privacy" class="hover:text-white transition-colors">Политика конфиденциальности</router-link></li>
            <li><router-link to="/legal-info/?type=terms" class="hover:text-white transition-colors">Пользовательское соглашение</router-link></li>
            <li><router-link to="/about/?section=details" class="hover:text-white transition-colors">Реквизиты компании</router-link></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2024 УК «Мой Дом». Все права защищены.</p>
          <div class="flex flex-wrap gap-4">
            <router-link to="/sitemap/" class="hover:text-white transition-colors">Карта сайта</router-link>
            <router-link to="/mobile-app/" class="hover:text-white transition-colors">Мобильное приложение</router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component - no script needed for now
</script>
