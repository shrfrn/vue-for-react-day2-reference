<template>
    <section>
        <ul class="car-list">
            <li  class="car-preview" v-for="car in cars" :key="car._id">
                <CarPreview :car="car"/>
                <section class="actions">
                    <RouterLink :to="`/car/${car._id}`">
                        <button>Details</button>
                    </RouterLink>
                    <RouterLink :to="`/car/edit/${car._id}`">
                        <button>Edit</button>
                    </RouterLink>
                    <button @click="onRemoveCar(car._id)">x</button>
                </section>
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
