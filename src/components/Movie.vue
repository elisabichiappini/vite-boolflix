<script>
//importazione file global state
import { store } from '../store';
export default {
    name:'Movie',
    data() {
        return {
            store,
        };
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
    <!-- popolati gli elementi con le props -->
    <li class="card">
        <h3>{{ title }}</h3>
        <h2>{{ originalTitle }}</h2>
        <!--caso bandiere o prefisso lingua-->
        <h3 v-if="originalLanguage === 'it'">
            <img src="../assets/img/ita.png" alt="ita">
        </h3> 
        <h3 v-else-if="originalLanguage === 'en'">
            <img src="../assets/img/en.png" alt="">
        </h3>
        <h3 v-else >{{ originalLanguage }}</h3>
        <div class="vote">
            <img class="image-vote" v-for="n in vote" src="../assets/img/stella.png" alt="star_to_vote">
        </div>
        <img class="image" v-if="image !== null" :src="`${this.store.apiPoster}${image}`" :alt="title">
        <span v-else>immagine non trovata</span>
    </li>
</template>

<style lang="scss" scoped>
.card {
    width: calc((100% - 80px) / 5);
    .image-vote {
    width: 20px;
}
}

</style>