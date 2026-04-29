<template>
  <div class="sitemap-view">
    <div class="container">
      <!-- Хлебные крошки -->
      <nav class="breadcrumbs" aria-label="Навигация">
        <router-link to="/">Главная</router-link>
        <span class="separator">/</span>
        <span class="current">Карта сайта</span>
      </nav>

      <h1 class="page-title">Карта сайта</h1>
      <p class="page-description">Полная структура сайта для удобной навигации</p>

      <!-- Поиск по сайту -->
      <div class="search-section">
        <div class="search-box">
          <input 
            type="text" 
            v-model="searchQuery"
            placeholder="Поиск по сайту..."
            class="search-input"
          />
          <button class="search-button">🔍</button>
        </div>
      </div>

      <!-- Основные разделы -->
      <div class="sitemap-grid">
        <!-- Главная -->
        <div class="sitemap-section">
          <div class="section-header main">
            <router-link to="/" class="section-link">
              <span class="icon">🏠</span>
              <h2>Главная</h2>
            </router-link>
          </div>
          <ul class="section-links">
            <li><router-link to="/emergency/">Экстренные объявления</router-link></li>
            <li><router-link to="/news/">Новости</router-link></li>
            <li><router-link to="/houses/">Дома в управлении</router-link></li>
            <li><a href="#quick-contacts">Быстрые контакты</a></li>
          </ul>
        </div>

        <!-- О компании -->
        <div class="sitemap-section">
          <div class="section-header">
            <router-link to="/about/" class="section-link">
              <span class="icon">🏢</span>
              <h2>О компании</h2>
            </router-link>
          </div>
          <ul class="section-links">
            <li><a href="#history">История компании</a></li>
            <li><a href="#team">Команда</a></li>
            <li><a href="#license">Лицензии</a></li>
            <li><a href="#certificates">Сертификаты</a></li>
            <li><a href="#social">Социальная ответственность</a></li>
          </ul>
        </div>

        <!-- Дома в управлении -->
        <div class="sitemap-section">
          <div class="section-header">
            <router-link to="/houses/" class="section-link">
              <span class="icon">🏘️</span>
              <h2>Дома в управлении</h2>
            </router-link>
          </div>
          <ul class="section-links">
            <li><a href="#catalog">Каталог домов</a></li>
            <li><a href="#filters">Фильтры поиска</a></li>
            <li v-for="house in sampleHouses" :key="house.id">
              <router-link :to="`/houses/${house.id}`">{{ house.address }}</router-link>
            </li>
          </ul>
        </div>

        <!-- Стоимость услуг -->
        <div class="sitemap-section">
          <div class="section-header">
            <router-link to="/services/" class="section-link">
              <span class="icon">💰</span>
              <h2>Стоимость услуг</h2>
            </router-link>
          </div>
          <ul class="section-links">
            <li><a href="#additional">Цены на доп. услуги</a></li>
            <li><a href="#tariffs">Тарифы ЖКУ</a></li>
            <li><router-link to="/calculator/">Калькулятор платежей</router-link></li>
          </ul>
        </div>

        <!-- Фотогалерея -->
        <div class="sitemap-section">
          <div class="section-header">
            <router-link to="/gallery/" class="section-link">
              <span class="icon">📷</span>
              <h2>Фотогалерея</h2>
            </router-link>
          </div>
          <ul class="section-links">
            <li><a href="#improvement">Благоустройство</a></li>
            <li><a href="#holidays">Праздники</a></li>
            <li><a href="#subbotniks">Субботники</a></li>
            <li><a href="#before-after">До и после ремонта</a></li>
            <li><a href="#awards">Награды</a></li>
          </ul>
        </div>

        <!-- Жителю -->
        <div class="sitemap-section">
          <div class="section-header">
            <router-link to="/resident/" class="section-link">
              <span class="icon">👤</span>
              <h2>Жителю</h2>
            </router-link>
          </div>
          <ul class="section-links">
            <li><a href="#meter-readings">Передача показаний</a></li>
            <li><router-link to="/faq/">Частые вопросы</router-link></li>
            <li><a href="#utility-phones">Телефоны ЖКХ</a></li>
            <li><a href="#useful-links">Полезные ссылки</a></li>
            <li><router-link to="/documents/templates/">Образцы заявлений</router-link></li>
          </ul>
        </div>

        <!-- Раскрытие информации -->
        <div class="sitemap-section">
          <div class="section-header">
            <router-link to="/disclosure/" class="section-link">
              <span class="icon">📋</span>
              <h2>Раскрытие информации</h2>
            </router-link>
          </div>
          <ul class="section-links">
            <li><a href="#forms">Форма 1.1–2.6</a></li>
            <li><a href="#financial">Финансовые отчёты</a></li>
            <li><a href="#plans">Планы работ</a></li>
            <li><a href="#capital-repair">Капремонт</a></li>
            <li><a href="#archive">Архив документов</a></li>
          </ul>
        </div>

        <!-- Контакты -->
        <div class="sitemap-section">
          <div class="section-header">
            <router-link to="/contacts/" class="section-link">
              <span class="icon">📞</span>
              <h2>Контакты</h2>
            </router-link>
          </div>
          <ul class="section-links">
            <li><a href="#offices">Адреса офисов</a></li>
            <li><a href="#phones">Телефоны</a></li>
            <li><router-link to="/feedback/">Форма обратной связи</router-link></li>
            <li><a href="#map">Карта проезда</a></li>
            <li><a href="#hours">Режим работы</a></li>
          </ul>
        </div>

        <!-- Дополнительные страницы -->
        <div class="sitemap-section">
          <div class="section-header additional">
            <span class="icon">📄</span>
            <h2>Дополнительно</h2>
          </div>
          <ul class="section-links">
            <li><router-link to="/mobile-app/">Мобильное приложение</router-link></li>
            <li><router-link to="/legal-info/">Правовая информация</router-link></li>
            <li><a href="#privacy">Политика конфиденциальности</a></li>
            <li><a href="#terms">Пользовательское соглашение</a></li>
            <li><a href="#offer">Публичная оферта</a></li>
          </ul>
        </div>
      </div>

      <!-- Быстрые ссылки -->
      <div class="quick-links">
        <h3>Быстрые ссылки</h3>
        <div class="quick-links-grid">
          <router-link to="/resident/" class="quick-link-card">
            <span class="quick-icon">📊</span>
            <span>Передать показания</span>
          </router-link>
          <router-link to="/calculator/" class="quick-link-card">
            <span class="quick-icon">💳</span>
            <span>Оплатить квитанцию</span>
          </router-link>
          <router-link to="/feedback/" class="quick-link-card">
            <span class="quick-icon">📝</span>
            <span>Подать заявку</span>
          </router-link>
          <router-link to="/documents/templates/" class="quick-link-card">
            <span class="quick-icon">📄</span>
            <span>Скачать документы</span>
          </router-link>
          <router-link to="/faq/" class="quick-link-card">
            <span class="quick-icon">❓</span>
            <span>Задать вопрос</span>
          </router-link>
        </div>
      </div>

      <!-- Статистика сайта -->
      <div class="site-stats">
        <h3>Статистика сайта</h3>
        <div class="stats-grid">
          <div class="stat-item">
            <span class="stat-number">8</span>
            <span class="stat-label">Домов в управлении</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">20+</span>
            <span class="stat-label">Разделов сайта</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">50+</span>
            <span class="stat-label">Документов</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">24/7</span>
            <span class="stat-label">Диспетчерская служба</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { houses } from '@/data/mockData'

