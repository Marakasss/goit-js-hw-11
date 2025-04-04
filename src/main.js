
import { getImagesByQuery } from './js/pixabay-api';
import { addLoading, changeIconColor, clearGallery, clickOnlike, createGallery,  infoMessage, removeLoading } from './js/render-functions';


const searchBar = document.querySelector('.form');
const icon = document.querySelector('.icon-img');

function handleSubmit() {
    searchBar.addEventListener('submit', event => {
        event.preventDefault();

        let query = event.target['search-text'].value.trim();
        if (!query) {
            infoMessage('Enter some value');
            return;
        }
 
        addLoading()

        getImagesByQuery(query)
            
            .then(images => {
                
                if (images.length === 0) {
                    infoMessage(`Sorry, there are no images matching ${query}. Please try again!`);
                    clearGallery();
                    removeLoading();
                    return;
                }
                
                createGallery(images)
            })
            
    })

}
    
changeIconColor(icon)
handleSubmit()
clickOnlike()  
    
