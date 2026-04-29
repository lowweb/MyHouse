<template>
  <div class="mobile-app-view">
    <div class="container">
      <!-- Хлебные крошки -->
      <nav class="breadcrumbs" aria-label="Навигация">
        <router-link to="/">Главная</router-link>
        <span class="separator">/</span>
        <span class="current">Мобильное приложение</span>
      </nav>

      <h1 class="page-title">Мобильное приложение УК «Мой Дом»</h1>
      <p class="page-description">Управляйте своим домом прямо со смартфона</p>

      <!-- Hero секция с изображением телефона -->
      <div class="app-hero">
        <div class="app-info">
          <h2>Все услуги в одном приложении</h2>
          <ul class="features-list">
            <li>📱 Передача показаний счётчиков за 30 секунд</li>
            <li>💳 Оплата квитанций без комиссии</li>
            <li>🔔 Уведомления об отключениях и работах</li>
            <li>📝 Заявки в диспетчерскую службу</li>
            <li>📊 История платежей и потреблений</li>
            <li>💬 Чат с управляющей компанией</li>
            <li>🏠 Информация о вашем доме</li>
            <li>📰 Новости и объявления</li>
          </ul>

          <div class="download-buttons">
            <a href="#" class="store-button app-store">
              <span class="store-icon">🍎</span>
              <span class="store-text">
                <small>Загрузите в</small>
                App Store
              </span>
            </a>
            <a href="#" class="store-button google-play">
              <span class="store-icon">▶️</span>
              <span class="store-text">
                <small>Доступно в</small>
                Google Play
              </span>
            </a>
            <a href="#" class="store-button ru-store">
              <span class="store-icon">🇷🇺</span>
              <span class="store-text">
                <small>Загрузите в</small>
                RuStore
              </span>
            </a>
          </div>
        </div>

        <div class="app-preview">
          <div class="phone-mockup">
            <div class="phone-screen">
              <div class="app-screenshot">
                <div class="screenshot-header">Мой Дом</div>
                <div class="screenshot-content">
                  <div class="mock-balance">
                    <span>Баланс:</span>
                    <strong>0 ₽</strong>
                  </div>
                  <div class="mock-actions">
                    <button>Передать показания</button>
                    <button>Оплатить</button>
                  </div>
                  <div class="mock-notifications">
                    <div class="mock-notification">
                      📢 Плановые работы 15 декабря
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Как это работает -->
      <div class="how-it-works">
        <h2>Как начать пользоваться</h2>
        <div class="steps-grid">
          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-icon">📲</div>
            <h3>Скачайте приложение</h3>
            <p>Выберите ваш магазин приложений и установите приложение «Мой Дом»</p>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-icon">🔐</div>
            <h3>Зарегистрируйтесь</h3>
            <p>Введите номер телефона или email для создания аккаунта</p>
          </div>

          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-icon">🏠</div>
            <h3>Добавьте дом</h3>
            <p>Найдите свой дом по адресу или выберите из списка</p>
          </div>

          <div class="step-card">
            <div class="step-number">4</div>
            <div class="step-icon">✅</div>
            <h3>Подтвердите право</h3>
            <p>Подтвердите, что вы собственник или жилец этого дома</p>
          </div>
        </div>
      </div>

      <!-- Возможности приложения -->
      <div class="app-features">
        <h2>Возможности приложения</h2>
        
        <div class="features-tabs">
          <button 
            v-for="tab in featureTabs" 
            :key="tab.id"
            :class="['tab-button', { active: activeTab === tab.id }]"
            @click="activeTab = tab.id"
          >
            {{ tab.name }}
          </button>
        </div>

        <div class="feature-content">
          <div v-show="activeTab === 'payments'" class="feature-panel">
            <div class="feature-image">💳</div>
            <h3>Платежи и квитанции</h3>
            <ul>
              <li>Просмотр текущих и архивных квитанций</li>
              <li>Оплата банковской картой без комиссии</li>
              <li>Автоплатёж по расписанию</li>
              <li>История всех транзакций</li>
              <li>Электронные чеки</li>
            </ul>
          </div>

          <div v-show="activeTab === 'meters'" class="feature-panel">
            <div class="feature-image">📊</div>
            <h3>Счётчики и показания</h3>
            <ul>
              <li>Передача показаний за 3 клика</li>
              <li>Графики потребления по месяцам</li>
              <li>Напоминания о сроках передачи</li>
              <li>Фотофиксация показаний</li>
              <li>История переданных данных</li>
            </ul>
          </div>

          <div v-show="activeTab === 'requests'" class="feature-panel">
            <div class="feature-image">📝</div>
            <h3>Заявки и обращения</h3>
            <ul>
              <li>Вызов сантехника, электрика</li>
              <li>Сообщение о проблеме</li>
              <li>Отслеживание статуса заявки</li>
              <li>Чат с диспетчером</li>
              <li>Оценка качества работ</li>
            </ul>
          </div>

          <div v-show="activeTab === 'news'" class="feature-panel">
            <div class="feature-image">📰</div>
            <h3>Новости и уведомления</h3>
            <ul>
              <li>Объявления от УК</li>
              <li>Информация об отключениях</li>
              <li>Плановые работы</li>
              <li>Собрания собственников</li>
              <li>Пуш-уведомления</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Часто задаваемые вопросы -->
      <div class="faq-section">
        <h2>Частые вопросы</h2>
        <div class="faq-list">
          <div 
            v-for="(question, index) in faqItems" 
            :key="index"
            class="faq-item"
            :class="{ open: openFaq === index }"
            @click="openFaq = openFaq === index ? null : index"
          >
            <div class="faq-question">
              {{ question.question }}
              <span class="faq-icon">{{ openFaq === index ? '−' : '+' }}</span>
            </div>
            <div class="faq-answer" v-show="openFaq === index">
              {{ question.answer }}
            </div>
          </div>
        </div>
      </div>

      <!-- Призыв к действию -->
      <div class="cta-section">
        <h2>Начните пользоваться прямо сейчас!</h2>
        <p>Более 5000 жильцов уже оценили удобство нашего приложения</p>
        <div class="download-buttons centered">
          <a href="#" class="store-button app-store large">
            <span class="store-icon">🍎</span>
            <span class="store-text">
              <small>Загрузите в</small>
              App Store
            </span>
          </a>
          <a href="#" class="store-button google-play large">
            <span class="store-icon">▶️</span>
            <span class="store-text">
              <small>Доступно в</small>
              Google Play
            </span>
          </a>
        </div>
      </div>

      <!-- Техническая поддержка -->
      <div class="support-section">
        <h3>Нужна помощь?</h3>
        <p>Если у вас возникли вопросы по использованию приложения:</p>
        <div class="support-contacts">
          <a href="tel:+74232222222" class="support-link">
            📞 +7(4232) 222-22-22
          </a>
          <a href="mailto:support@moidom-uk.ru" class="support-link">
            ✉️ support@moidom-uk.ru
          </a>
          <router-link to="/feedback/" class="support-link">
            💬 Написать в поддержку
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('payments')

