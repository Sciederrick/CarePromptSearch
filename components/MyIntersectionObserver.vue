<script setup>
const emit = defineEmits(['intersecting']);
let observer;
let sections;
let observedTargets = [];
let targetId;
onMounted(() => {
    const options = {
        root: null,
        rootMargin: "-15px",
        threshold: 0,
    }
    observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            targetId = entry.target.getAttribute("id");
            if (entry && entry.isIntersecting) {
                observedTargets.push(targetId);
                console.log(`${targetId} visible`);
                emit('intersecting', { element: entry.target, id: targetId, status: true });
            } else {
                console.log("not intersecting", targetId)
                emit('intersecting', { element: entry.target, id: targetId, status: false });
                // if (observedTargets.length > 0 && observedTargets.find(target => target == entry.target.getAttribute("id")) != undefined) {
                //     observer.unobserve(entry.target)
                // }
                    
            }
        })           
    }, options)

    sections = document.querySelectorAll("[data-observed='true']")
    sections.forEach(el => observer.observe(el))
})

onUnmounted(() => {
    sections.forEach(el => observer.unobserve(el))
    observer.disconnect()
    observedTargets.length = 0
})
</script>
<template></template>