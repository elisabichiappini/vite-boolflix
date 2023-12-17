<script>
import { store } from '../store';
import Movie from './Movie.vue';
export default {
    name: 'ListMoviesComponents',
    components: {
        Movie,
    },
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <ul class="listMovies">
        <Movie 
            v-for="movie in store.movies" 
            :title="movie.title" 
            :originalTitle="movie.original_title" 
            :originalLanguage="movie.original_language" 
            :vote="movie.vote_average">
        </Movie>
    </ul>
    <ul class="listSeries">
        <Movie 
            v-for="serie in store.series" 
            :title="serie.title" 
            :originalTitle="serie.original_title" 
            :originalLanguage="serie.original_language" 
            :vote="serie.vote_average">
        </Movie>
    </ul>
</template>

<style lang="scss" scoped>
</style>