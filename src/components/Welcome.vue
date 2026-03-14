<template>
    <section id="hero" class="relative w-full text-white bg-linear-to-r from-blue-800 to-sky-600 pt-30 px-6 md:px-0 md:pt-20 md:pb-10">			
        <div
            class="absolute inset-0 z-0 opacity-50"
            style="
            background-image:linear-gradient(to right, #e7e5e4 1px, transparent 1px),linear-gradient(to bottom, #e7e5e4 1px, transparent 1px);
            background-size:20px 20px;
            background-position: 00,00;
            mask-image: repeating-linear-gradient(
                        to right,
                        black 0px,
                        black 3px,
                        transparent 3px,
                        transparent 8px
                        ),
                        repeating-linear-gradient(
                        to bottom,
                        black 0px,
                        black 3px,
                        transparent 3px,
                        transparent 8px
                        ),
                        radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%);
            -webkit-mask-image: repeating-linear-gradient(
                        to right,
                        black 0px,
                        black 3px,
                        transparent 3px,
                        transparent 8px
                        ),
                        repeating-linear-gradient(
                        to bottom,
                        black 0px,
                        black 3px,
                        transparent 3px,
                        transparent 8px
                        ),
                    radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%);
                        
                mask-composite: intersect;
                -webkit-mask-composite: source-in;
            "
        />
        <div class="flex flex-col md:flex-row items-center md:justify-between mx-auto max-w-7xl min-h-[40em] md:min-h-screen xl:min-h-[50vh] relative z-1">
            <div class="md:basis-1/2 space-y-8 text-center md:text-left">
                
                <div class="font-extrabold text-3xl md:text-5xl">
                    Jasa Pembuatan Website <br>Terpercaya Sejak 2008
                </div>
                <div class="md:max-w-xl">
                    Gratis pemanduan, Garansi hacker, Dan mempunyai 5.000 klien aktif diseluruh dunia. Berdiri sejak 2008
                </div>
                <div class="flex gap-1">
                    <Button :link="'harga-web'">Harga Web</Button>
                    <Button :link="'kontak-kami'" color="secondary">Kontak Kami</Button>
                </div>

            </div>

            <div class="flex-1 flex justify-end px-5 md:p-0">
                <img :src="ImgHomeHero.src" width="500" class="object-contain" alt="Astro Homepage" />
            </div>
        </div>

        <div class="mx-auto max-w-7xl overflow-hidden whitespace-nowrap text-white">
            <div class="inline-block animate-[marquee_35s_linear_infinite]">
                <div class="flex gap-6">
                    <span 
                        v-for="item in [
                            '3.000 klien aktif',
                            'Pengalaman 13 tahun+',
                            'Garansi HACKER, VIRUS dan MALWARE',
                            'Gratis Support Tanya Jawab dan panduan',
                            'Harga terjangkau',
                            'Professional'
                        ]"
                        class="flex gap-1 opacity-75 items-center"
                    >
                    <Dot width="5" height="5"/> {{ item }}
                    </span>
                </div>
            </div>
        </div>

    </section>

    <Vue3Marquee>
        <span 
            v-for="item in [
                '3.000 klien aktif',
                'Pengalaman 13 tahun+',
                'Garansi HACKER, VIRUS dan MALWARE',
                'Gratis Support Tanya Jawab dan panduan',
                'Harga terjangkau',
                'Professional'
            ]"
            class="flex gap-1 opacity-75 items-center"
        >
        <Dot width="5" height="5"/> {{ item }}
        </span>
    </Vue3Marquee>

    <section id="searchdomain" class="py-10 bg-teal-300 px-6 md:px-0">
        <div class="md:flex items-center justify-between mx-auto max-w-7xl">
            <div class="md:basis-1/2 text-center md:text-left">
                <div class="font-medium text-2xl xl:text-3xl">
                    Temukan Domain yang Sesuai<br>dengan Websitemu
                </div>
                <div class="space-x-1 mt-2">
                    <span v-for="item in ['.com','.id','.co.id','.org']" class="inline-block text-xs bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded-xl cursor-pointer hover:shadow">
                        {{ item }}
                    </span>
                </div>
            </div>
            <div class="md:flex-1 mt-10 md:mt-0">
                <form class="flex bg-white border border-gray-200 px-3 py-2 w-full rounded-full">
                    <input class="border-0! px-3 py-2 w-full rounded-full">
                    <Button type="button" class="px-5! py-2!">
                        <Search />
                    </Button>
                </form>
            </div>
        </div>
    </section>
        
</template>

<script setup>
import { Vue3Marquee } from 'vue3-marquee'
import ImgHomeHero from '../assets/home-hero.webp';
import Button from '../components/Button.vue';
import { Search, Dot } from 'lucide-vue-next';
</script>

<style>
	@keyframes marquee {
	0% { transform: translateX(100%) }
	100% { transform: translateX(-100%) }
	}
</style>