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
    question: "Pengerjaan berapa lama?",
    answer: "Lama pengerjaan 3 hari sampai 10 hari kerja, menyesuaikan paket yang dipilih"
  },
  {
    question: "Apakah bisa DP untuk pembayarannya?",
    answer: "Bisa, Untuk menjaga kenyamanan bertransaksi kami menyediakan opsi pembayaran DP 50%."
  },
  {
    question: "Apakah bisa dibantu memasarkan produk kami di dunia online?",
    answer: "Bisa, kami punya tim pemasaran iklan google yang berpengalaman."
  },
  {
    question: "Apakah bisa meningkatkan omzet usaha?",
    answer: "Bisa termasuk atau tidak, tergantung kebutuhan. Kami bisa bantu dari nol atau hanya development saja."
  },
  {
    question: "Apakah dapat email bisnis?",
    answer: "Dapat, anda akan mendapat email bisnis profesional sesuai nama domain anda contoh: nama@domain.com"
  },
  {
    question: "Apakah ada tutorial penggunakaan websitenya?",
    answer: "Ada, kami menyediakan tutorial pengelolaan website."
  },
  {
    question: "Apakah ada pemanduan jika mau mengedit web atau posting artikel/ berita?",
    answer: "Ada, kami bantu anda lewat wa, telpon, maupun berbagi layar komputer, sesuai permintaan anda."
  },
  {
    question: "Apakah dibantu perbaikan jika web kena hacker?",
    answer: "Ya, kami bantu perbaikan jika kena hacker"
  },
  {
    question: "Apa yang perJika website rusak/error bagaimana?.",
    answer: "akan dibantu mengatasi kerusakan oleh tim support kami, tim support kami online setiap hari tanpa libur"
  },
  {
    question: "Apakah data hilang jika website rusak?",
    answer: "Data tidak hilang, data masih kami simpan dalam sistem backup yang mumpuni dengan teknologi terbaru"
  }
]
</script>