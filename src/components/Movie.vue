<script>
//importazione file global state
import { store } from '../store';
export default {
    name:'Movie',
    data() {
        return {
            store,
            maxVote: 5,
        };
    },
    props: {
        title: String,
        originalTitle: String,
        originalLanguage: String,
        vote: Number,
        image: String,
        overview: String,
    },
    computed: {
        emptyStars() {
            return this.maxVote - this.myVote;
        },
        myVote() {
            return Math.ceil(this.vote / 2);
        }
    }
};
</script>

<template>
    <!-- popolati gli elementi con le props -->
    <li class="card flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img class="image" v-if="image !== null" :src="`${this.store.apiPoster}${image}`" :alt="title">
                <img class="image not-found" v-else src="../assets/img/404.png">
            </div>
            <div class="flip-card-back">
                <h3>{{ title }}</h3> 
                <h2>{{ originalTitle }}</h2>
                <div class="vote">
                    <img class="image-vote" v-for="n in myVote" src="../assets/img/stella-piena.svg" alt="star_to_vote">
                    <img class="image-vote" v-for="n in emptyStars" src="../assets/img/stella-vuota.svg" alt="star_to_vote">
                </div>
                <p class="text-overview">{{ overview }}</p>
            </div>
        </div>
    </li>
</template>

<style lang="scss" scoped>

@use '../assets/partials/utilities';
@use '../assets/partials/variables';
// .card {
//     width: calc((100% - 80px) / 5);
//     .image-vote {
//     width: 20px;
//     }
// }
.flip-card {
    background-color: transparent;
    width: calc((100% - 80px) / 5);
    height: 300px;
    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.4s;
        transform-style: preserve-3d;
        .flip-card-front {
            background-color: black;
            color: white;
            height: 100%;
            overflow: hidden;
            .image {
                object-fit: cover;
            }
            .not-found {
                border: 2px inset white;
                height: 100%;
                object-fit: contain;
                padding: 8px;
            }
        }
        .flip-card-back {
            background-color: black;
            color: white;
            transform: rotateY(180deg);
            white-space: wrap;
            overflow: hidden;
            .text-overview {
                text-overflow: ellipsis;
            }
            .image-vote {
                width: 24px;
                padding: 4px;
            }
        }
        .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
        }
    }
}
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}
</style>