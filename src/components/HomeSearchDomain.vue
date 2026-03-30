<template>
    <section id="searchdomain" class="py-10 bg-teal-500 px-6">
        <div class="md:flex items-center justify-between mx-auto max-w-7xl">
            <div class="md:basis-1/2 text-center md:text-left">
                
                <div class="font-medium text-2xl xl:text-3xl text-white">
                    Temukan Domain yang Sesuai<br>dengan Websitemu
                </div>
                <div class="space-x-1 mt-2">
                    <template v-for="item in ['.com','.id','.co.id','.org']" >
                        <span @click="changeKey(item)" class="inline-block text-xs bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded-xl cursor-pointer hover:shadow">
                            {{ item }}
                        </span>
                    </template>
                </div>

            </div>
            <div class="md:flex-1 mt-10 md:mt-0">
                <form method="GET" action="/search-domain" class="flex bg-white border border-gray-200 px-3 py-2 w-full rounded-full">
                    <input class="border-0! px-3 py-2 w-full rounded-full md:text-xl" name="key" v-model="keySearch" :placeholder="domain.toLowerCase()">
                    <Button type="submit" class="px-5! py-2!" aria-label="Cari domain">
                        <Search />
                    </Button>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Search } from 'lucide-vue-next';
import Button from '../components/Button.vue';
import { ref, onMounted, onUnmounted } from 'vue'

const keySearch = ref('')

const changeKey = (val) => {
    keySearch.value = val
}

// ================= DATASET =================
const keywordMap = {
  toko: ['bunga', 'kue', 'snack', 'furniture', 'alat-kesehatan'],
  jasa: ['cleaning', 'sedot-wc', 'kebersihan', 'rias', 'makeup'],
  service: ['ac', 'komputer', 'laptop'],
  servis: ['ac', 'motor', 'mobil'],
  bengkel: ['mobil', 'motor'],
  rental: ['mobil', 'motor', 'sound-system', 'tenda'],
  sewa: ['mobil', 'tenda', 'sound-system'],
  kontraktor: ['bangunan', 'interior', 'plafon'],
  percetakan: ['printing', 'stiker', 'undangan'],
  laundry: ['karpet', 'sepatu'],
  catering: ['makanan', 'kue'],
  salon: ['makeup', 'rias'],
  klinik: ['kesehatan'],
  apotek: ['obat']
}
const cities = [
  'jakarta', 'bandung', 'surabaya', 'semarang', 'yogyakarta',
  'solo', 'malang', 'bekasi', 'depok', 'tangerang',
  'bogor', 'cirebon', 'tegal', 'pekalongan', 'kediri',
  'madiun', 'palembang', 'lampung', 'makassar', 'medan',
  'balikpapan', 'banjarmasin', 'denpasar', 'pontianak'
]
const tlds = ['.com', '.id', '.net', '.co.id']
const extras = [
  '', '', '', '', // dominan kosong biar natural
  'murah', 'terbaik', 'profesional', 'terpercaya',
  'berpengalaman', '24jam', 'terdekat', 'resmi'
]

// ================= STATE =================
const domain = ref('')
let interval = null

// ================= HELPER =================
const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)]

// ================= GENERATOR =================
const generateDomain = () => {
  const category = randomItem(Object.keys(keywordMap))
  const keyword = randomItem(keywordMap[category])
  const city = randomItem(cities)
  const tld = randomItem(tlds)
  const extra = randomItem(extras)

  // variasi pola biar tidak monoton
  const patterns = [
    // toko-bunga-semarang.com
    () => `${category}-${keyword}-${city}${tld}`,

    // jasa-cleaning-murah-yogyakarta.com
    () => extra
      ? `${category}-${keyword}-${extra}-${city}${tld}`
      : `${category}-${keyword}-${city}${tld}`,

    // bunga-semarang.com
    () => `${keyword}-${city}${tld}`,

    // jasa-semarang.com
    () => `${category}-${city}${tld}`,

    // ac-yogyakarta.id (lebih pendek, sering dipakai real)
    () => `${keyword}-${city}${tld}`
  ]

  return patterns[Math.floor(Math.random() * patterns.length)]()
}

// ================= LIFECYCLE =================
onMounted(() => {
  domain.value = generateDomain()

  interval = setInterval(() => {
    domain.value = generateDomain()
  }, 3000)
})

onUnmounted(() => {
  clearInterval(interval)
})

const text = "Halo! Selamat datang di aplikasi Vue saya."
const displayText = ref("")
const index = ref(0)
const speed = 100 // Kecepatan dalam milidetik

const typeEffect = () => {
  if (index.value < text.length) {
    displayText.value += text.charAt(index.value)
    index.value++
    setTimeout(typeEffect, speed)
  }
}

onMounted(() => {
  typeEffect()
})
</script>