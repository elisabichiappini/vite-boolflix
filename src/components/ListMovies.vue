<script>
import { store } from '../store';
export default {
    name: 'ListMoviesComponents',
    props: {
        title: String,
        originalTitle: String,
        language: String,
        vote: Number,
        name: String,
        originalName: String,
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
        <li v-for="li in store.movies">
            <h2>{{ li.title }}</h2>
            <h2>{{ li.original_title }}</h2>
            <h3 v-if="li.original_language === 'it'">
                <img src="../assets/img/ita.png" alt="ita"></h3> 
            <h3 v-else-if="li.original_language === 'en'">
                <img src="../assets/img/en.png" alt=""></h3>
            <h3 v-else >{{ li.original_language }}</h3>
            <h3>{{ li.vote_average }}</h3>
        </li>
    </ul>
    <ul class="listSeries">
        <li v-for="li in store.series">
            <h2>{{ li.name }}</h2>
            <h2>{{ li.original_name }}</h2>
            <h3 v-if="li.original_language === 'it'">
                <img src="../assets/img/ita.png" alt="ita"></h3> 
            <h3 v-else-if="li.original_language === 'en'">
                <img src="../assets/img/en.png" alt=""></h3>
            <h3 v-else >{{ li.original_language }}</h3>
            <h3>{{ li.vote_average }}</h3>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
</style>