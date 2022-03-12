<template>
    <div class="flex flex-row justify-between">
        <div class="flex gap-4">
            <button class="md:hidden rounded-full bg-black h-8 w-8 text-emerald-300" @click="toggleSidebar">
                <svg class="h-4 w-4 fill-current inline-block mb-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z"/></svg>
            </button>
            <button class="rounded-full bg-black h-8 w-8 text-emerald-300">
                <svg class="h-4 w-4 fill-current inline-block mr-0.5 mb-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
            </button>
            <button class="rounded-full bg-black h-8 w-8 text-emerald-300">
                <svg class="h-4 w-4 fill-current inline-block ml-0.5 mb-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
            </button>
        </div>
        <div>
            <button class="flex rounded-full items-center h-8 bg-black pl-0.5 pr-2 gap-2 hover:bg-zinc-900">
                <div class="rounded-full bg-zinc-800 h-7 w-7"></div>
                <div class="text-sm font-semibold">filipe.fjn</div>
                <svg class="h-3 w-3 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 21l-12-18h24z"/></svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        toggleSidebar() {
            this.$emit('toggle-sidebar')
        }
    }
}
</script>
