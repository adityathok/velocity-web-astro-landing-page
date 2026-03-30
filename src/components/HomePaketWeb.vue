<template>
    <section id="paketweb" class="px-6 py-12 bg-gray-100">
        <div class="mx-auto max-w-7xl">
            <h2 class="text-center font-bold text-2xl md:text-4xl mb-6 md:mb-10">
                Paket Website
            </h2>
            <div class="grid grid-cols-12 gap-3 md:gap-5 xl:gap-10">

                <div class="col-span-12 md:col-span-6 xl:col-span-4">
                    <div class="shadow-sm hover:shadow-xl rounded-xl bg-white overflow-hidden">
                        <div class="px-5 py-5 text-xl md:text-2xl font-bold text-white bg-linear-to-r from-cyan-500 to-blue-500 text-center">
                            Web Profile
                        </div>
                        <div class="p-8 md:px-15 text-center">
                            <img :src="ImgIconOffice.src" width="64" class="object-contain mx-auto mb-5" alt="Icon Office" />
                            <p>Website untuk Perusahaan, Sekolah, Universitas, Rumah Sakit, Pemerintah, Sales Mobil, Personal, Bisnis, Tour Travel, dsb.</p>
                            <p class="mt-15 mb-2 font-medium">
                                Harga mulai
                            </p>
                            <h3 class="text-2xl md:text-3xl font-bold">
                                Rp 390.000
                            </h3>
                            <a href="/harga-web" class="mt-5 block bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-xl hover:shadow-xl">
                                Detail Info
                            </a>
                        </div>
                    </div>
                </div>

                 <div class="col-span-12 md:col-span-6 xl:col-span-4">
                    <div class="shadow-sm hover:shadow-xl rounded-xl bg-white overflow-hidden">
                        <div class="px-5 py-5 text-xl md:text-2xl font-bold text-white bg-linear-to-r from-blue-500 to-indigo-500 text-center">
                            Web Berita / Media Online
                        </div>
                        <div class="p-8 md:px-15 text-center">
                            <img :src="ImgIconNewspaper.src" width="64" class="object-contain mx-auto mb-5 md:mb-10" alt="Icon Office" />
                            <p>Website untuk portal berita, artikel, media pengumuman, blog, catatan pribadi, media online, portal informasi, dsb.</p>
                            <p class="mt-15 mb-2 font-medium">
                                Harga mulai
                            </p>
                            <h3 class="text-2xl md:text-3xl font-bold">
                                Rp 390.000
                            </h3>
                            <a href="/harga-web" class="mt-5 block bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-xl hover:shadow-xl">
                                Detail Info
                            </a>
                        </div>
                    </div>
                </div>

                 <div class="col-span-12 md:col-span-6 xl:col-span-4">
                    <div class="shadow-sm hover:shadow-xl rounded-xl bg-white overflow-hidden">
                        <div class="px-5 py-5 text-xl md:text-2xl font-bold text-white bg-linear-to-r from-yellow-500 to-orange-600 text-center">
                            Web Toko Online
                        </div>
                        <div class="p-8 md:px-15 text-center">
                            <img :src="ImgIconShoppingCart.src" width="64" class="object-contain mx-auto mb-5 md:mb-10" alt="Icon Office" />
                            <p>Website untuk Toko Online, Jual Baju, Kosmetik, Komputer, dan Berbagai Barang. Dengan sistem pengelolaan pembeli dan pengiriman.</p>
                            <p class="mt-15 mb-2 font-medium">
                                Harga mulai
                            </p>
                            <h3 class="text-2xl md:text-3xl font-bold">
                                Rp 390.000
                            </h3>
                            <a href="/harga-web" class="mt-5 block bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-xl hover:shadow-xl">
                                Detail Info
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <div class="grid grid-cols-12 gap-3 md:gap-5 xl:gap-10 mt-6">

                <div v-for="item in paketSmall" class="col-span-6 md:col-span-4 xl:col-span-3 shadow-sm hover:shadow-xl rounded-xl bg-white overflow-hidden px-4 md:px-8 py-8 md:py-12 text-center">               
                    <span>
                        <component :is="item.icon" class="mx-auto w-10 h-10 text-blue-600" />
                    </span>   
                    <h3 class="my-2 mb-4 font-bold text-base md:text-xl">{{ item.title }}</h3>     
                    <p class="hidden xl:block text-sm">
                        {{ item.text }}
                    </p> 
                </div>

            </div>

            <div class="mt-10 block text-center">                
                <Button :link="'harga-web'">Paket web lainnya</Button>
            </div>

        </div>
    </section>
</template>

<script setup>
import ImgIconOffice from '../assets/icon-office.png';
import ImgIconNewspaper from '../assets/icon-newspaper.png';
import ImgIconShoppingCart from '../assets/icon-shopping-cart.png';
import Button from '../components/Button.vue';
import { Store, LayoutList, BookOpenCheck, Smartphone } from 'lucide-vue-next';

const paketSmall = [
    {
        icon: Store,
        title: 'Marketplace',
        text: 'Pembuatan web marketplace / jual beli semacam Tokopedia, Shopee.'
    },
    {
        icon: LayoutList,
        title: 'Iklan Baris',
        text: 'Pembuatan web Iklan Baris, Iklan Premium dengan fitur pasang Iklan di Web Anda.'
    },
    {
        icon: BookOpenCheck,
        title: 'Elearning',
        text: 'Pembuatan web media pembelajaran dengan fitur upload tugas, soal tes ujian, dan materi.'
    },
    {
        icon: Smartphone,
        title: 'Aplikasi Android',
        text: 'Aplikasi tersedia di playstore. Untuk Toko Online, Perusahaan, Sekolah, Portal Berita, dsb.'
    }
]
</script>