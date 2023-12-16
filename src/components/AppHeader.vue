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
</template>

<style lang="scss" scoped>
</style>