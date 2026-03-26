<template>
    <footer class="relative w-full bg-slate-900 text-white py-15 xl:py-20 px-8">

        <div class="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-10 text-sm/6">
            
            <div>                
                <img :src="velocityLogo.src" class="mr-3 h-6 sm:h-10 mb-10" alt="Velocity Logo" />

                <div>
                    <p>
                        Kebonagung RT 04/ RW 01, Jarum, Bayat, Klaten, Jawa Tengah. Kode Pos: 57462
                    </p><br>
                    <p>
                        Email:<br>bantuanvdc@gmail.com
                    </p><br>
                    <p>
                        WA:<br>Cek di menu cara pemesanan atau pada icon wa (pojok kanan bawah)
                    </p>
                </div>
                <div class="mt-10 flex items-center gap-3">
                    <template v-for="item in sosmed">                    
                        <a class="inline-block bg-white rounded-full overflow-hidden border border-slate-600 opacity-50 hover:opacity-100" :href="item.url" target="_blank">
                            <img :src="'https://s.magecdn.com/social/tc-'+item.icon+'.svg'" class="w-10 rounded-full"/>
                        </a>
                    </template>
                </div>
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
                        <li v-for="item in jasaPembuatans"> 
                            <a :href="item.url">
                                {{ item.title }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <div class="font-bold text-lg mb-2">
                    Informasi
                </div>
                <div class="text-sm/7 text-gray-400">
                    <ul>
                        <li v-for="item in informasi">
                            <a :href="item.url">
                                {{ item.title }}
                            </a>
                        </li>
                    </ul>
                </div>
                <img :src="ImgTimVelocity.src" class="rounded-4xl w-full mt-15" alt="Velocity Logo" />
            </div>

        </div>

        <div class="mx-auto max-w-7xl text-sm/6 border-t border-slate-800 mt-20 pt-10">
            Copyright © {{ currentYear }} Jasa Pembuatan Website, Bikin Web Murah, Profile, Toko Online, Sekolah, Berita
        </div>

    </footer>
</template>

<script setup>
import velocityLogo from '../assets/velocity-logo.png';
import ImgTimVelocity from '../assets/tim_velocity.jpg';

const currentYear = new Date().getFullYear();

const sosmed = [
    {
        icon:'facebook',
        url: 'https://www.facebook.com/velocitydeveloper/'
    },
    {
        icon:'x',
        url: 'https://www.x.com/velocitydeveloper/'
    },
    {
        icon:'instagram',
        url: 'https://www.instagram.com/velocitydeveloper/'
    },
    {
        icon:'youtube',
        url: 'https://www.youtube.com/velocitydeveloper/'
    },
]

const jasaPembuatans = [
    { title : 'Jasa Pembuatan Website Perusahaan', url: '/com' },
    { title : 'Jasa Pembuatan Website Pemerintah', url: '/pemerintah' },
    { title : 'Jasa Pembuatan Toko Online', url: '/to' },
    { title : 'Jasa Pembuatan Website Desa', url: '/desa' },
    { title : 'Jasa Pembuatan Web Rental Mobil', url: '/rentalmobil' },
    { title : 'Jasa Pembuatan Web Sekolah', url: '/pendidikan' }
]

const informasi = [
    {
        title:'Tentang Kami',
        url: '/tentang-kami'
    },
    {
        title:'Pembayaran',
        url: '/pembayaran'
    },
    {
        title:'Kebijakan Privasi',
        url: '/kebijakan-privasi'
    },
    {
        title:'Syarat & Ketentuan',
        url: '/syarat-dan-ketentuan'
    },
]
</script>