<template>
    <h1>User Msg</h1>
</template>

<script>
import { eventBus } from '../services/eventBus.service.js'
export default {
    created() {
        this.clearListener = eventBus.on('user-msg', () => console.log('Hi'))
    },
    unmounted() {
        this.clearListener()
    }
}
</script>

<style lang="scss"></style>
