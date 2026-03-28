<template>
    
    <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        
        <div class="md:basis-1/5">

            <div class="overflow-x-auto">
                <div class="flex md:flex-col max-w-[90vw]">
                    <template v-for="item, i in dataPaket" :key="i">
                        <div class="border-b-4 md:border-l-4 md:border-b-0 block" :class="activeTab === item.id?'border-teal-600 ':'border-slate-300 '">
                            <button @click="openTab(item.id)" role="button" class="md:text-xl text-sm px-2 py-2 md:px-4 md:py-4 block w-full text-left cursor-pointer whitespace-nowrap" :class="activeTab === item.id?'text-slate-900 font-bold':'text-slate-500 font-medium'"> 
                                {{ item.name }}
                            </button>
                        </div>
                    </template>
                </div>
            </div>

        </div>

        <div class="md:flex-1">

            <div v-if="kategoriSelected" class="mb-10 text-center px-10 min-h-30">
                <h3 v-if="kategoriSelected.name" class="text-xl md:text-3xl text-slate-700 font-bold mb-3">{{ kategoriSelected.name }}</h3>
                <p v-if="kategoriSelected.description" >{{ kategoriSelected.description }}</p>
            </div>

            <div class="flex flex-col md:flex-row justify-center gap-4 md:gap-6">   

                <template v-for="item, i in dataHarga" :key="i">
                    <div v-if="activeTab === item.paket" class="md:flex-1 md:max-w-xl relative group animate-fade-in bg-white rounded-xl transition-all duration-300 ease-in-out shadow-sm hover:shadow-2xl min-h-10 overflow-hidden">
                        <h4 class="text-center bg-linear-to-r from-teal-500 to-teal-600 group-hover:from-teal-400 transition-all duration-300 ease-in-out text-white p-4 md:py-10 font-bold text-xl xl:text-2xl">
                            {{ item.nama }}
                        </h4>
                        <div class="pb-30">
                            <h5 class="text-3xl font-extrabold text-center pt-10 pb-8 tracking-tighter bg-linear-to-r from-slate-600 to-slate-900 group-hover:from-teal-400 text-transparent bg-clip-text">
                                {{ currency(item.harga) }}
                            </h5>
                            <ul>
                                <li class="px-6 py-2 flex items-start gap-2">
                                  <span class="inline-block mt-1"><CheckCircle class="w-4 h-4 text-teal-500"/></span> <span>Website siap pakai</span>
                                </li>
                                <li class="px-6 py-2 flex items-start gap-2">
                                  <span class="inline-block mt-1"><CheckCircle class="w-4 h-4 text-teal-500"/></span> 1 domain
                                </li>
                                <li class="px-6 py-2 flex items-start gap-2" v-if="item.desain">
                                    <span>
                                        <CheckCircle class="w-4 h-4 mt-1 text-teal-500"/>
                                    </span>
                                    <a class="text-orange-500 hover:text-orange-600 inline-block" :href="item.link" target="_blank">{{ item.desain }}</a>
                                </li>
                                <li v-if="item.fitur" v-for="fitur in item.fitur" class="px-6 py-2 flex items-start gap-2">
                                    <span class="inline-block mt-1"><CheckCircle class="w-4 h-4 text-teal-500"/></span>  {{ fitur }}
                                </li>
                                <li class="px-6 py-2 flex items-start gap-2">
                                   <span class="inline-block mt-1"><CheckCircle class="w-4 h-4 text-teal-500"/></span>  Hosting {{ item.hosting }}
                                </li>
                                <li class="px-6 py-2 flex items-start gap-2">
                                  <span class="inline-block mt-1"><CheckCircle class="w-4 h-4 text-teal-500"/></span>   Bandwidth {{ item.bandwith }} /bulan
                                </li>
                                <li class="px-6 py-2 flex items-start gap-2">
                                   <span class="inline-block mt-1"><CheckCircle class="w-4 h-4 text-teal-500"/></span>  Panduan edit web
                                </li>
                                <li class="px-6 py-2 flex items-start gap-2">
                                   <span class="inline-block mt-1"><CheckCircle class="w-4 h-4 text-teal-500"/></span>  <strong>Gratis Tanya Jawab & Pemanduan</strong>
                                </li>
                                <li class="px-6 py-2 flex items-start gap-2">
                                  <span class="inline-block mt-1"><CheckCircle class="w-4 h-4 text-teal-500"/></span>   <strong>Garansi dari hacker dan virus</strong>
                                </li>

                            </ul>
                            <div class="absolute bottom-0 left-0 right-0 text-center my-10">
                                <Button :link="item.link" color="secondary" class="font-medium">
                                    {{ currency(item.perpanjang) }}/ <small>tahun</small>
                                </Button>
                            </div>
                        </div>
                    </div>
                </template>

            </div>
        </div>

    </div>

</template>

<script setup>
import { ref, computed } from 'vue';
import dataPaket from '../data/paket.json';
import dataHarga from '../data/harga.json';
import Button from '../components/Button.vue';
import { CheckCircle } from 'lucide-vue-next';

const activeTab = ref('website_profile')
const openTab = (item) => {
    activeTab.value = item
}

const kategoriSelected = computed(() => {
    return dataPaket.find(item => item.id === activeTab.value)
})

const currency = (number) => {
   const rupiah = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0 // Mengatur agar tidak ada ,00 di belakang
    }).format(number);

    return rupiah;
}
</script>