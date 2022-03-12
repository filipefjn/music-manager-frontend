<template>
    <base-layout>
        <template v-slot:content>
            <div class="flex flex-col py-4 px-6 gap-y-6">
                <div class="text-2xl font-semibold">Good Afternoon</div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    <afternoon-option title="Hello"></afternoon-option>
                    <afternoon-option title="World"></afternoon-option>
                    <afternoon-option title="World"></afternoon-option>
                    <afternoon-option title="World"></afternoon-option>
                    <afternoon-option title="World"></afternoon-option>
                    <afternoon-option title="World"></afternoon-option>
                </div>
            </div>
        </template>
    </base-layout>
</template>

<script>
import BaseLayout from '../layouts/BaseLayout.vue';
import AfternoonOption from '../components/AfternoonOption.vue';

export default {
    components: {
        BaseLayout: BaseLayout,
        AfternoonOption: AfternoonOption,
    }
}
</script>
