import axios from 'axios';
import CONFIG from '../constants/config';

const tmdbAPI = {
    
    discoverMovies: function() {
        return axios.get(`${CONFIG.API_LINK}/discover/movie?api_key=${CONFIG.API_KEY}`)
            .then(response => response.data)
    },

    getMovie: function(id) {
        return axios.get(`${CONFIG.API_LINK}/movie/${id}?api_key=${CONFIG.API_KEY}`)
            .then(response => response.data)
    },

    getTrailer: function(id) {
        return axios.get(`${CONFIG.API_LINK}/movie/${id}/videos?api_key=${CONFIG.API_KEY}`)
            .then(response => response.data)
    }

}

export default tmdbAPI;