<template>
    <section id="faq" class="px-6 py-12 md:py-20 bg-blue-50">
        <div class="mx-auto max-w-4xl">
            
            <h2 class="text-center font-bold text-2xl md:text-4xl mb-2 md:mb-3">
                FAQ
            </h2>
            <p class="text-center mb-6 md:mb-10">Pertanyaan yang sering ditanyakan seputar pembuatan website</p>

            <div class="space-y-3">
                <div v-for="item,index in faqs" :key="index" class="group shadow hover:shadow-md rounded-xl bg-white">
                    <button @click="changeActive(index)" type="button" class="px-6 py-6 w-full flex items-center cursor-pointer gap-3 group-hover:text-sky-700">
                        <span>
                            <CircleMinus v-if="tabActive == index" class="w-5 h-5 text-blue-600"/>
                            <CirclePlus v-else class="w-5 h-5 text-blue-500"/>
                        </span>
                        <div class="font-medium text-left text-slate-700">
                            {{ item.question }}
                        </div>
                    </button>
                    <div class="px-6 pb-6 text-slate-600 text-sm" :class="tabActive == index?'block':'hidden'">
                        {{ item.answer }}
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { CirclePlus,CircleMinus } from 'lucide-vue-next';

const tabActive = ref(100)
const changeActive = (val) => {
    tabActive.value = tabActive.value !== val?Number(val):100
}

const faqs = [
  {
    question: "Apa saja layanan yang ditawarkan?",
    answer: "Kami menyediakan jasa pembuatan website mulai dari company profile, toko online, landing page, hingga web custom sesuai kebutuhan bisnis Anda. Termasuk redesign, maintenance, dan optimasi performa."
  },
  {
    question: "Berapa harga pembuatan website?",
    answer: "Harga tergantung kebutuhan. Website sederhana mulai dari ratusan ribu hingga jutaan rupiah, sementara sistem custom bisa lebih tinggi. Kami tidak menggunakan paket kaku."
  },
  {
    question: "Berapa lama proses pembuatan website?",
    answer: "Rata-rata 3–14 hari kerja untuk website standar. Project kompleks bisa lebih lama tergantung fitur dan revisi."
  },
  {
    question: "Apakah saya bisa request desain sendiri?",
    answer: "Bisa. Anda dapat mengirim referensi desain atau kami bantu arahkan sesuai kebutuhan bisnis Anda."
  },
  {
    question: "Apakah sudah termasuk domain dan hosting?",
    answer: "Bisa termasuk atau tidak, tergantung kebutuhan. Kami bisa bantu dari nol atau hanya development saja."
  },
  {
    question: "Apakah website bisa diupdate sendiri?",
    answer: "Bisa. Kami menggunakan CMS atau sistem dengan dashboard agar Anda dapat mengelola konten tanpa coding."
  },
  {
    question: "Apakah website sudah SEO-friendly?",
    answer: "Struktur dasar SEO sudah diterapkan, namun hasil SEO juga bergantung pada konten dan strategi lanjutan."
  },
  {
    question: "Apakah ada support setelah website selesai?",
    answer: "Ya. Kami menyediakan support setelah project selesai untuk perbaikan bug dan bantuan teknis."
  },
  {
    question: "Apakah bisa tambah fitur di kemudian hari?",
    answer: "Bisa. Website dirancang fleksibel agar dapat dikembangkan sesuai kebutuhan bisnis Anda."
  },
  {
    question: "Apa yang perlu disiapkan sebelum membuat website?",
    answer: "Minimal domain (jika ada), konten (teks, gambar, logo), dan gambaran bisnis. Kami bisa bantu jika belum lengkap."
  }
]
</script>