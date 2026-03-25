<template>
    <footer class="bg-slate-900 text-white py-15 xl:py-20 px-8">
        <div class="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-10 text-sm/6">
            
            <div>                
                <img :src="velocityLogo.src" class="mr-3 h-6 sm:h-10" alt="Velocity Logo" />

                <div class="my-10 flex items-center gap-3">
                    <template v-for="item in sosmed">                    
                        <a class="inline-block bg-white rounded-full overflow-hidden" :href="item.url" target="_blank">
                            <img src="https://s.magecdn.com/social/tc-facebook.svg" class="w-10"/>
                        </a>
                    </template>
                </div>
                <p>
                    Kebonagung RT 04/ RW 01, Jarum, Bayat, Klaten, Jawa Tengah. Kode Pos: 57462
                </p>
            </div>

            <div>
                <div class="font-bold text-lg mb-2">
                    Paket Web
                </div>
                <div class="text-sm/7 text-gray-400">
                    <ul>
                        <li>Website Profile</li>
                        <li>Website Berita / Media Online</li>
                        <li>Web Toko Online</li>
                        <li>Web Marketplace/ Jual Beli</li>
                        <li>Web Iklan Baris</li>
                        <li>Web Sistem Informasi Akademik (SIA)</li>
                        <li>Web Forum</li>
                        <li>Web Radio Streaming</li>
                        <li>Web Landingpage</li>
                        <li>Web PPDB</li>
                        <li>Web PPOB</li>
                        <li>Web Lowongan Kerja</li>
                        <li>Aplikasi Android</li>
                    </ul>
                </div>
            </div>
            
            <div>
                <div class="font-bold text-lg mb-2">
                    Jasa pembuatan Website
                </div>
                <div class="text-sm/7 text-gray-400">
                    <ul>
                        <li v-for="item in jasaPembuatan"> {{ item }} </li>
                    </ul>
                </div>
            </div>

            <div>
                <img :src="ImgTimVelocity.src" class="rounded-4xl w-full mb-5" alt="Velocity Logo" />
                <div>
                    <p>CV. Velocity Developer Indonesia</p><br>
                    <p>
                        Kantor:<br>Kebonagung RT 04/ RW 01, Jarum, Bayat, Klaten, Jawa Tengah. Kode Pos: 57462</p>
                    <p>
                        Email:<br>bantuanvdc@gmail.com</p>
                    <p>
                        WA:<br>Cek di menu cara pemesanan atau pada icon wa (pojok kanan bawah)
                    </p>
                </div>
            </div>

        </div>

        <div class="mx-auto max-w-7xl text-xs/6 border-t border-slate-800 mt-20 pt-10">

        </div>

    </footer>
</template>

<script setup>
import velocityLogo from '../assets/velocity-logo.png';
import ImgTimVelocity from '../assets/tim_velocity.jpg';
import { Facebook } from 'lucide-vue-next';

const sosmed = [
    {
        icon:'facebook',
        url: 'https://www.facebook.com/RumahwebIndonesia/'
    },
    {
        icon:'facebook',
        url: 'https://www.facebook.com/RumahwebIndonesia/'
    },
    {
        icon:'facebook',
        url: 'https://www.facebook.com/RumahwebIndonesia/'
    },
    {
        icon:'facebook',
        url: 'https://www.facebook.com/RumahwebIndonesia/'
    },
]

const jasaPembuatan = [
    'Jasa Pembuatan Website Perusahaan',
    'Jasa Pembuatan Website Pemerintah',
    'Jasa Pembuatan Toko Online',
    'Jasa Pembuatan Website Desa',
    'Jasa Pembuatan Web Rental Mobil',
    'Jasa Pembuatan Web Sekolah'
]
</script>