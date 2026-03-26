<template>
    <section id="searchdomain" class="py-10 bg-teal-500 px-6">
        <div class="md:flex items-center justify-between mx-auto max-w-7xl">
            <div class="md:basis-1/2 text-center md:text-left">
                
                <div class="font-medium text-2xl xl:text-3xl text-white">
                    Temukan Domain yang Sesuai<br>dengan Websitemu
                </div>
                <div class="space-x-1 mt-2">
                    <template v-for="item in ['.com','.id','.co.id','.org']" >
                        <span @click="changeKey(item)" class="inline-block text-xs bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded-xl cursor-pointer hover:shadow">
                            {{ item }}
                        </span>
                    </template>
                </div>

            </div>
            <div class="md:flex-1 mt-10 md:mt-0">
                <form method="GET" action="/search-domain" class="flex bg-white border border-gray-200 px-3 py-2 w-full rounded-full">
                    <input class="border-0! px-3 py-2 w-full rounded-full" name="key" v-model="keySearch" placeholder="Cari domain ...">
                    <Button type="submit" class="px-5! py-2!" aria-label="Cari domain">
                        <Search />
                    </Button>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Search } from 'lucide-vue-next';
import Button from '../components/Button.vue';
import { ref } from 'vue';

const keySearch = ref('')

const changeKey = (val) => {
    keySearch.value = val
}
</script>