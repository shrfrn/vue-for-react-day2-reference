<template>
    <h1>Cars</h1>
    <CarList v-if="cars" :cars="cars"/>
</template>

<script>
import { carService } from '../services/car.service.js'
import CarList from '../cmps/car-list.vue'

export default {
    data() {
        return {
            cars: null,
        }
    },
    async created() {
        this.cars = await carService.query()
    },
    components: {
        CarList,
    }
}
</script>

<style lang="scss"></style>
