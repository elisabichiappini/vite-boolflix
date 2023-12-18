<script>
//importazione componenti
import ListMovies from './ListMovies.vue';
export default {
    name: 'Main',
    components: {
        ListMovies,
    },
};
</script>

<template>
    <!--main-->
    <main class="container">
        <!--contenitore listMovies-->
        <ListMovies></ListMovies>
        <!--/contenitore listMovies-->
    </main>
    <!--/main-->
</template>

<style lang="scss" scoped>
.container {
    max-width: 1180px;
    margin: 0 auto;
}
</style>