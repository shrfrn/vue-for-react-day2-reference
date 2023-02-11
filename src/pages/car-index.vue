<template>
    <section class="car-index">
        <CarList @remove="removeCar" v-if="cars" :cars="cars" />
        <RouterLink to="/car/edit">
            <button>Add a Car</button>
        </RouterLink>
    </section>
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
    methods: {
        async removeCar(carId) {
            await carService.remove(carId)
            this.cars = this.cars.filter(car => car._id !== carId)
        },
    },
    components: {
        CarList,
    },
}
</script>

<style lang="scss"></style>
