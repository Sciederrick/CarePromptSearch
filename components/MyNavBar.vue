<script setup lang="ts">

</script>

<template>
    <nav class="flex justify-between items-center my-4 serif">
        <NuxtLink to="/">
            <img src="" alt="company logo" />
        </NuxtLink>
        <MyMainSearchInput class="hidden md:block"/>
        <button class="lg:hidden">
            <Icon name="ri:menu-line" size="48px" color="#313131" />
        </button>
        <ul class="hidden lg:flex lg:justify-between lg:justify-self-center">
            <li class="lg:pr-4 lg:block lg:border-r lg:border-r-1 lg:border-[#898989]">
                <NuxtLink class="btn btn-border-underline"
                    to="/">Home</NuxtLink>
            </li>
            <li class="lg:px-4 lg:block lg:border-r lg:border-r-1 lg:border-[#898989]">
                <NuxtLink class="btn btn-border-underline"
                    to="/search">Search</NuxtLink>
            </li>            
            <li class="lg:pl-4">
                <NuxtLink class="btn btn-border-underline"
                    to="/about">About</NuxtLink>
            </li>
        </ul>
    </nav>
</template>