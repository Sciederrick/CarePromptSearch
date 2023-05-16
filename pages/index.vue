<script setup lang="ts">
    const { useDynamicImages } = useMyUtils();
    const images = useDynamicImages();
    console.log(images)
    const users = ref([
        {avatar: 'user-1', name: 'John Doe'},
        {avatar: 'user-2', name: 'John Doe'},
        {avatar: 'user-3', name: 'John Doe'},
        {avatar: 'user-2', name: 'John Doe'},
        {avatar: 'user-1', name: 'John Doe'}
    ])
</script>

<template>
    <main class="px-2 lg:px-16 2xl:container 2xl:mx-auto">
        <!-- Hero section -->
        <section class="py-16 md:grid md:grid-cols-2 md:items-center md:gap-x-24 md:py-20 lg:grid-cols-3">
            <div class="flex flex-col gap-y-8 py-4">
                <div>
                    <p class="text-xs">For obstetric emergencies</p>
                    <h1 class="text-6xl">CarePrompt Search</h1>
                </div>
                <div class="grid grid-cols-3 gap-x-4">
                    <p class="col-span-2">Quickly learn obstetric emergency protocols on the go.</p>
                    <SocialProof class="lg:hidden"/>
                </div>
                <MySecondarySearchInput />
                <div>
                    <button class="hidden lg:block lg:btn lg:btn-gray"><Icon name="akar-icons:search" size="24px" color="#313131"/>&nbsp;Search Now</button>
                </div>
                <SocialProof class="hidden lg:block" />

            </div>

            <img class="hidden lg:block"
                src="~/assets/images/hero-illustration.svg" width="480" height="640" draggable="false"/>


            <ul class="flex gap-x-4 md:flex-col md:gap-y-4">
                <li class="flex flex-col gap-y-2 rounded border border-[#d9d9d9] p-4 hover:border-blue-500 hover:border-solid hover:bg-blue-500 hover:text-white group "> 
                    <h2 class="group-hover:text-white text-[#838383] text-xl md:text-4xl">Effortless</h2>
                    <p class="group-hover:text-white text-sm md:text-lg">Don't make me think, it's an emergency!</p>
                </li>
                <li class="flex flex-col gap-y-2 rounded border border-[#d9d9d9] p-4 hover:border-blue-500 hover:border-solid hover:bg-blue-500 hover:text-white group ">
                    <h2 class="group-hover:text-white text-[#838383] text-xl md:text-4xl">Creative</h2>
                    <p class="group-hover:text-white text-sm md:text-lg">You don't have all the resources, so let's use what you got.</p>
                </li>
                <li class="flex flex-col gap-y-2 rounded border border-[#d9d9d9] p-4 hover:border-blue-500 hover:border-solid hover:bg-blue-500 hover:text-white group ">
                    <h2 class="group-hover:text-white text-[#838383] text-xl md:text-4xl">Trusted</h2>
                    <p class="group-hover:text-white text-sm md:text-lg">Peer-reviewed, proven protocols by fellow medical practitioners.</p>
                </li>
            </ul>
        </section>
    </main>
</template>