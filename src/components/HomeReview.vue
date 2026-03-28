<template>
    <section id="review" class="px-10 py-12 md:pb-20 bg-white md:mt-10">
        <div class="mx-auto max-w-7xl">

            <h2 class="text-center font-bold text-2xl md:text-4xl mb-2 md:mb-4">
                Testimoni
            </h2>
            <p class="text-center mb-6 md:mb-10">
                Apa kata pelanggan tentang Velocity Developer <br>sebagai layanan pembuatan website terbaik sejak tahun 2008
            </p>

            <Swiper                
                :loop="true"
                :autoplay="{ delay: 4000 }"
                :pagination= "{
                    el: '.swiper-pagination',
                    type: 'bullets',
                }"
                :modules="modules"
                :breakpoints="{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 3 }
                }"
            >
                <SwiperSlide v-for="(item, i) in items" :key="i">
                    <div class="group border border-slate-300 rounded-xl p-4 md:p-8 mx-2">
                        <div class="flex items-center gap-3 border-b border-slate-300 mb-4 pb-4">
                            <img :src="item.img.src" class="h-10 w-10 object-cover rounded-full" :alt="'klien '+item.title" loading="lazy"/>
                            <div>
                                <div class="text-sm font-bold mb-1">{{ item.title }}</div>
                                <div class="flex">
                                    <Star v-for="ii in 5" class="w-4 h-4 text-orange-400"/>
                                </div>
                            </div>
                        </div>
                        <div class="text-sm text-slate-600 group-hover:text-slate-800 min-h-25 tracking-normal">
                            {{ item.testimonial }}
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
const modules = [Autoplay,Pagination]
import ImgAvatarDefault from '../assets/avatar-default.webp';
import { Star } from 'lucide-vue-next';

const items = [
    {
        img: ImgAvatarDefault,
        title: 'BPR Harta Tanamas - Bekasi, Jawa Barat',
        testimonial: 'Layanannya bagus, baik dan sangat cepat, pemberitahuannya juga jelas apabilan client ada yang tidak dimengerti team velocity selalu siap membantu dengan cepat, terima kasih.'
    },
    {
        img: ImgAvatarDefault,
        title: 'Daryono Putra - Sidoarjo, Jawa Timur',
        testimonial: 'Saya sangat beruntung dan berterima kasih kepada velocity developer yg sudah banyak membantu menjadikan usaha saya menjadi profesional dgn adanya web. Petugas yg siaga hingga malam untuk membantu 😊👍'
    },
    {
        img: ImgAvatarDefault,
        title: 'Nur Hadi',
        testimonial: 'Hasil pekerjaan yang disajikan velocity betul2 sesuai dengan ekspektasi, dengan biaya terjangkau tetapi saya puas dengan hasil kerjanya. Staffnya ramah dan revisinya cepat. Recommended lah. Maju dan sukses terus untuk velocity'
    },
    {
        img: ImgAvatarDefault,
        title: 'Yafet - Makassar, Sulawesi Selatan',
        testimonial: 'Saya sudah buat 3 website disini dan Sangat bagus serta respon sangat cepat jika kita bertanya juga memberikan arahan yang sangat baik. Solusi website murah tapi profesional ada disini deh.'
    }
]
</script>