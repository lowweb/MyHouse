<template>
  <div class="calculator-view">
    <div class="container">
      <!-- Хлебные крошки -->
      <nav class="breadcrumbs" aria-label="Навигация">
        <router-link to="/">Главная</router-link>
        <span class="separator">/</span>
        <span class="current">Калькулятор платежей</span>
      </nav>

      <h1 class="page-title">Калькулятор коммунальных платежей</h1>
      <p class="page-description">Рассчитайте примерную стоимость коммунальных услуг для вашей квартиры</p>

      <div class="calculator-card">
        <form @submit.prevent="calculatePayment" class="calculator-form">
          <!-- Шаг 1: Параметры жилья -->
          <div class="form-section">
            <h2 class="section-title">1. Параметры жилья</h2>
            
            <div class="form-row">
              <div class="form-group">
                <label for="area">Площадь помещения (м²)</label>
                <input 
                  type="number" 
                  id="area" 
                  v-model.number="formData.area" 
                  min="1" 
                  max="1000"
                  placeholder="Например: 54"
                  required
                />
              </div>

              <div class="form-group">
                <label for="residents">Количество проживающих (чел.)</label>
                <input 
                  type="number" 
                  id="residents" 
                  v-model.number="formData.residents" 
                  min="1" 
                  max="20"
                  placeholder="Например: 3"
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <label for="address">Адрес дома</label>
              <select id="address" v-model="formData.address" required>
                <option value="">Выберите адрес</option>
                <option v-for="house in houses" :key="house.id" :value="house.address">
                  {{ house.address }}
                </option>
              </select>
            </div>
          </div>

          <!-- Шаг 2: Выбор тарифов -->
          <div class="form-section">
            <h2 class="section-title">2. Выберите услуги</h2>
            
            <div class="services-grid">
              <div 
                v-for="service in availableServices" 
                :key="service.id"
                class="service-item"
                :class="{ active: selectedServices.includes(service.id) }"
                @click="toggleService(service.id)"
              >
                <div class="service-icon">{{ service.icon }}</div>
                <div class="service-name">{{ service.name }}</div>
                <div class="service-tariff">{{ service.tariff }} ₽/{{ service.unit }}</div>
                <div class="service-checkbox">
                  <input 
                    type="checkbox" 
                    :checked="selectedServices.includes(service.id)"
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Шаг 3: Дополнительные опции -->
          <div class="form-section">
            <h2 class="section-title">3. Дополнительные опции</h2>
            
            <div class="options-list">
              <label class="option-item">
                <input type="checkbox" v-model="formData.hasElevator" />
                <span>Лифт</span>
              </label>
              
              <label class="option-item">
                <input type="checkbox" v-model="formData.hasGarbageChute" />
                <span>Мусоропровод</span>
              </label>
              
              <label class="option-item">
                <input type="checkbox" v-model="formData.isPrivatized" checked />
                <span>Приватизировано</span>
              </label>
            </div>
          </div>

          <!-- Кнопка расчета -->
          <button type="submit" class="btn-calculate" :disabled="isCalculating">
            <span v-if="!isCalculating">Рассчитать платеж</span>
            <span v-else class="loading">Расчет...</span>
          </button>
        </form>

        <!-- Результаты расчета -->
        <div v-if="calculationResult" class="calculation-result">
          <h2 class="result-title">Результаты расчета</h2>
          
          <div class="result-summary">
            <div class="total-amount">
              <span class="label">Итого в месяц:</span>
              <span class="value">{{ formatCurrency(calculationResult.total) }}</span>
            </div>
            <div class="per-person">
              <span class="label">На человека:</span>
              <span class="value">{{ formatCurrency(calculationResult.perPerson) }}</span>
            </div>
          </div>

          <div class="result-details">
            <h3>Детализация по услугам:</h3>
            <table class="details-table">
              <thead>
                <tr>
                  <th>Услуга</th>
                  <th>Тариф</th>
                  <th>Объем</th>
                  <th>Сумма</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in calculationResult.items" :key="item.service">
                  <td>{{ item.service }}</td>
                  <td>{{ item.tariff }} ₽</td>
                  <td>{{ item.volume }} {{ item.unit }}</td>
                  <td>{{ formatCurrency(item.amount) }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="result-actions">
            <button class="btn-print" @click="printResult">🖨️ Распечатать</button>
            <button class="btn-save" @click="saveResult">💾 Сохранить</button>
          </div>

          <p class="result-disclaimer">
            * Расчет является приблизительным. Точная сумма платежа указывается в квитанции.
          </p>
        </div>
      </div>

      <!-- Информация о тарифах -->
      <div class="tariffs-info">
        <h2>Текущие тарифы</h2>
        <p>Тарифы действуют с 1 июля 2024 года согласно постановлению администрации города.</p>
        <router-link to="/services/" class="link-more">Подробнее о тарифах →</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { houses } from '@/data/mockData'

const formData = ref({
  area: null,
  residents: null,
  address: '',
  hasElevator: false,
  hasGarbageChute: false,
  isPrivatized: true
})

const selectedServices = ref(['water', 'heating', 'electricity', 'maintenance'])

const availableServices = [
  { id: 'water', name: 'Холодное водоснабжение', tariff: 45.50, unit: 'м³', icon: '💧' },
  { id: 'hotwater', name: 'Горячее водоснабжение', tariff: 195.00, unit: 'м³', icon: '🚿' },
  { id: 'heating', name: 'Отопление', tariff: 2100.00, unit: 'Гкал', icon: '🔥' },
  { id: 'electricity', name: 'Электроэнергия', tariff: 4.85, unit: 'кВт·ч', icon: '⚡' },
  { id: 'sewage', name: 'Водоотведение', tariff: 32.40, unit: 'м³', icon: '🚰' },
  { id: 'maintenance', name: 'Содержание жилья', tariff: 35.00, unit: 'м²', icon: '🏠' },
  { id: 'garbage', name: 'Вывоз ТКО', tariff: 120.00, unit: 'чел.', icon: '🗑️' }
]

const isCalculating = ref(false)
const calculationResult = ref(null)

const toggleService = (serviceId) => {
  const index = selectedServices.value.indexOf(serviceId)
  if (index === -1) {
    selectedServices.value.push(serviceId)
  } else {
    selectedServices.value.splice(index, 1)
  }
}

const calculatePayment = () => {
  isCalculating.value = true
  
  // Имитация расчета
  setTimeout(() => {
    const items = []
    let total = 0

    selectedServices.value.forEach(serviceId => {
      const service = availableServices.find(s => s.id === serviceId)
      let volume = 0
      let amount = 0

      switch(serviceId) {
        case 'water':
          volume = formData.value.residents * 3.5
          amount = volume * service.tariff
          break
        case 'hotwater':
          volume = formData.value.residents * 2.5
          amount = volume * service.tariff
          break
        case 'heating':
          volume = formData.value.area * 0.015
          amount = volume * service.tariff
          break
        case 'electricity':
          volume = formData.value.residents * 70
          amount = volume * service.tariff
          break
        case 'sewage':
          volume = formData.value.residents * 6
          amount = volume * service.tariff
          break
        case 'maintenance':
          volume = formData.value.area
          amount = volume * service.tariff
          break
        case 'garbage':
          volume = formData.value.residents
          amount = volume * service.tariff
          break
      }

      total += amount
      items.push({
        service: service.name,
        tariff: service.tariff,
        volume: volume.toFixed(2),
        unit: service.unit,
        amount: amount
      })
    })

    // Добавляем опции
    if (formData.value.hasElevator) {
      const elevatorAmount = formData.value.area * 5
      total += elevatorAmount
      items.push({
        service: 'Лифт',
        tariff: 5,
        volume: formData.value.area.toFixed(2),
        unit: 'м²',
        amount: elevatorAmount
      })
    }

    if (formData.value.hasGarbageChute) {
      const chuteAmount = formData.value.residents * 15
      total += chuteAmount
      items.push({
        service: 'Мусоропровод',
        tariff: 15,
        volume: formData.value.residents.toString(),
        unit: 'чел.',
        amount: chuteAmount
      })
    }

    calculationResult.value = {
      total: total,
      perPerson: total / formData.value.residents,
      items: items
    }

    isCalculating.value = false
  }, 1000)
}

const formatCurrency = (value) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 2
  }).format(value)
}

