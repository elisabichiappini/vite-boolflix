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
    <ul v-if="store.movies >= 1" class="listMovies">
        <Movie 
            v-for="movie in store.movies" 
            :title="movie.title" 
            :originalTitle="movie.original_title" 
            :originalLanguage="movie.original_language" 
            :vote="movie.vote_average"
            :image="movie.poster_path">
        </Movie>
    </ul>
    <ul v-else class="listSeries">
        <Movie 
            v-for="serie in store.series" 
            :title="serie.name" 
            :originalTitle="serie.original_name" 
            :originalLanguage="serie.original_language" 
            :vote="serie.vote_average"
            :image="serie.poster_path">
        </Movie>
    </ul>
</template>

<style lang="scss" scoped>
</style>