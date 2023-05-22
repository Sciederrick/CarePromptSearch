<script setup>
    defineProps(['error']);
    const handleClearError = () => clearError({ redirect: '/' });
</script>

<template>
    <p> {{ error.statusCode }} </p>
    <p> {{ error.message }} </p>
    <button @click="handleClearError()">Back home</button>
</template>

