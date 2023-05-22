<script setup lang="ts">
    interface IAlert {
        type: "info"|"error"|"warning"|"success"|undefined,
        msg: string
    }
    defineProps<IAlert>();
</script>

<template>
    <div v-if="type=='info'"
        class="w-full flex gap-x-4 text-xs items-center px-4 py-2 my-4 bg-[#eff6ff] md:text-sm">
        <Icon name="icon-park-outline:info" size="24px" color="#60a5fa" />
        <p> {{ $props.msg }} </p>
    </div>
    <div v-else-if="type=='success'"
        class="w-full flex gap-x-4 text-xs items-center px-4 py-2 my-4 bg-[#f0fdf4] md:text-sm">
        <Icon name="mdi:success-circle-outline" size="24px" color="#54e087" />
        <p> {{ $props.msg }} </p>
    </div>
    <div v-else-if="type=='warning'"
        class="w-full flex gap-x-4 text-xs items-center px-4 py-2 my-4 bg-[#fefce8] md:text-sm">
        <Icon name="jam:alert" size="24px" color="#facc15" />
        <p> {{ $props.msg }} </p>
    </div>
    <div v-else-if="type=='error'"
        class="w-full flex gap-x-4 text-xs items-center px-4 py-2 my-4 bg-[#fef2f2] md:text-sm">
        <Icon name="mi:circle-error" size="24px" color="#f87171" />
        <p> {{ $props.msg }} </p>
    </div>
</template>