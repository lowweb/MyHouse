<template>
  <div class="legal-info-view">
    <div class="container">
      <!-- Хлебные крошки -->
      <nav class="breadcrumbs" aria-label="Навигация">
        <router-link to="/">Главная</router-link>
        <span class="separator">/</span>
        <span class="current">Правовая информация</span>
      </nav>

      <h1 class="page-title">Правовая информация</h1>
      <p class="page-description">Документы, регулирующие использование сайта и обработку данных</p>

      <!-- Табы с документами -->
      <div class="legal-tabs">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          :class="['tab-button', { active: activeTab === tab.id }]"
          @click="activeTab = tab.id"
        >
          {{ tab.name }}
        </button>
      </div>

      <!-- Контент табов -->
      <div class="legal-content">
        <!-- Политика конфиденциальности -->
        <div v-show="activeTab === 'privacy'" class="legal-panel">
          <h2>Политика конфиденциальности</h2>
          <p class="last-updated">Последнее обновление: 1 января 2024 г.</p>

          <section>
            <h3>1. Общие положения</h3>
            <p>Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые УК «Мой Дом».</p>
          </section>

          <section>
            <h3>2. Цели обработки данных</h3>
            <ul>
              <li>Предоставление доступа Пользователю к сервисам, информации и/или материалам, содержащимся на веб-сайте</li>
              <li>Идентификация Пользователя для предоставления доступа к личному кабинету</li>
              <li>Предоставление Пользователю эффективной клиентской и технической поддержки</li>
              <li>Направление Пользователю уведомлений, запросов, материалов, касающихся использования сайта</li>
              <li>Проведение статистических и иных исследований</li>
            </ul>
          </section>

          <section>
            <h3>3. Какие данные мы собираем</h3>
            <p>Мы можем собирать следующие категории персональных данных:</p>
            <ul>
              <li><strong>Контактные данные:</strong> фамилия, имя, отчество, номер телефона, адрес электронной почты</li>
              <li><strong>Данные об адресе:</strong> адрес проживания, номер лицевого счёта</li>
              <li><strong>Технические данные:</strong> IP-адрес, данные браузера, информация об устройстве</li>
              <li><strong>Данные показаний:</strong> показания приборов учёта</li>
              <li><strong>Платёжные данные:</strong> история платежей (без реквизитов банковских карт)</li>
            </ul>
          </section>

          <section>
            <h3>4. Правовые основания обработки</h3>
            <p>Обработка персональных данных осуществляется на основании:</p>
            <ul>
              <li>Согласия субъекта персональных данных</li>
              <li>Договора управления многоквартирным домом</li>
              <li>Федерального закона №152-ФЗ «О персональных данных»</li>
              <li>Жилищного кодекса Российской Федерации</li>
            </ul>
          </section>

          <section>
            <h3>5. Защита данных</h3>
            <p>Мы принимаем необходимые организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, предоставления, распространения.</p>
          </section>

          <section>
            <h3>6. Права пользователя</h3>
            <p>Вы имеете право:</p>
            <ul>
              <li>Получить информацию об обработке ваших персональных данных</li>
              <li>Требовать уточнения, блокирования или уничтожения данных</li>
              <li>Отозвать согласие на обработку данных</li>
              <li>Защитить свои права в суде</li>
            </ul>
          </section>

          <section>
            <h3>7. Контакты</h3>
            <p>По вопросам обработки персональных данных обращайтесь:</p>
            <p>
              📧 Email: <a href="mailto:privacy@moidom-uk.ru">privacy@moidom-uk.ru</a><br>
              📞 Телефон: +7(4232) 222-22-22<br>
              📍 Адрес: г. [Город], ул. [Название], д. [Номер]
            </p>
          </section>
        </div>

        <!-- Пользовательское соглашение -->
        <div v-show="activeTab === 'terms'" class="legal-panel">
          <h2>Пользовательское соглашение</h2>
          <p class="last-updated">Последнее обновление: 1 января 2024 г.</p>

          <section>
            <h3>1. Термины и определения</h3>
            <ul>
              <li><strong>Сайт</strong> — совокупность программ для ЭВМ и иной информации, доступных по адресу https://moidom-uk.ru</li>
              <li><strong>Пользователь</strong> — любое физическое или юридическое лицо, использующее Сайт</li>
              <li><strong>УК «Мой Дом»</strong> — управляющая компания, предоставляющая услуги через Сайт</li>
              <li><strong>Личный кабинет</strong> — персональный раздел Пользователя на Сайте</li>
            </ul>
          </section>

          <section>
            <h3>2. Предмет соглашения</h3>
            <p>Настоящее Соглашение регулирует отношения между УК «Мой Дом» и Пользователем в связи с использованием Сайта и предоставляет доступ к следующим сервисам:</p>
            <ul>
              <li>Просмотр информации о доме и услугах</li>
              <li>Передача показаний приборов учёта</li>
              <li>Оплата коммунальных услуг</li>
              <li>Подача заявок в диспетчерскую службу</li>
              <li>Получение новостей и объявлений</li>
            </ul>
          </section>

          <section>
            <h3>3. Регистрация и доступ</h3>
            <p>Для получения доступа к полному функционалу Сайта Пользователь должен пройти регистрацию. При регистрации необходимо предоставить достоверную информацию. Один Пользователь может иметь только одну учётную запись.</p>
          </section>

          <section>
            <h3>4. Обязанности сторон</h3>
            <p><strong>УК «Мой Дом» обязуется:</strong></p>
            <ul>
              <li>Предоставлять доступ к сервисам Сайта 24/7 за исключением технических работ</li>
              <li>Обеспечивать конфиденциальность персональных данных</li>
              <li>Своевременно обновлять информацию на Сайте</li>
            </ul>
            <p><strong>Пользователь обязуется:</strong></p>
            <ul>
              <li>Не передавать свои учётные данные третьим лицам</li>
              <li>Предоставлять актуальную информацию</li>
              <li>Не использовать Сайт в противоправных целях</li>
            </ul>
          </section>

          <section>
            <h3>5. Ответственность</h3>
            <p>УК «Мой Дом» не несёт ответственности за:</p>
            <ul>
              <li>Временные перебои в работе Сайта из-за технических работ</li>
              <li>Убытки, вызванные действиями третьих лиц</li>
              <li>Неточности в информации, предоставленной Пользователем</li>
            </ul>
          </section>

          <section>
            <h3>6. Изменение условий</h3>
            <p>УК «Мой Дом» оставляет за собой право вносить изменения в настоящее Соглашение. Новая редакция вступает в силу с момента размещения на Сайте.</p>
          </section>

          <section>
            <h3>7. Заключительные положения</h3>
            <p>Настоящее Соглашение регулируется законодательством Российской Федерации. Все споры решаются путём переговоров, а при недостижении согласия — в судебном порядке.</p>
          </section>
        </div>

        <!-- Реквизиты компании -->
        <div v-show="activeTab === 'details'" class="legal-panel">
          <h2>Реквизиты компании</h2>
          
          <div class="company-details-card">
            <div class="detail-row">
              <span class="label">Полное наименование:</span>
              <span class="value">Управляющая компания «Мой Дом»</span>
            </div>
            
            <div class="detail-row">
              <span class="label">Сокращённое наименование:</span>
              <span class="value">УК «Мой Дом»</span>
            </div>
            
            <div class="detail-row">
              <span class="label">ИНН:</span>
              <span class="value">2500000000</span>
            </div>
            
            <div class="detail-row">
              <span class="label">КПП:</span>
              <span class="value">250001001</span>
            </div>
            
            <div class="detail-row">
              <span class="label">ОГРН:</span>
              <span class="value">1152500000000</span>
            </div>
            
            <div class="detail-row">
              <span class="label">Юридический адрес:</span>
              <span class="value">г. [Город], ул. [Название], д. [Номер]</span>
            </div>
            
            <div class="detail-row">
              <span class="label">Почтовый адрес:</span>
              <span class="value">г. [Город], ул. [Название], д. [Номер], офис 101</span>
            </div>
            
            <div class="detail-row">
              <span class="label">Генеральный директор:</span>
              <span class="value">[ФИО директора]</span>
            </div>
            
            <div class="detail-row">
              <span class="label">Телефон:</span>
              <span class="value">+7(4232) 222-22-22</span>
            </div>
            
            <div class="detail-row">
              <span class="label">Email:</span>
              <span class="value">info@moidom-uk.ru</span>
            </div>
            
            <div class="detail-row">
              <span class="label">Сайт:</span>
              <span class="value">https://moidom-uk.ru</span>
            </div>
            
            <div class="detail-row">
              <span class="label">Лицензия:</span>
              <span class="value">№ ЛЦ-25-0000 от 01.01.2015</span>
            </div>
          </div>

          <h3>Банковские реквизиты</h3>
          <div class="bank-details-card">
            <div class="detail-row">
              <span class="label">Расчётный счёт:</span>
              <span class="value">40702810000000000000</span>
            </div>
            
            <div class="detail-row">
              <span class="label">Банк:</span>
              <span class="value">ПАО «Сбербанк России»</span>
            </div>
            
            <div class="detail-row">
              <span class="label">БИК:</span>
              <span class="value">040507614</span>
            </div>
            
            <div class="detail-row">
              <span class="label">Корр. счёт:</span>
              <span class="value">30101810600000000614</span>
            </div>
          </div>

          <div class="download-documents">
            <h3>Скачать документы</h3>
            <div class="document-list">
              <a href="#" class="document-link">
                📄 Устав компании (PDF, 2.5 МБ)
              </a>
              <a href="#" class="document-link">
                📄 Свидетельство ОГРН (PDF, 1.2 МБ)
              </a>
              <a href="#" class="document-link">
                📄 Свидетельство ИНН (PDF, 1.1 МБ)
              </a>
              <a href="#" class="document-link">
                📄 Лицензия на управление (PDF, 3.8 МБ)
              </a>
            </div>
          </div>
        </div>

        <!-- Условия использования -->
        <div v-show="activeTab === 'usage'" class="legal-panel">
          <h2>Условия использования сайта</h2>
          <p class="last-updated">Последнее обновление: 1 января 2024 г.</p>

          <section>
            <h3>1. Интеллектуальная собственность</h3>
            <p>Все материалы, размещённые на Сайте, являются объектами интеллектуальной собственности и охраняются законодательством РФ. Любое использование материалов возможно только с письменного разрешения правообладателя.</p>
          </section>

          <section>
            <h3>2. Ограничения использования</h3>
            <p>Запрещается:</p>
            <ul>
              <li>Использовать Сайт в коммерческих целях без разрешения</li>
              <li>Копировать, воспроизводить или распространять контент Сайта</li>
              <li>Вмешиваться в работу Сайта любыми способами</li>
              <li>Использовать автоматические системы для доступа к Сайту</li>
              <li>Пытаться получить несанкционированный доступ к данным</li>
            </ul>
          </section>

          <section>
            <h3>3. Точность информации</h3>
            <p>Информация на Сайте предоставляется «как есть». Мы стремимся к актуальности данных, но не гарантируем полную точность. Для получения официальной информации обращайтесь в офис компании.</p>
          </section>

          <section>
            <h3>4. Сторонние ресурсы</h3>
            <p>Сайт может содержать ссылки на сторонние ресурсы. Мы не несём ответственности за содержание и политику конфиденциальности таких ресурсов.</p>
          </section>

          <section>
            <h3>5. Обратная связь</h3>
            <p>Отправляя нам сообщения через форму обратной связи, вы соглашаетесь на их обработку и использование для улучшения качества услуг.</p>
          </section>
        </div>
      </div>

      <!-- Согласие на обработку -->
      <div class="consent-block">
        <h3>Согласие на обработку персональных данных</h3>
        <p>Используя данный сайт, вы автоматически принимаете условия Политики конфиденциальности и даёте согласие на обработку персональных данных в соответствии с ФЗ-152.</p>
        <router-link to="/feedback/" class="btn-contact">
          Задать вопрос по обработке данных
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('privacy')

