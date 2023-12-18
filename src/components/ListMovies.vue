<script>
//importazione file global state e componenti
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
    
    <!--list Movies e componente movie che cicla nell'array movies dello global state che si è generato dopo la ricerca-->
    <ul class="listMovies d-flex flex-wrap gap20">
        <Movie 
            v-for="movie in store.movies" 
            :title="movie.title" 
            :originalTitle="movie.original_title" 
            :originalLanguage="movie.original_language" 
            :vote="Math.ceil(movie.vote_average / 2)"
            :image="movie.poster_path"
            :overview="movie.overview">
        </Movie>
    </ul>
    <!--/list Movies e componente movie che cicla nell'array movies dello global state che si è generato dopo la ricerca-->
    <!--list Series e componente movie che cicla nell'array movies dello global state che si è generato dopo la ricerca-->
    <ul class="listSeries d-flex flex-wrap gap20">
        <Movie 
            v-for="serie in store.series" 
            :title="serie.name" 
            :originalTitle="serie.original_name" 
            :originalLanguage="serie.original_language" 
            :vote="Math.ceil(serie.vote_average / 2 )"
            :image="serie.poster_path"
            :overview="serie.overview">
        </Movie>
    </ul>
    <!--/list Series e componente movie che cicla nell'array movies dello global state che si è generato dopo la ricerca-->

</template>

<style lang="scss" scoped>
.listMovies::before {
    content:'Movies';
    width: 100%;
    padding: 16px 0 0;
    font-weight: 900;
    font-size: 24px;
}
.listSeries::before {
    content:'Series TV';
    width: 100%;
    padding: 16px 0 0;
    font-weight: 900;
    font-size: 24px;
}
</style>