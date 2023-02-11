<template>
    <Transition>
        <section v-if="msg" class="user-msg" :class="msg.type">
            <p>User Msg</p>
        </section>
    </Transition>
</template>

<script>
import { eventBus } from '../services/eventBus.service.js'
export default {
    data() {
        return {
            msg: null,
        }
    },
    created() {
        this.clearListener = eventBus.on('user-msg', this.showMsg)
    },
    unmounted() {
        this.clearListener()
    },
    methods: {
        showMsg(msg) {
            this.msg = msg
            setTimeout(() => (this.msg = null), this.msg.timeout || 1500)
        },
    },
}
</script>

<style lang="scss"></style>
