<script>
import { store } from '../store';
export default {
    name:'Movie',
    data() {
        return {
            store,
        }
    },
    props: {
        title: String,
        originalTitle: String,
        originalLanguage: String,
        vote: Number,
        image: String,
      },
};
</script>

<template>
    <li>
        <h3>{{ title }}</h3>
        <h2>{{ originalTitle }}</h2>
        <h3 v-if="originalLanguage === 'it'">
            <img src="../assets/img/ita.png" alt="ita">
        </h3> 
        <h3 v-else-if="originalLanguage === 'en'">
            <img src="../assets/img/en.png" alt="">
        </h3>
        <h3 v-else >{{ originalLanguage }}</h3>
        <h3 v-if="vote >= 1">{{ vote }}</h3>
        <h3 v-else>0</h3>
        <img v-if="image !== null" :src="`${this.store.apiPoster}${image}`" :alt="title">
        <span v-else>immagine non trovata</span>
    </li>
</template>

<style lang="scss" scoped>
</style>