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
                <div class="md:max-w-xl text-sm md:text-base">
                    Gratis pemanduan, Garansi hacker,5.000 klien aktif diseluruh dunia.<br> Berdiri sejak 2008
                </div>
                <div class="flex justify-center items-center md:justify-start gap-1">
                    <Button :link="'harga-web'">Harga Web</Button>
                    <Button :link="'kontak-kami'" color="secondary" class="hidden! md:inline-block!">Kontak Kami</Button>
                </div>

            </div>

            <div class="flex-1 flex justify-end px-5 md:p-0">
                <img :src="ImgHomeHero.src" width="500" class="object-contain" alt="Astro Homepage" />
            </div>
        </div>

        <div class="mx-auto max-w-7xl overflow-hidden whitespace-nowrap text-white pb-4 md:pb-0">
            <div class="overflow-hidden">
                <div class="marquee-track flex text-sm md:text-lg">
                    <div class="marquee-content flex">
                        <div v-for="i in items" :key="i" class="mr-2 md:mr-8 flex gap-1 opacity-75 items-center">
                            <Dot width="5" height="5"/> {{ i }}
                        </div>
                    </div>

                    <!-- clone -->
                    <div class="marquee-content flex">
                        <div v-for="i in items" :key="'clone-'+i" class="mr-2 md:mr-8 flex gap-1 opacity-75 items-center">
                            <Dot width="5" height="5"/> {{ i }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>
import ImgHomeHero from '../assets/home-hero.webp';
import Button from '../components/Button.vue';
import { Dot } from 'lucide-vue-next';

const items = [
    '3.000 klien aktif',
    'Pengalaman 13 tahun+',
    'Garansi HACKER, VIRUS dan MALWARE',
    'Gratis Support Tanya Jawab dan panduan',
    'Harga terjangkau',
    'Professional'
]
</script>

<style>
   .marquee-track {
        width: max-content;
        animation: marquee 25s linear infinite;
    }

    @keyframes marquee {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-50%);
    }
    }
</style>