<script>
export default {
    name:'Movie',
    props: {
        title: String,
        originalTitle: String,
        originalLanguage: String,
        vote: Number,
      },
}
</script>

<template>
    <li>
        <h2>{{ title }}</h2>
            <h2>{{ originalTitle }}</h2>
            <h3 v-if="originalLanguage === 'it'">
                <img src="../assets/img/ita.png" alt="ita"></h3> 
            <h3 v-else-if="originalLanguage === 'en'">
                <img src="../assets/img/en.png" alt=""></h3>
            <h3 v-else >{{ originalLanguage }}</h3>
            <h3>{{ vote }}</h3>
    </li>
</template>

<style lang="scss" scoped>
</style>