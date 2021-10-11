import axios from "axios";

const baseURL = "https://yts.mx/api/v2";



const instanceAxios = axios.create({
    baseURL,
})

export const moviesApi = {
    getMovies(limit, page) {
        return (
            instanceAxios.get(`/list_movies.json?limit=${limit}&page=${page}`)
                .then(response => response.data)
        )
    },

}

