<template>
    <section>
        <ul class="car-list">
            <li  class="car-preview" v-for="car in cars" :key="car._id">
                <CarPreview :car="car"/>
                <button @click="onRemoveCar(car._id)">x</button>
            </li>
        </ul>
    </section>
</template>

<script>
import CarPreview from '@/cmps/car-preview.vue'
export default {
    props: {
        cars: {
            type: Array,
            required: true,
        }
    },
    methods: {
        onRemoveCar(carId) {
            this.$emit('remove', carId)
        }
    },
    components: {
        CarPreview,
    }
}
</script>

<style lang="scss"></style>
