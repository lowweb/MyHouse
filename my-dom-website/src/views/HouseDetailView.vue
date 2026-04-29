<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Breadcrumbs -->
    <nav class="bg-white border-b" aria-label="Хлебные крошки">
      <div class="container mx-auto px-4 py-3">
        <div class="flex items-center gap-2 text-sm">
          <router-link to="/" class="text-gray-500 hover:text-primary">Главная</router-link>
          <span class="text-gray-400">/</span>
          <router-link to="/houses/" class="text-gray-500 hover:text-primary">Дома в управлении</router-link>
          <span class="text-gray-400">/</span>
          <span class="text-gray-900 font-medium">{{ building?.address }}</span>
        </div>
      </div>
    </nav>

    <div v-if="building" class="container mx-auto px-4 py-8">
      <!-- Building Header -->
      <div class="bg-white rounded-xl shadow-md p-6 mb-6">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <div>
            <h1 class="text-2xl md:text-3xl font-bold mb-2">{{ building.address }}</h1>
            <div class="flex items-center gap-2">
              <span class="px-3 py-1 bg-success/10 text-success text-sm rounded-full">✅ {{ building.status }}</span>
            </div>
          </div>
          <div class="flex gap-2">
            <a href="tel:+74232222222" class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
              📞 Позвонить
            </a>
            <router-link to="/feedback/" class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
              ✉️ Написать
            </router-link>
          </div>
        </div>

        <!-- Quick Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div class="text-center p-3 bg-gray-50 rounded-lg">
            <div class="text-2xl mb-1">📅</div>
            <div class="text-sm text-gray-500">Год постройки</div>
            <div class="font-semibold">{{ building.year }}</div>
          </div>
          <div class="text-center p-3 bg-gray-50 rounded-lg">
            <div class="text-2xl mb-1">🏗️</div>
            <div class="text-sm text-gray-500">Этажей</div>
            <div class="font-semibold">{{ building.floors }}</div>
          </div>
          <div class="text-center p-3 bg-gray-50 rounded-lg">
            <div class="text-2xl mb-1">📐</div>
            <div class="text-sm text-gray-500">Площадь</div>
            <div class="font-semibold">{{ formatArea(building.area) }}</div>
          </div>
          <div class="text-center p-3 bg-gray-50 rounded-lg">
            <div class="text-2xl mb-1">🚪</div>
            <div class="text-sm text-gray-500">Квартир</div>
            <div class="font-semibold">{{ building.apartments }}</div>
          </div>
          <div class="text-center p-3 bg-gray-50 rounded-lg">
            <div class="text-2xl mb-1">🧱</div>
            <div class="text-sm text-gray-500">Тип</div>
            <div class="font-semibold">{{ building.type }}</div>
          </div>
          <div class="text-center p-3 bg-gray-50 rounded-lg">
            <div class="text-2xl mb-1">📋</div>
            <div class="text-sm text-gray-500">Серия</div>
            <div class="font-semibold">{{ building.series }}</div>
          </div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden">
        <div class="border-b overflow-x-auto">
          <div class="flex min-w-max">
            <button 
              v-for="tab in tabs" 
              :key="tab.id"
              @click="activeTab = tab.id"
              class="px-4 py-3 font-medium transition-colors whitespace-nowrap"
              :class="activeTab === tab.id ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-gray-900'"
            >
              {{ tab.icon }} {{ tab.label }}
            </button>
          </div>
        </div>

        <!-- Tab Content -->
        <div class="p-6">
          <!-- General Info -->
          <div v-if="activeTab === 'general'" class="space-y-6">
            <h2 class="text-xl font-bold mb-4">📋 Общие сведения</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <div class="flex justify-between py-2 border-b">
                  <span class="text-gray-600">Адрес:</span>
                  <span class="font-medium">{{ building.address }}</span>
                </div>
                <div class="flex justify-between py-2 border-b">
                  <span class="text-gray-600">Год постройки:</span>
                  <span class="font-medium">{{ building.year }}</span>
                </div>
                <div class="flex justify-between py-2 border-b">
                  <span class="text-gray-600">Количество этажей:</span>
                  <span class="font-medium">{{ building.floors }}</span>
                </div>
                <div class="flex justify-between py-2 border-b">
                  <span class="text-gray-600">Общая площадь:</span>
                  <span class="font-medium">{{ formatArea(building.area) }}</span>
                </div>
              </div>
              <div class="space-y-4">
                <div class="flex justify-between py-2 border-b">
                  <span class="text-gray-600">Количество квартир:</span>
                  <span class="font-medium">{{ building.apartments }}</span>
                </div>
                <div class="flex justify-between py-2 border-b">
                  <span class="text-gray-600">Тип дома:</span>
                  <span class="font-medium">{{ building.type }}</span>
                </div>
                <div class="flex justify-between py-2 border-b">
                  <span class="text-gray-600">Серия:</span>
                  <span class="font-medium">{{ building.series }}</span>
                </div>
                <div class="flex justify-between py-2 border-b">
                  <span class="text-gray-600">Статус:</span>
                  <span class="font-medium text-success">{{ building.status }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Construction -->
          <div v-if="activeTab === 'construction'" class="space-y-6">
            <h2 class="text-xl font-bold mb-4">🏗️ Конструктив</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-gray-50 p-4 rounded-lg">
                <h3 class="font-semibold mb-2">Фундамент</h3>
                <p class="text-gray-600">Ленточный, железобетонный</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <h3 class="font-semibold mb-2">Стены</h3>
                <p class="text-gray-600">{{ building.type === 'Кирпичный' ? 'Кирпичные' : building.type === 'Панельный' ? 'Панельные' : 'Монолитные' }}</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <h3 class="font-semibold mb-2">Перекрытия</h3>
                <p class="text-gray-600">Железобетонные плиты</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <h3 class="font-semibold mb-2">Крыша</h3>
                <p class="text-gray-600">Плоская, рулонная кровля</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <h3 class="font-semibold mb-2">Фасад</h3>
                <p class="text-gray-600">{{ building.year < 2000 ? 'Штукатурный' : 'Вентилируемый' }}</p>
              </div>
            </div>
          </div>

          <!-- Engineering Systems -->
          <div v-if="activeTab === 'engineering'" class="space-y-6">
            <h2 class="text-xl font-bold mb-4">⚙️ Инженерные системы</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div class="border rounded-lg p-4">
                <h3 class="font-semibold mb-2 flex items-center gap-2">⚡ Электричество</h3>
                <p class="text-sm text-gray-600">Централизованное электроснабжение</p>
              </div>
              <div class="border rounded-lg p-4">
                <h3 class="font-semibold mb-2 flex items-center gap-2">💧 Водоснабжение</h3>
                <p class="text-sm text-gray-600">Холодное и горячее водоснабжение</p>
              </div>
              <div class="border rounded-lg p-4">
                <h3 class="font-semibold mb-2 flex items-center gap-2">🔥 Отопление</h3>
                <p class="text-sm text-gray-600">Центральное отопление</p>
              </div>
              <div class="border rounded-lg p-4">
                <h3 class="font-semibold mb-2 flex items-center gap-2">💨 Вентиляция</h3>
                <p class="text-sm text-gray-600">Естественная вытяжная</p>
              </div>
              <div class="border rounded-lg p-4">
                <h3 class="font-semibold mb-2 flex items-center gap-2">🛗 Лифты</h3>
                <p class="text-sm text-gray-600">{{ building.floors > 5 ? 'Пассажирский и грузовой' : 'Отсутствуют' }}</p>
              </div>
              <div class="border rounded-lg p-4">
                <h3 class="font-semibold mb-2 flex items-center gap-2">🗑️ Мусоропровод</h3>
                <p class="text-sm text-gray-600">{{ building.year < 2010 ? 'Есть' : 'Нет' }}</p>
              </div>
            </div>
          </div>

          <!-- Management -->
          <div v-if="activeTab === 'management'" class="space-y-6">
            <h2 class="text-xl font-bold mb-4">📄 Управление</h2>
            <div class="space-y-4">
              <div class="border rounded-lg p-4">
                <h3 class="font-semibold mb-2">Договор управления</h3>
                <p class="text-sm text-gray-600 mb-3">Договор №{{ building.id }}/2024 от 01.01.2024</p>
                <button class="text-primary hover:underline flex items-center gap-1">
                  📄 Скачать PDF
                </button>
              </div>
              <div class="border rounded-lg p-4">
                <h3 class="font-semibold mb-2">Протоколы собраний</h3>
                <p class="text-sm text-gray-600 mb-3">Последнее собрание: 15.12.2023</p>
                <button class="text-primary hover:underline flex items-center gap-1">
                  📄 Просмотреть документы
                </button>
              </div>
              <div class="border rounded-lg p-4">
                <h3 class="font-semibold mb-2">Ответственные контакты</h3>
                <div class="space-y-2 text-sm">
                  <p><strong>Управляющий:</strong> Петров П.П.</p>
                  <p><strong>Телефон:</strong> +7(4232)222-22-22</p>
                  <p><strong>Email:</strong> petrov@moidom-uk.ru</p>
                  <p><strong>Приёмные дни:</strong> Вт, Чт 14:00–18:00</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Utilities -->
          <div v-if="activeTab === 'utilities'" class="space-y-6">
            <h2 class="text-xl font-bold mb-4">💰 Коммунальные услуги</h2>
            <div class="space-y-4">
              <router-link to="/calculator/" class="block w-full md:w-auto px-6 py-3 bg-success text-white rounded-lg text-center font-medium hover:bg-green-600 transition-colors">
                💰 Рассчитать платежи
              </router-link>
              <router-link to="/resident/?action=readings" class="block w-full md:w-auto px-6 py-3 bg-primary text-white rounded-lg text-center font-medium hover:bg-blue-600 transition-colors">
                📝 Передать показания
              </router-link>
              <div class="border rounded-lg p-4 mt-6">
                <h3 class="font-semibold mb-3">Текущие тарифы (2024)</h3>
                <div class="space-y-2 text-sm">
                  <div class="flex justify-between py-2 border-b">
                    <span>Содержание жилья</span>
                    <span class="font-medium">28.50 руб/м²</span>
                  </div>
                  <div class="flex justify-between py-2 border-b">
                    <span>Холодная вода</span>
                    <span class="font-medium">42.15 руб/м³</span>
                  </div>
                  <div class="flex justify-between py-2 border-b">
                    <span>Горячая вода</span>
                    <span class="font-medium">195.30 руб/м³</span>
                  </div>
                  <div class="flex justify-between py-2 border-b">
                    <span>Отопление</span>
                    <span class="font-medium">2150.00 руб/Гкал</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Maintenance -->
          <div v-if="activeTab === 'maintenance'" class="space-y-6">
            <h2 class="text-xl font-bold mb-4">🔧 Содержание и ремонт</h2>
            <div class="space-y-4">
              <div class="border rounded-lg p-4">
                <h3 class="font-semibold mb-2">Текущие работы</h3>
                <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Уборка придомовой территории</li>
                  <li>Вывоз ТКО</li>
                  <li>Освещение мест общего пользования</li>
                  <li>Текущий ремонт подъездов</li>
                </ul>
              </div>
              <div class="border rounded-lg p-4">
                <h3 class="font-semibold mb-2">График осмотров</h3>
                <p class="text-sm text-gray-600">Плановый осмотр: 1 раз в квартал</p>
                <p class="text-sm text-gray-600">Последний осмотр: 10.01.2024</p>
              </div>
              <router-link to="/feedback/" class="inline-block px-6 py-3 bg-warning text-white rounded-lg font-medium hover:bg-orange-600 transition-colors">
                📋 Подать заявку на ремонт
              </router-link>
            </div>
          </div>

          <!-- Capital Repair -->
          <div v-if="activeTab === 'capital'" class="space-y-6">
            <h2 class="text-xl font-bold mb-4">🏗️ Капитальный ремонт</h2>
            <div class="space-y-4">
              <div class="border rounded-lg p-4">
                <h3 class="font-semibold mb-2">Программа капремонта</h3>
                <p class="text-sm text-gray-600 mb-3">Дом включён в региональную программу капитального ремонта</p>
                <div class="space-y-2 text-sm">
                  <div class="flex justify-between py-2 border-b">
                    <span>Крыша</span>
                    <span class="text-success">2025 г.</span>
                  </div>
                  <div class="flex justify-between py-2 border-b">
                    <span>Фасад</span>
                    <span class="text-gray-500">2027 г.</span>
                  </div>
                  <div class="flex justify-between py-2 border-b">
                    <span>Инженерные системы</span>
                    <span class="text-gray-500">2028 г.</span>
                  </div>
                </div>
              </div>
              <div class="border rounded-lg p-4">
                <h3 class="font-semibold mb-2">Накопления на капремонт</h3>
                <p class="text-sm text-gray-600">Тариф: 9.50 руб/м²</p>
                <p class="text-sm text-gray-600">Общая сумма накоплений: {{ (building.area * 9.5).toLocaleString('ru-RU') }} руб.</p>
              </div>
            </div>
          </div>

          <!-- Documents -->
          <div v-if="activeTab === 'documents'" class="space-y-6">
            <h2 class="text-xl font-bold mb-4">📁 Документы</h2>
            <div class="space-y-3">
              <div v-for="year in [2024, 2023, 2022, 2021]" :key="year" 
                   class="border rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h3 class="font-semibold">{{ year }} год</h3>
                  <p class="text-sm text-gray-600">Протоколы, отчёты, договоры</p>
                </div>
                <button class="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors flex items-center gap-2">
                  📄 Скачать архив
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="container mx-auto px-4 py-16 text-center">
      <p class="text-gray-600">Дом не найден</p>
      <router-link to="/houses/" class="inline-block mt-4 text-primary hover:underline">← Вернуться к списку домов</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/stores/app'

const route = useRoute()
const store = useAppStore()

const activeTab = ref('general')
const building = computed(() => store.getBuildingById(route.params.id))

const tabs = [
  { id: 'general', label: 'Общие сведения', icon: '📋' },
  { id: 'construction', label: 'Конструктив', icon: '🏗️' },
  { id: 'engineering', label: 'Инженерные системы', icon: '⚙️' },
  { id: 'management', label: 'Управление', icon: '📄' },
  { id: 'utilities', label: 'Коммунальные услуги', icon: '💰' },
  { id: 'maintenance', label: 'Содержание и ремонт', icon: '🔧' },
  { id: 'capital', label: 'Капитальный ремонт', icon: '🏗️' },
  { id: 'documents', label: 'Документы', icon: '📁' }
]

function formatArea(area) {
  return area.toLocaleString('ru-RU') + ' м²'
}

onMounted(() => {
  // Reset tab on route change
  activeTab.value = 'general'
})
</script>
