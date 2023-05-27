<script setup lang="ts">
    defineProps({
        img: { type:String, required:true },
        position: { type:Number, required:true },
        size: { type:Number, required:true }, 
        title: { type:String }
    });
</script>

<template>
    <div class="relative">
        <img src="~/assets/images/bimanual-uterine-massage.png" class="object-cover img-container" :alt="`image ${position} showcasing ${title}`" />
        <div class="absolute -bottom-3 left-4 bg-[--gray100] text-[--gray-600] text-xs py-1 px-3 rounded-2xl label">
            {{ position }}/{{ size }}
        </div>
    </div>
</template>