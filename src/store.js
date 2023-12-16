//importazioen metdono reactive da vue
import { reactive } from "vue";
//esportazione dell'oggetto creato per la comunicazione globale 
export const store = reactive ({
    //api ricerca movies
    apiUrlMovie: 'https://api.themoviedb.org/3/search/movie?api_key=607624ff950bb1869c240ced7f245851&lang=it_IT&query=',
    //dati inseriti nella search
    searchKey: '',
    //api ricerca tv
    apiUrlSeriesTv: 'https://api.themoviedb.org/3/search/tv/api_key=607624ff950bb1869c240ced7f245851&lang=it_IT&query=',
    //array di movies restituiti dopo la ricerca
    movies:[],
    //array di seriesTv restituiti dopo la ricerca
    series:[],
    //api da implementare per la restituzione delle immagini di movies e seriesTv
    apiPoster:'image.tmdb.org/t/p/',
    loanding: true,
});