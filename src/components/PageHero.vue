<template>
    <section id="hero" class="relative w-full text-white bg-linear-to-br from-blue-900 to-cyan-500 pt-10 md:pt-30 p-6">
        <div class="mx-auto max-w-7xl md:min-h-0 relative z-1">

            <h1 v-if="titlePage" class="text-xl md:text-3xl xl:text-4xl font-bold text-center mt-15 mb-10">
               {{ titlePage }}
            </h1>

            <slot/>

        </div>

        <div
            class="absolute inset-0 z-0 opacity-10"
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
                        radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%);
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
                    radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%);
                        
                mask-composite: intersect;
                -webkit-mask-composite: source-in;
            "
        />

    </section>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['title'])

const titlePage  = ref(props.title || '')

</script>