const searchQuery = ref('')

const sampleHouses = houses.slice(0, 5)
</script>

<style scoped>
.sitemap-view {
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

.search-section {
  margin-bottom: 3rem;
}

.search-box {
  position: relative;
  max-width: 600px;
}

.search-input {
  width: 100%;
  padding: 1rem 3.5rem 1rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.search-input:focus {
  outline: none;
  border-color: #2563eb;
}

.search-button {
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  font-size: 1.25rem;
}

.sitemap-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.sitemap-section {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: box-shadow 0.2s;
}

.sitemap-section:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.section-header {
  padding: 1.5rem;
  background: #f9fafb;
  border-bottom: 2px solid #e5e7eb;
}

.section-header.main {
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  border-bottom-color: #2563eb;
}

.section-header.additional {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border-bottom-color: #f59e0b;
}

.section-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: inherit;
}

.section-link h2 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.icon {
  font-size: 1.5rem;
}

.section-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.section-links li {
  border-bottom: 1px solid #f3f4f6;
}

.section-links li:last-child {
  border-bottom: none;
}

.section-links a {
  display: block;
  padding: 0.75rem 1.5rem;
  color: #374151;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}

.section-links a:hover {
  background: #eff6ff;
  color: #2563eb;
}

.quick-links {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
}

.quick-links h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1.5rem;
  text-align: center;
}

.quick-links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.quick-link-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem;
  background: #f9fafb;
  border-radius: 8px;
  text-decoration: none;
  color: #1f2937;
  font-weight: 500;
  transition: all 0.2s;
}

.quick-link-card:hover {
  background: #eff6ff;
  color: #2563eb;
  transform: translateY(-2px);
}

.quick-icon {
  font-size: 2rem;
}

.site-stats {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  padding: 2rem;
  border-radius: 12px;
  color: white;
}

.site-stats h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.875rem;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .sitemap-view {
    padding: 1rem 0;
  }

  .page-title {
    font-size: 1.5rem;
  }

  .sitemap-grid {
    grid-template-columns: 1fr;
  }

  .quick-links-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .stat-number {
    font-size: 2rem;
  }
}
</style>