const featureTabs = [
  { id: 'payments', name: 'Платежи' },
  { id: 'meters', name: 'Счётчики' },
  { id: 'requests', name: 'Заявки' },
  { id: 'news', name: 'Новости' }
]

const openFaq = ref(null)

const faqItems = [
  {
    question: 'Бесплатно ли приложение?',
    answer: 'Да, приложение полностью бесплатное. Вы платите только за коммунальные услуги по стандартным тарифам.'
  },
  {
    question: 'Безопасно ли передавать данные карты?',
    answer: 'Абсолютно безопасно. Мы используем защищённый платёжный шлюз с сертификацией PCI DSS. Данные карт не хранятся в приложении.'
  },
  {
    question: 'Можно ли добавить несколько домов?',
    answer: 'Да, вы можете добавить неограниченное количество домов и переключаться между ними в один клик.'
  },
  {
    question: 'Что делать, если я не собственник?',
    answer: 'Приложением могут пользоваться все жильцы дома. Для подтверждения достаточно указать номер лицевого счёта.'
  },
  {
    question: 'Как передать показания без интернета?',
    answer: 'В данный момент требуется подключение к интернету. Но мы работаем над офлайн-режимом.'
  },
  {
    question: 'Приложение работает на старых телефонах?',
    answer: 'Минимальные требования: iOS 12+ или Android 8+. Для старых устройств используйте веб-версию на сайте.'
  }
]
</script>

<style scoped>
.mobile-app-view {
  padding: 2rem 0;
  min-height: calc(100vh - 200px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.breadcrumbs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.breadcrumbs a {
  color: #2563eb;
  text-decoration: none;
}

.breadcrumbs a:hover {
  text-decoration: underline;
}

.separator {
  color: #d1d5db;
}

.page-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.page-description {
  color: #6b7280;
  margin-bottom: 2rem;
}

.app-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  margin-bottom: 4rem;
  padding: 3rem;
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  border-radius: 16px;
}

.app-info h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1.5rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.features-list li {
  padding: 0.5rem 0;
  color: #374151;
  font-size: 1rem;
}

.download-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.store-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background: #1f2937;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
}

