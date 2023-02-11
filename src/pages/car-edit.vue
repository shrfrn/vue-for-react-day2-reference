<template>
    <section v-if="car" class="car-edit">
        <input type="text" v-model="car.vendor" autofocus/>
        <input type="number" v-model.number="car.speed" />

        <button @click="save">save</button>
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
        if (carId) {
            this.car = await carService.get(carId)
        } else {
            this.car = carService.getEmptyCar()
        }
    },
    methods: {
        save() {
            carService.save(this.car)
            this.$router.push('/car')
        },
    },
}
</script>

<style lang="scss"></style>
