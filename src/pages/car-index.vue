<template>
    <section class="car-index">
        <CarFilter @filter="onSetFilterBy"/>
        <CarList @remove="removeCar" v-if="cars" :cars="filteredCars" />
        <RouterLink to="/car/edit">
            <button>Add a Car</button>
        </RouterLink>
    </section>
</template>

<script>
import { carService } from '../services/car.service.js'
import CarFilter from '../cmps/car-filter.vue'
import CarList from '../cmps/car-list.vue'

export default {
    data() {
        return {
            cars: null,
            filterBy: {},
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
        onSetFilterBy(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        filteredCars() {
            const regex = new RegExp(this.filterBy.txt, 'i')
            return this.cars.filter(car => regex.test(car.vendor))
        }
    },
    components: {
        CarList,
        CarFilter,
    },
}
</script>

<style lang="scss"></style>
