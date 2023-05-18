<script setup lang="ts">
//  import { useSearchStore } from '~/store/search';
//     import { storeToRefs } from 'pinia';

//     definePageMeta({
//         layout: 'search'
//     });
     
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
    <main class="px-2 py-2 md:flex md:flex-row md:justify-between md:gap-x-8 lg:px-16 2xl:container 2xl:mx-auto">
        <section class="flex flex-col gap-y-8 md:max-w-3xl">
            <SearchResult v-for="(res, index) in response" :key="index" v-bind="res"/>
        </section>
        <aside class="hidden md:flex md:flex-col md:items-center md:gap-y-8 md:py-4">
            <div class="md:border md:border-[#d9d9d9] md:rounded md:flex md:flex-col lg:flex-row">
                <button class="btn text-[#838383]">
                    <Icon name="material-symbols:bookmark-outline-rounded" size="24px" color="#838383" />
                    &nbsp;Save
                </button>
                <button class="btn text-[#838383]">
                    <Icon name="material-symbols:share-outline" size="24px" color="#838383" />
                    &nbsp;Share
                </button>
            </div>
            <p class="text-xs">0 selected</p>
        </aside>
    </main>
</template>