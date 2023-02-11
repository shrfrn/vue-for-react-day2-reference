<template>
    <AppHeader />
    <main>
        <RouterView />
    </main>
    <AppFooter />
</template>

<script>
import AppHeader from './cmps/app-header.vue'
import AppFooter from './cmps/app-footer.vue'

export default {
    components: {
        AppHeader,
        AppFooter,
    }
}
</script>

<style>
main {
    min-height: calc(90vh - 2rem);
}
</style>
