<script>
import ListMovies from './ListMovies.vue';

export default {
    name: 'Main',
    components: {
        ListMovies,
    },
};
</script>

<template>
    <main class="container">
        <ListMovies></ListMovies>
    </main>
</template>

<style lang="scss" scoped>
.container {
    max-width: 1180px;
    margin: 0 auto;
    background-color: antiquewhite;
}

</style>