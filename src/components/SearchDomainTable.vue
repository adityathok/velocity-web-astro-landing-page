<template>

    <section class="min-h-10 bg-gray-100 p-8">
        
        <div class="mx-auto max-w-7xl">

            <div class="bg-teal-600 p-12 rounded-xl shadow mt-[-5em] relative mb-10">
                <form method="GET" action="/search-domain" class="flex bg-white border border-gray-200 px-3 py-2 w-full rounded-full">
                    <input class="border-0! px-3 py-2 w-full rounded-full" name="key" v-model="key" placeholder="Cari domain ...">
                    <Button type="submit" class="px-5! py-2! md:py-4! flex! whitespace-nowrap gap-2">
                        <Search /><span class="hidden md:inline">Cek domain</span>
                    </Button>
                </form>
            </div>

            <div class="bg-white p-6 md:p-12 overflow-x-auto rounded-xl">
                <table class="w-full">
                    <thead>
                        <tr>
                            <td class="bg-slate-200 px-6 py-4">Nama Domain</td>
                            <td class="bg-slate-200 px-6 py-4">Status</td>
                            <td class="bg-slate-200 px-6 py-4"></td>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="item,index in domains" :key="item">
                            <tr>
                                <td class="border-b px-6 py-3">
                                {{ key }}.{{ item }}
                                </td>
                                <td class="border-b px-6 py-3">
                                    <span class="px-4 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                                        Tersedia
                                    </span>
                                </td>
                                <td class="border-b px-6 py-3 text-end">
                                    <Button :link="'harga-web'" class="py-1!">
                                        <div class="flex items-center justify-center gap-2">
                                        <ShoppingCart /> Pesan
                                    </div>
                                    </Button>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<script setup>
import Button from '../components/Button.vue';
import { ShoppingCart , Search} from 'lucide-vue-next';

import { ref, onMounted } from 'vue'
const key = ref('')
onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  key.value = params.get('key') || ''
})

const domains = [
    "com", "net", "org", "io", "ai", "co", "me", "info", "biz", "us",
  "id",          // Umum (Personal/Bisnis)
  "co.id",       // Perusahaan/Badan Usaha
  "ac.id",       // Akademik/Perguruan Tinggi
  "sch.id",      // Sekolah
  "go.id",       // Instansi Pemerintah
  "mil.id",      // Militer
  "net.id",      // Penyedia Jasa Internet (ISP)
  "or.id",       // Organisasi/Komunitas
  "web.id",      // Personal/Situs Pribadi
  "my.id",       // Personal (Populer untuk blog/portofolio)
  "biz.id",      // UMKM/Bisnis Kecil
  "ponpes.id",   // Pondok Pesantren
  "desa.id"      // Pemerintahan Desa
]
</script>