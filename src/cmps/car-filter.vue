<template>
    <section class="car-filter">
        <h1>Search</h1>
        <input @input="filter" v-model="filterBy.txt" type="text" />
    </section>
</template>

<script>
export default {
    data() {
        return {
            filterBy: {
                txt: '',
            },
        }
    },
    methods: {
        filter() {
            this.$emit('filter', this.filterBy)
        }
    }
}
</script>

<style lang="scss"></style>
