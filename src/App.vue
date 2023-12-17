<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import { store } from './store';
import axios from 'axios';

export default {
    name: 'AppBoolflix',
    components: {
        AppHeader,
        AppMain,
        AppFooter,
    },
    data() {
        return {
            store,
        };
    },
    methods: {
        callApiMovies() {
            axios
            .get(this.store.apiUrlMovie + this.store.apiUrlSeriesTv,
            {
                params: {
                    query: this.store.searchKey,
                }}
            )
            .then((data) => {
            this.store.movies = data.data.results;
            this.store.series = data.data.results;
            })
        },
    },
    created() {
        this.callApiMovies();
    }
};
</script>

<template>
    <AppHeader @pippo="callApiMovies"></AppHeader>
    <AppMain></AppMain>
    <AppFooter></AppFooter>
</template>

<style lang="scss" scoped>
</style>