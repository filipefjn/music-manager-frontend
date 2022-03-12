<template>
    <div class="relative h-20 rounded overflow-hidden">
        <div class="absolute inset-0 bg-white opacity-10"></div>
        <div class="absolute inset-0 flex items-center">
            <div class="flex-shrink-0 h-20 w-20 bg-zinc-900"></div>
            <div class="flex-grow ml-3 mr-3 text-lg font-semibold truncate">{{ title }}</div>
        </div>
        <div class="flex absolute inset-0 flex-row justify-end items-center mr-3 z-5 cursor-pointer">
            <button class="flex justify-center items-center rounded-full bg-emerald-500 text-white h-10 w-10">
                <svg class="ml-1 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 12l-18 12v-24z"/></svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>
