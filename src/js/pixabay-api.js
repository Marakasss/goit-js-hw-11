import axios from 'axios';
import { createMarkup, errorMessage, infoMessage } from './render-functions';
export function getdata(searchValue) {
    
    const myApiKey = '49580099-ba49dcf3c416d0b66883e5025'; 
    axios.get('https://pixabay.com/api/', {
        params: {
            key: `${myApiKey}`,
            q: `${searchValue}`,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 200,
            
            
        }
    })
        .then(response => {
            if (response.data.hits.length === 0) {
                infoMessage(`Sorry, there are no images matching ${searchValue}. Please try again!`);
                return;
            }

            createMarkup(response.data.hits);
        })

        .catch(error => {

            console.error(error);
            errorMessage('Something went wrong. Please try again later.');
        })
    

}
