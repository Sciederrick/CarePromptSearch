<script setup lang="ts">
import { ref } from 'vue'; // this made the difference
const clickCount = ref(0);
const clickHandler = () => {
    clickCount.value = clickCount.value + 1
}
</script>

<template>
    <div>
        <h1>Hello Jest!</h1>
        <p>{{ clickCount }} clicks</p>
        <button @click="clickHandler">Click me</button>
    </div>
</template>