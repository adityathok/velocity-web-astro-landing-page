<template>
    <section id="keunggulan" class="px-6 py-12 md:pt-20 bg-white">
        <div class="mx-auto max-w-7xl">

            <h2 class="text-center font-bold text-2xl md:text-4xl mb-2 md:mb-3">
                Keunggulan
            </h2>
            <p class="text-center mb-6 md:mb-10">
                Semua kelebihan yang kami miliki siap memastikan website anda tetap online
            </p>

            <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mt-10">

                <div v-for="item in kelebihans" class="shadow hover:shadow-md p-4 md:p-8 rounded-xl border border-slate-100 group">
                    <span>
                        <component :is="item.icon" class="w-8 h-8 text-blue-700 group-hover:text-blue-600" />
                    </span>
                    <h3 class="mt-3 font-bold text-lg">{{ item.title }}</h3>     
                    <p class="text-sm">
                        {{ item.text }}
                    </p> 
                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
import { Headset,FolderArchive, ShieldCheck, Server } from 'lucide-vue-next';

const kelebihans = [
    {
        icon: Headset,
        title: 'Support',
        text: 'Layanan support dan tanya jawab dari jam 7 pagi sampai 10 malam'
    },
    {
        icon: FolderArchive,
        title: 'Backup',
        text: 'Backup harian dan mingguan untuk keamanan data anda'
    },
    {
        icon: ShieldCheck,
        title: 'Aman',
        text: 'Sistem keamanan berlapis ditambah backup harian dan mingguan'
    },
    {
        icon: Server,
        title: 'Server Handal',
        text: 'Memiliki server sendiri dengan optimasi untuk website'
    }
]

</script>