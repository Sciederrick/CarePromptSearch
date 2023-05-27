<script setup lang="ts">
    import { useSearchStore } from '~/store/search';
    import { storeToRefs } from 'pinia';
    
    const searchStore = useSearchStore();
    const { addFocusToMainSeachInput, removeFocusToMainSeachInput, modifySearchTerm } = searchStore;
    let { isMainSearchInputInFocus, searchTerm } = storeToRefs(searchStore);
    let inputSearchTerm = searchTerm;
    const route = useRoute();

    async function performSearch() {
        if (inputSearchTerm.value.trim() != '') {
            modifySearchTerm(inputSearchTerm.value);
            await useSearchTreatment();
        }
        if (route.name != 'search') await navigateTo('/search');
    }
</script>

<template>
    <form class="w-full md:mx-24" @submit.prevent="">
        <div class="flex items-center rounded w-full mx-auto px-4"
            :class="{ 'border-2': isMainSearchInputInFocus, 'border-[--blue900]': isMainSearchInputInFocus , 'border': !isMainSearchInputInFocus, 'border-[--gray100]': !isMainSearchInputInFocus }">
            <icon name="prime:search" size="24px" :style="[ isMainSearchInputInFocus ? 'color:#0099CC':'color:#a9a9a9']"/>
            <input @focusin="addFocusToMainSeachInput" @focusout="removeFocusToMainSeachInput" @keyup.enter="performSearch" v-model="inputSearchTerm"
                class="text-input w-full text-[#313131]" type="text" placeholder="Search">
        </div>
    </form> 
</template>