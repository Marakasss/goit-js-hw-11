import axios from 'axios';
import { errorMessage } from './render-functions';

export async function getImagesByQuery(query) {
    
    const myApiKey = '49580099-ba49dcf3c416d0b66883e5025'; 
    return axios.get('https://pixabay.com/api/', {
        params: {
            key: myApiKey,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 100,
        }
    })
        .then(response => { return response.data.hits })

        .catch(error => {
                console.error(error);
                removeLoading();
                errorMessage('Something went wrong. Please try again later.');
                return [];
            })
               
}





 