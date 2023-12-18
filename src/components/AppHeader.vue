<script>
//importazione file global state
import { store } from '../store';
export default {
    name: 'Header',
    emits: ['pippo'],
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <!--header-->
    <header>
        <!--container-->
        <div class="container d-flex align-center gap20 justify-space-between">
            <!--logo content-->
            <div class="box-logo">
                <img class="image" src="/public/boolflix_w.png" alt="logo">
            </div>
            <!--/logo content-->
            <!--form content-->
            <form @submit.prevent="$emit('apicall')">
                <div class="d-flex">
                    <!--elemento input-->
                    <label for="search"></label>
                    <input 
                        v-model="store.searchKey"
                        type="text" 
                        id="search" 
                        name="searchSection"
                        placeholder="Search your movie..." />
                        <!--elemento button-->
                    <button
                        type="submit" 
                        name="searchSection">
                        Search
                    </button>
                    <!--/elemento button-->
                </div>
            </form>
            <!--/form content-->
        </div>
        <!--/container-->
    </header>
    <!--/header-->
</template>

<style lang="scss" scoped>
.container {
    height: 100px;
    background-color: rgb(0, 0, 0);
    padding: 0 40px;
    .box-logo {
        width: 140px;
    }
}
</style>