//importazioen metdono reactive da vue
import { reactive } from "vue";
//esportazione dell'oggetto creato per la comunicazione globale 
export const store = reactive ({
    apiUrlMovie: 'https://api.themoviedb.org/3/search/movie?api_key=607624ff950bb1869c240ced7f245851&query=',
    apiUrlSeriesTv: 'https://api.themoviedb.org/3/search/tv?api_key=607624ff950bb1869c240ced7f245851&query=',
    searchKey: '',
    movies:[],
    series:[],
    apiPoster:'image.tmdb.org/t/p/',
});