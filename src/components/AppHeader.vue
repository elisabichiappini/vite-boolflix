<script>
import { store } from '../store';
export default {
    name: 'Header',
    emits: ['pippo'],
    data() {
        return {
            store,
        }
    },
};
</script>

<template>
    <header>
        <div class="container d-flex align-center gap20 justify-space-between">
            <div class="box-logo">
                <img class="image" src="/public/boolflix_w.png" alt="logo">
            </div>
            <form @submit.prevent="$emit('pippo')">
                <div class="d-flex">
                    <label for="search"></label>
                    <input 
                        v-model="store.searchKey"
                        type="text" 
                        id="search" 
                        name="searchSection"
                        placeholder="Search your movie..." />
                    <button
                        type="submit" 
                        name="searchSection">
                        Search
                    </button>
                </div>
            </form>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.container {
    height: 100px;
    background-color: rgb(9, 9, 9);
    padding: 0 20px;
    .box-logo {
        width: 140px;
    }
}

</style>