<template>
    <template v-if="props.type=='submit' || props.type=='button'">
        <button :class="[styleColor,style]">
            <slot />
        </button>
    </template>
    <template v-else>
        <a :href="link" :target="target" :class="[styleColor,style]">
            <slot />
        </a>
    </template>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    type?: 'submit' | 'button' | 'link',
    link?: string,
    target?: string,
    color?: 'primary' | 'secondary'
}>(), {
    type: 'link',
    link: '',
    target: '_self',
    color: 'primary'
});

const style = 'px-10 py-3 rounded-full text-white inline-block transition-shadow duration-300 hover:shadow-m cursor-pointer';

const styleColor  = computed(() => {
  return props.color=='primary'?'bg-orange-400 hover:bg-orange-500':'bg-slate-900 hover:bg-slate-950';
});

</script>