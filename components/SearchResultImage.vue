<script setup lang="ts">
    defineProps({
        img: { type:String, required:true },
        position: { type:Number, required:true },
        size: { type:Number, required:true }, 
        title: { type:String, required:true },
        isActive: { type: Boolean, required:true }
    });
</script>

<template>
    <div class="relative">
        <img :class="[ isActive ? 'border-[--blue900]' : 'border-[--gray100]' ]" class="object-cover img-container"
            src="~/assets/images/bimanual-uterine-massage.png" :alt="`image ${position} showcasing ${title}`" />
        <div :class="[ isActive ? 'bg-[--blue900] text-white' : 'bg-[--gray100]' ]"
            class="absolute -bottom-3 left-4 text-xs py-1 px-3 rounded-2xl label">
            {{ position }}/{{ size }}
        </div>
    </div>
</template>