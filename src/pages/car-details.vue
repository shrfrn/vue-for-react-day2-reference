<template>
    <section v-if="car" class="car-details">
        
        <h2>{{ car.vendor }}</h2>
        <h3>{{ car.speed }}</h3>

        <RouterLink to="/car">
            <button>Back</button>
        </RouterLink>
    </section>

</template>

<script>
import { carService } from '../services/car.service.js'
export default {
    data() {
        return {
            car: null,
        }
    },
    async created() {
        const carId = this.$route.params._id
        this.car = await carService.get(carId)
    },
}
</script>

<style lang="scss"></style>
