<script setup lang="ts">
    import { useAlertStore } from '~/store/alert';
    const { alert } = useAlertStore();

</script>

<template>
    <header class="px-2 lg:px-16 2xl:container 2xl:mx-auto">
        <MyAlert :type="alert.type" :msg="alert.msg" />
        <MyNavBar />
    </header>
    <div class="text-lg">
        <slot/>
    </div>
</template>