const tabs = [
  { id: 'privacy', name: 'Политика конфиденциальности' },
  { id: 'terms', name: 'Пользовательское соглашение' },
  { id: 'details', name: 'Реквизиты компании' },
  { id: 'usage', name: 'Условия использования' }
]
</script>

<style scoped>
.legal-info-view {
  padding: 2rem 0;
  min-height: calc(100vh - 200px);
}

.container {
  max-width: 1000px;
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

.legal-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 1rem;
}

.tab-button {
  padding: 0.75rem 1.5rem;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 0.875rem;
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

.legal-content {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.legal-panel h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.last-updated {
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 2rem;
}

.legal-panel section {
  margin-bottom: 2rem;
}

.legal-panel h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.legal-panel p {
  color: #374151;
  line-height: 1.7;
  margin-bottom: 1rem;
}

.legal-panel ul {
  list-style: disc;
  padding-left: 1.5rem;
  color: #374151;
  line-height: 1.7;
}

.legal-panel li {
  margin-bottom: 0.5rem;
}

.legal-panel a {
  color: #2563eb;
  text-decoration: none;
}

.legal-panel a:hover {
  text-decoration: underline;
}

.company-details-card,
.bank-details-card {
  background: #f9fafb;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #e5e7eb;
}

.detail-row:last-child {
  border-bottom: none;
}

.detail-row .label {
  font-weight: 500;
  color: #6b7280;
}

.detail-row .value {
  color: #1f2937;
  text-align: right;
}

.download-documents {
  margin-top: 2rem;
}

.download-documents h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.document-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.document-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: #eff6ff;
  border-radius: 6px;
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s;
}

.document-link:hover {
  background: #dbeafe;
}

.consent-block {
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  border-left: 4px solid #2563eb;
}

.consent-block h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.consent-block p {
  color: #374151;
  margin-bottom: 1.5rem;
}

.btn-contact {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #2563eb;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s;
}

.btn-contact:hover {
  background: #1d4ed8;
}

@media (max-width: 768px) {
  .legal-info-view {
    padding: 1rem 0;
  }

  .legal-content {
    padding: 1.5rem;
  }

  .page-title {
    font-size: 1.5rem;
  }

  .legal-tabs {
    flex-direction: column;
  }

  .tab-button {
    width: 100%;
    text-align: center;
  }

  .detail-row {
    flex-direction: column;
    gap: 0.25rem;
  }

  .detail-row .value {
    text-align: left;
  }
}
</style>
