<script setup lang="ts">
    import { useSearchStore } from '~/store/search';
    import { storeToRefs } from 'pinia';
    
    const searchStore = useSearchStore()
    const { addFocusToSecondarySeachInput, removeFocusToSecondarySeachInput } = searchStore;
    let { isSecondarySearchInputInFocus } = storeToRefs(searchStore);
</script>

<template>
    <form class="w-full md:hidden" @submit.prevent="">
        <div class="flex items-center rounded w-full mx-auto px-4"
            :class="{ 'border-2': isSecondarySearchInputInFocus, 'border-[#135553]': isSecondarySearchInputInFocus , 'border': !isSecondarySearchInputInFocus, 'border-[#e1e1e1]': !isSecondarySearchInputInFocus }">
            <icon name="prime:search" size="24px" :style="[ isSecondarySearchInputInFocus ? 'color:#135553':'color:#a9a9a9']"/>
            <input @focusin="addFocusToSecondarySeachInput" @focusout="removeFocusToSecondarySeachInput" @keyup.enter=""
                class="text-input w-full text-[#135553]" type="text" placeholder="Search">
        </div>
    </form> 
</template>