.store-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.store-button.large {
  padding: 1rem 2rem;
}

.store-icon {
  font-size: 1.5rem;
}

.store-text {
  display: flex;
  flex-direction: column;
}

.store-text small {
  font-size: 0.625rem;
  opacity: 0.8;
}

.store-text {
  font-size: 0.875rem;
  font-weight: 600;
}

.app-store {
  background: #000;
}

.google-play {
  background: #3ddc84;
  color: #000;
}

.ru-store {
  background: #005fff;
}

.phone-mockup {
  display: flex;
  justify-content: center;
}

.phone-screen {
  width: 280px;
  height: 560px;
  background: #1f2937;
  border-radius: 40px;
  padding: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.app-screenshot {
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 32px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.screenshot-header {
  padding: 1rem;
  background: #2563eb;
  color: white;
  font-weight: 600;
  text-align: center;
}

.screenshot-content {
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mock-balance {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: #eff6ff;
  border-radius: 8px;
}

.mock-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
}

.mock-actions button {
  padding: 0.75rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.75rem;
  cursor: pointer;
}

.mock-notifications {
  flex: 1;
}

.mock-notification {
  padding: 0.75rem;
  background: #fef3c7;
  border-radius: 6px;
  font-size: 0.75rem;
  color: #92400e;
}

.how-it-works {
  margin-bottom: 4rem;
}

.how-it-works h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #1f2937;
  text-align: center;
  margin-bottom: 2rem;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.step-card {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
}

.step-number {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  background: #2563eb;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.step-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.step-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.step-card p {
  color: #6b7280;
  font-size: 0.875rem;
}

.app-features {
  margin-bottom: 4rem;
}

.app-features h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #1f2937;
  text-align: center;
  margin-bottom: 2rem;
}

.features-tabs {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.tab-button {
  padding: 0.75rem 1.5rem;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s;
}

.tab-button:hover {
  border-color: #2563eb;
  color: #2563eb;
}

.tab-button.active {
  background: #2563eb;
  border-color: #2563eb;
  color: white;
}

.feature-content {
  background: white;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.feature-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.feature-image {
  font-size: 5rem;
  margin-bottom: 1.5rem;
}

.feature-panel h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.feature-panel ul {
  list-style: none;
  padding: 0;
  max-width: 500px;
}

.feature-panel li {
  padding: 0.5rem 0;
  color: #374151;
  position: relative;
  padding-left: 1.5rem;
}

.feature-panel li:before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #10b981;
  font-weight: 700;
}

.faq-section {
  margin-bottom: 4rem;
}

.faq-section h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #1f2937;
  text-align: center;
  margin-bottom: 2rem;
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: white;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.faq-question {
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  color: #1f2937;
}

.faq-icon {
  font-size: 1.5rem;
  color: #2563eb;
  font-weight: 300;
}

.faq-answer {
  padding: 0 1.5rem 1.5rem;
  color: #6b7280;
  line-height: 1.6;
}

.cta-section {
  text-align: center;
  padding: 3rem;
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: white;
  border-radius: 16px;
  margin-bottom: 4rem;
}

.cta-section h2 {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.cta-section p {
  opacity: 0.9;
  margin-bottom: 2rem;
}

.cta-section .download-buttons.centered {
  justify-content: center;
}

.support-section {
  text-align: center;
  padding: 2rem;
  background: #f9fafb;
  border-radius: 12px;
}

.support-section h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.support-section p {
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.support-contacts {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.support-link {
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
}

.support-link:hover {
  text-decoration: underline;
}

@media (max-width: 968px) {
  .app-hero {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .app-info {
    order: 2;
  }

  .app-preview {
    order: 1;
  }

  .phone-screen {
    width: 240px;
    height: 480px;
  }
}

@media (max-width: 768px) {
  .mobile-app-view {
    padding: 1rem 0;
  }

  .app-hero {
    padding: 1.5rem;
  }

  .page-title {
    font-size: 1.5rem;
  }

  .download-buttons {
    flex-direction: column;
  }

  .store-button {
    width: 100%;
    justify-content: center;
  }

  .feature-content {
    padding: 1.5rem;
  }

  .support-contacts {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
