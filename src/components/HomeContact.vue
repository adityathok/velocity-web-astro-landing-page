<template>
    <section id="contact" class="px-10 py-12 md:py-25 bg-blue-100 md:mt-10">
        <div class="mx-auto max-w-7xl flex flex-col md:flex-row md:justify-between md:items-center gap-10">

            <div class="max-w-3xl">
                <h2 class="font-bold text-4xl xl:text-5xl mb-6">
                    Support Professional Siap<br>Berikan Solusi Penanganan Langsung
                </h2>
                <p class="md:text-md font-medium text-slate-600">
                    Tidak hanya sekedar dukungan teknis yang cepat, kami berkomitmen untuk mendukung layanan dalam kondisi prima kapan saja.
                </p>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10">
                    <div
                        v-for="item in [
                            {
                                title: '<15 Menit',
                                caption: 'Response Pelayanan'
                            },
                            {
                                title: '3000+',
                                caption: 'Klien aktif'
                            },
                            {
                                title: '13thn+',
                                caption: 'Pengalaman'
                            },
                            {
                                title: 'Garansi',
                                caption: 'Hacker, virus dan malware'
                            },
                            {
                                title: 'Gratis',
                                caption: 'Support dan tanya jawab'
                            }
                        ]"
                        class="px-2 py-3"
                    >
                    
                        <h4 class="text-xl font-bold block mb-2 text-slate-700">
                            {{ item.title }}
                        </h4>
                        <div>{{ item.caption }}</div>

                    </div>
                </div>
            </div>

            <div>
                <img :src="ImgHeroCS.src" alt="Hero CS" loading="lazy" class="h-40 md:h-90 object-contain mx-auto md:mr-0"/>
            </div>

        </div>
    </section>
</template>

<script setup>
import ImgHeroCS from '../assets/hero-cs.webp';
</script>