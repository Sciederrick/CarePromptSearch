<script setup lang="ts">
    import { useSearchStore } from '~/store/search';

    const { modifySearchTerm } = useSearchStore();

</script>

<template>
    <div class="w-full pt-6 flex flex-col items-center gap-y-4">
        <h3 class="text-xl md:text-2xl">Nothing matches your search</h3>
        <p>Try modifying your search terms</p>
        <button class="btn btn-gray" @click="modifySearchTerm('')">Clear search</button>
    </div>
</template>