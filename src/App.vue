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
        //funzione per la chiamata alle due api, sia movies, sia seriestv.
        callApiTmdb() {
            const params = {query: this.store.searchKey};

            const movie = axios.get(this.store.apiUrlMovie, {params})
                .then((data) => {this.store.movies = data.data.results})
            const serieTv = axios.get(this.store.apiUrlSeriesTv, {params})
                .then((data) => {this.store.series = data.data.results})
            },
        },
    //nel ciclo di vita created funzione di richiamo alla funzione di chiamata alle api, solo nel caso in cui è emesso emit dal figlio
    created() {
        this.callApiTmdb()
    }}
</script>

<template>
    <!--header-->
    <AppHeader @apicall="callApiTmdb"></AppHeader>
    <!--/header-->
    <!--main-->
    <AppMain></AppMain>
    <!--/main-->
    <!--footer-->
    <AppFooter></AppFooter>
    <!--/footer-->
</template>

<style lang="scss">
</style>