const printResult = () => {
  window.print()
}

const saveResult = () => {
  alert('Результаты сохранены в PDF формате')
}
</script>

<style scoped>
.calculator-view {
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

.calculator-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-bottom: 2rem;
}

.form-section {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e5e7eb;
}

.form-section:last-of-type {
  border-bottom: none;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
}

.service-item:hover {
  border-color: #2563eb;
  background: #eff6ff;
}

.service-item.active {
  border-color: #2563eb;
  background: #eff6ff;
}

.service-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.service-name {
  font-size: 0.875rem;
  font-weight: 500;
  color: #1f2937;
  text-align: center;
  margin-bottom: 0.25rem;
}

.service-tariff {
  font-size: 0.75rem;
  color: #6b7280;
}

.service-checkbox {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
}

.options-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.option-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
}

.option-item input[type="checkbox"] {
  width: 1.25rem;
  height: 1.25rem;
  accent-color: #2563eb;
}

.btn-calculate {
  width: 100%;
  padding: 1rem 2rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-calculate:hover:not(:disabled) {
  background: #1d4ed8;
}

.btn-calculate:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.calculation-result {
  margin-top: 2rem;
  padding: 2rem;
  background: #f9fafb;
  border-radius: 8px;
  border-left: 4px solid #10b981;
}

.result-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1.5rem;
}

.result-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.total-amount,
.per-person {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.total-amount .label,
.per-person .label {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.total-amount .value,
.per-person .value {
  font-size: 2rem;
  font-weight: 700;
  color: #10b981;
}

.result-details h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.details-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.details-table th,
.details-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;
}

.details-table th {
  background: #f9fafb;
  font-weight: 600;
  color: #374151;
  font-size: 0.875rem;
}

.details-table td {
  color: #1f2937;
}

.result-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.btn-print,
.btn-save {
  padding: 0.75rem 1.5rem;
  border: 1px solid #d1d5db;
  background: white;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-print:hover,
.btn-save:hover {
  background: #f9fafb;
  border-color: #9ca3af;
}

.result-disclaimer {
  font-size: 0.75rem;
  color: #6b7280;
  font-style: italic;
}

.tariffs-info {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.tariffs-info h2 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.tariffs-info p {
  color: #6b7280;
  margin-bottom: 1rem;
}

.link-more {
  color: #2563eb;
  font-weight: 500;
  text-decoration: none;
}

.link-more:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .calculator-view {
    padding: 1rem 0;
  }

  .calculator-card {
    padding: 1.5rem;
  }

  .page-title {
    font-size: 1.5rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .services-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  .result-actions {
    flex-direction: column;
  }

  .btn-print,
  .btn-save {
    width: 100%;
  }
}
</style>
