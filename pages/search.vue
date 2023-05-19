<script setup lang="ts">
//  import { useSearchStore } from '~/store/search';
//     import { storeToRefs } from 'pinia';

    definePageMeta({
        layout: 'search'
    });
     
//     const searchStore = useSearchStore();
//     const { modifySearchTerm } = searchStore;
//     let { searchTerm } = storeToRefs(searchStore);

//     const { $api } = useNuxtApp();

//     const response = $api.search.searchTreatments(
//         {
//             'q'         : searchTerm.value,
//             'query_by'  : 'title',
//             'sort_by'   : 'rating:desc'
//         }
//     );
//     console.log(response)
const response = ref([
    {
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi a, illo itaque rem nostrum tenetur animi, suscipit tempora quod mollitia magnam architecto, enim voluptatibus necessitatibus quibusdam.',
        date: '24/07/2023'
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi a, illo itaque rem nostrum tenetur animi, suscipit tempora quod mollitia magnam architecto, enim voluptatibus necessitatibus quibusdam.',
        date: '24/07/2023'
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi a, illo itaque rem nostrum tenetur animi, suscipit tempora quod mollitia magnam architecto, enim voluptatibus necessitatibus quibusdam.',
        date: '24/07/2023'
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi a, illo itaque rem nostrum tenetur animi, suscipit tempora quod mollitia magnam architecto, enim voluptatibus necessitatibus quibusdam.',
        date: '24/07/2023'
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi a, illo itaque rem nostrum tenetur animi, suscipit tempora quod mollitia magnam architecto, enim voluptatibus necessitatibus quibusdam.',
        date: '24/07/2023'
    }
]);
  
</script>

<template>
    <main class="px-2 py-2 flex flex-col md:flex-row md:justify-between md:gap-x-8 lg:px-16 2xl:container 2xl:mx-auto">
        <section class="order-last flex flex-col gap-y-8 md:order-first md:max-w-3xl">
            <SearchResult v-for="(res, index) in response" :key="index" v-bind="res"/>
        </section>
        <aside class="sticky top-2 inset-x-0 max-h-72 order-first bg-[#d9d9d9] px-2 py-3  rounded md:bg-[#ffffff] flex justify-between md:py-0 md:px-0 md:order-last md:flex-col md:justify-start md:items-center md:gap-y-8 md:py-4">
            <div class="flex items-center">
                <input type="checkbox" id="checkbox" class="h-[20px] w-[20px]" />&nbsp;&nbsp;
                <label class="text-xs text-[#838383]" for="checkbox"> Select all </label>
            </div>
            <div class="hidden md:border md:border-[#d9d9d9] md:rounded md:flex md:flex-col lg:flex-row">
                <button class="btn text-[#838383]">
                    <Icon name="material-symbols:bookmark-outline-rounded" size="24px" color="#838383" />
                    &nbsp;Save
                </button>
                <button class="btn text-[#838383]">
                    <Icon name="material-symbols:share-outline" size="24px" color="#838383" />
                    &nbsp;Share
                </button>
            </div>
            <p class="hidden md:block md:text-xs">0 selected</p>
            <button class="md:hidden">
                <Icon name="ep:more" size="32px" color="#313131" />
            </button>
        </aside>
    </main>
</template>