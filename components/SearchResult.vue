<script setup lang="ts">

</script>

<script setup lang="ts">
    const { useEllipsize } = useMyUtils();
    interface IResult {
        title: string,
        desc: string,
        date: string
    };
    const result = defineProps<IResult>();
</script>

<template>
    <div class="flex border-b border-[#D9D9D9] py-6 gap-x-2">
        <div class="flex flex-col justify-center items-center">
            <input type="checkbox" id="checkbox" class="h-[20px] w-[20px]" />
            <br/>
            <button class="btn">
                <Icon name="material-symbols:share-outline" size="24px" color="#838383" />
            </button>
        </div>
        <div class="flex flex-col gap-y-2">
            <h3 class="text-xl md:text-2xl">{{ result.title }}</h3>
            <p>{{ useEllipsize(result.desc, 125) }}</p>
            <p class="text-xs text-[#838383]">{{ result.date }}</p>
        </div>
    </div>
</template>