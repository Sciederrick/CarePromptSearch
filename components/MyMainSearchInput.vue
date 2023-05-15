<script setup lang="ts">
    import { useSearchStore } from '~/store/search';
    import { storeToRefs } from 'pinia';
    
    const searchStore = useSearchStore()
    const { addFocusToMainSeachInput, removeFocusToMainSeachInput } = searchStore;
    let { isMainSearchInputInFocus } = storeToRefs(searchStore);
</script>

<template>
    <form class="hidden md:block md:w-full md:mx-24" @submit.prevent="">
        <div class="flex items-center rounded w-full mx-auto px-4"
            :class="{ 'border-2': isMainSearchInputInFocus, 'border-[#135553]': isMainSearchInputInFocus , 'border': !isMainSearchInputInFocus, 'border-[#e1e1e1]': !isMainSearchInputInFocus }">
            <icon name="prime:search" size="24px" :style="[ isMainSearchInputInFocus ? 'color:#135553':'color:#a9a9a9']"/>
            <input @focusin="addFocusToMainSeachInput" @focusout="removeFocusToMainSeachInput" @keyup.enter=""
                class="text-input w-full text-[#135553]" type="text" placeholder="Search">
        </div>
    </form> 
</template>