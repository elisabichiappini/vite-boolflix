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
            <div class="header-left align-center d-flex gap20">
                <!--logo content-->
                <div class="box-logo">
                    <img class="image" src="/public/boolflix.png" alt="logo">
                </div>
                <ul class="nav-bar d-flex gap20 align-center">
                    <li class="link-nav-bar"><a href="#" target="_blank">Menu</a></li>
                    <li class="link-nav-bar"><a href="#" target="_blank">Movies</a></li>
                    <li class="link-nav-bar"><a href="#" target="_blank">Series Tv</a></li>
                    <li class="link-nav-bar"><a href="#" target="_blank">About</a></li>
                </ul>
                <!--/logo content-->
            </div>
            <!--form content-->
            <form @click.prevent="$emit('apicall')">
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
@use '../assets/partials/variables';
.container {
    height: 100px;
    background-color: rgb(27, 26, 26) ;
    padding: 0 40px;
    .box-logo {
        width: 90px;
    }
    .link-nav-bar {
        line-height: 80px;
        border-bottom: 2px inset transparent;
        text-align: center;
        justify-content: center;

        &:hover {
            border-bottom: 2px inset red;      
            color: red;
        }
    }
}
</style>