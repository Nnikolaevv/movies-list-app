import axios from "axios";

const baseURL = "https://yts.mx/api/v2";
// const API_KEY = 'API_KEY'   // FOR LOGIN


const instanceAxios = axios.create({
    baseURL,
    // FOR LOGIN
    // withCredentials: true,
    // headers: {
    //     "API-KEY": API_KEY
    // }
})

export const moviesApi = {
    getMovies() {
        return (
            instanceAxios.get('/list_movies.json')
                .then(response => response.data)
        )
    },

}

