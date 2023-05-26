<script setup lang="ts">
    definePageMeta({
        layout: 'search'
    });
</script>

<template>
    <main class="p-2 md:relative md:flex md:justify-between lg:px-16 2xl:container">
        <MyMainSearchInput class="pb-4 md:hidden"/>
        <div class="md:sticky md:top-0 md:h-screen md:pt-2">
            <nav class="pt-1 bg-[--blue100] rounded-sm sticky top-0 inset-x-0 z-10 md:static md:pt-0">
                <ul class="w-full p-2 pb-0 flex justify-between text-sm serif md:text-base md:flex-col md:pb-2">
                    <li class="border-b-4 border-b-[--blue900] md:border-b-[0.5px] md:py-4 md:border-b-[--gray100] md:text-[--blue700]">Protocol</li>
                    <li class="border-b-4 border-b-[--gray100] text-[--gray600] md:border-b-[--gray100] md:border-b-[0.5px] md:py-4">Decision matrix</li>
                    <li class="border-b-4 border-b-[--gray100] text-[--gray600] md:border-none md:py-4">Diagnosis</li>
                </ul>
            </nav>
            <aside class="hidden md:block md:mt-10">
                <SearchResultActions />
            </aside>
        </div>
        <section class="py-8 order-first md:relative md:grid md:grid-cols-3 md:py-0 md:pt-2 lg:flex lg:gap-x-8">
            <div class="flex flex-col items-center gap-y-16 md:items-start">
                <SearchResultImage v-for="i in 7" />
            </div>
            <dl class="hidden md:block md:col-span-2 md:px-8 md:h-screen md:sticky md:top-0">
                <div class="flex gap-x-4 pb-4 lg:max-w-lg"
                    v-for="(i, index) in 7" :key="index">
                    <dt class="serif text-[--blue700] font-semibold text-xl">{{index + 1}}</dt>
                    <dd>
                        <span class="font-semibold">Prepare for the procedure:</span>&nbsp;wash your hands, put on sterile gloves, and have necessary equipment ready. 
                    </dd>
                </div>
            </dl>
        </section>
        <dl class="fixed inset-x-0 bottom-0 p-4 backdrop-blur-sm flex justify-center items-center gap-x-8 md:hidden">
            <dt class="label text-4xl text-[--blue700]">2</dt>
            <dd>
                <span class="font-semibold">Prepare for the procedure:</span>&nbsp;wash your hands, put on sterile gloves, and have necessary equipment ready.
            </dd>
        </dl>
    </main>
</template>