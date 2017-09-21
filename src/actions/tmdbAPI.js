import axios from 'axios';
import CONFIG from '../constants/config';

const tmdbAPI = {

    discoverMovies: function() {
        return axios.get('https://api.themoviedb.org/3/discover/movie?api_key=9ae9d0ee31e09f4ed246c5726056b7cf')
            .then(response => response.data)
    }

}

export default tmdbAPI;