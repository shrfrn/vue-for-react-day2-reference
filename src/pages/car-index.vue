<template>
    <h1>Cars</h1>
    <pre>{{cars}}</pre>
</template>

<script>
import { carService } from '../services/car.service.js'
export default {
    data() {
        return {
            cars: null,
        }
    },
    async created() {
        this.cars = await carService.query()
    }
}
</script>

<style lang="scss"></style>
