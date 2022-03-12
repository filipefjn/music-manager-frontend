<template>
    <div class="flex flex-col items-stretch text-white h-screen w-screen overflow-hidden bg-zinc-800">
        <div class="flex-grow flex flex-row items-stretch">
            <div 
                class="inset-0 bg-black opacity-20 cursor-pointer z-20"
                :class="showSidebar ? 'absolute md:hidden' : 'hidden'"
                @click="toggleSidebar"
            ></div>
            <div
                class="absolute left-0 h-screen md:static md:h-auto bg-black w-64 z-30 p-4 translate md:transform-none transition-transform duration-200 ease-out"
                :class="showSidebar ? '' : '-translate-x-64'"
                >
                Sidebar
            </div>
            <div class="flex-grow">
                <div class="pt-4 pb-2 px-6">
                    <nav-bar @toggle-sidebar="toggleSidebar"></nav-bar>
                </div>
                <slot name="content"></slot>
            </div>
        </div>
        <div class="flex-shrink-0 h-24 bg-black bg-zinc-900"></div>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default {
    components: {
        NavBar
    },
    data () {
        return {
            showSidebar: false
        };
    },
    methods: {
        toggleSidebar() {
            this.showSidebar = !this.showSidebar;
        }
    }
}
</script>
