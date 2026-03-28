<template>
    <section id="klien" class="px-6 py-12 bg-white">
        <div class="mx-auto max-w-7xl">

            <h2 class="text-center font-bold text-2xl md:text-4xl mb-6 md:mb-10">
                Telah Dipercaya Oleh
            </h2>

            <Swiper                
                :loop="true"
                :autoplay="{ delay: 2000 }"
                :freeMode="true"
                :modules="modules"
                :breakpoints="{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 5 }
                }"
            >
                <SwiperSlide v-for="(item, i) in items" :key="i">
                    <div class="text-center px-4">
                        <img :src="item.img.src" class="h-20 mx-auto" :alt="'klien '+item.title" loading="lazy"/>
                        <div class="text-sm text-slate-600 mt-1 px-4">{{ item.title }}</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>                    
                    <Button :link="'/klien-kami'" color="secondary" class="text-center mt-5 xl:mt-10">
                        5.000+ <br>Klien lainnya
                    </Button>
                </SwiperSlide>
            </Swiper>

        </div>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
const modules = [Autoplay]
import ImgKlienBrimob from '../assets/klien-brimob.webp';
import ImgKlienBeacukai from '../assets/klien-beacukai.webp';
import ImgKlienMandiri from '../assets/klien-mandiri.webp';
import ImgKlienKejaksaan from '../assets/klien-kejaksaan.webp';
import Button from '../components/Button.vue';

const items = [
    {
        img: ImgKlienBrimob,
        title: 'Brimob Sulawesi Tenggara'
    },
    {
        img: ImgKlienBeacukai,
        title: 'Bea Cukai Sabang Aceh'
    },
    {
        img: ImgKlienMandiri,
        title: 'Bank Mandiri Remittance Malaysia'
    },
    {
        img: ImgKlienKejaksaan,
        title: 'Kejaksaan Negeri Kepahiang Bengkulu'
    }
]
</script>