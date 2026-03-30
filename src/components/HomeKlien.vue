<template>
    <section id="klien" class="px-6 py-12 md:pt-20 bg-white">
        <div class="mx-auto max-w-7xl">

            <h2 class="text-center font-bold text-2xl md:text-4xl mb-6 md:mb-10">
                Telah Dipercaya Oleh
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-6 gap-2 xl:gap-10">
                <div class="md:col-span-4 xl:col-span-5">
                    <Swiper                
                        :loop="true"
                        :autoplay="{ delay: 3000 }"
                        :freeMode="true"
                        :modules="modules"
                        :breakpoints="{
                            0: { slidesPerView: 2 },
                            640: { slidesPerView: 3 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 }
                        }"
                    >
                        <SwiperSlide v-for="(item, i) in items" :key="i">
                            <div class="text-center px-4 group">
                                <img :src="item.img.src" class="h-20 mx-auto opacity-70 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0" :alt="'klien '+item.title" loading="lazy"/>
                                <div class="text-xs md:text-sm text-slate-600 mt-1 px-4">{{ item.title }}</div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div class="text-center md:text-right md:col-span-2 xl:col-span-1">                 
                    <Button :link="'/klien-kami'" color="secondary" class="text-center mt-5 xl:mt-10">
                        5.000+ <br>Klien lainnya
                    </Button>
                </div>
            </div>

            

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
import ImgKlienTidore from '../assets/klien-tidore.webp';
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
    },
    {
        img: ImgKlienTidore,
        title: 'DPRD Tidore Kepulauan'
    }
]
</script>