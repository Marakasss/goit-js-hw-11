import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getdata } from "./pixabay-api";



// !-----------FUNCTION ADDING CARDS WITH IMAGES TO GALLERY-------------
export function createMarkup(data) {
    const gallery = document.querySelector('.gallery');
    
    //ADD PHOTOS TO GALLARY
    const galleryItemsList = data
        .map(data => {
            const { likes,
                    views,
                    downloads,
                    comments,
                    tags,
                    largeImageURL,
                    webformatURL   
                } = data;
            
            return `<li class="img-card">
                        <a class="gallery-link" href= ${largeImageURL}>
                            <img
                            class="gallery-image"
                            src= ${webformatURL}
                            alt= ${tags}
                            />
                        </a>
                        <ul class="img-info">
                            <li class="info">
                                <svg class="icon-info" width="18" height="18">
                                    <use href="./public/sprite.svg#icon-like"></use>
                                </svg>
                                <p>${likes}</p>
                            </li>
                            <li class="info">
                                <svg class="icon-info" width="18" height="18">
                                    <use href="./public/sprite.svg#icon-eye"></use>
                                </svg>
                                <p>${views}</p>
                            </li>
                            <li class="info">
                                <svg class="icon-info" width="18" height="18">
                                    <use href="./public/sprite.svg#icon-dialog"></use>
                                </svg>
                                <p>${comments}</p>
                            </li>
                            <li class="info">
                                <svg class="icon-info" width="18" height="18">
                                    <use href="./public/sprite.svg#icon-gallery-download"></use>
                                </svg>
                                <p>${downloads}</p>
                            </li>
                        </ul>
                    </li>`
        })
        .join('');
    
    gallery.innerHTML = '';
    gallery.insertAdjacentHTML('afterbegin', galleryItemsList);
    
    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });

    lightbox.refresh();
}


export function handleSearch() {
    const searchBar = document.querySelector('.form');
    const icon = document.querySelector('.icon-img');

    searchBar.addEventListener('input', event => {
            let searchValue = event.target.value.trim();
        if (searchValue) {
            icon.style.fill = '#1875FF';
        }
        else {
            icon.style.fill = '';
        }
        })
    
    searchBar.addEventListener('submit', event => {
        event.preventDefault();
        let searchValue = event.target['search-text'].value.trim();
        if (!searchValue) {
            infoMessage('Enter some value');
            return;
        }

        getdata(searchValue);
    })

}



export function errorMessage(message) {
 iziToast.error({
   message: message,
   position: window.innerWidth <= 768 ? 'bottomCenter' : 'topCenter',
   transitionIn: 'fadeInDown',
   backgroundColor: 'rgb(231, 19, 36)',
   messageColor: 'white',
   iconColor: 'white',
   messageSize: '16px',
   class: 'toast',
});
}

export function infoMessage(message) {
 iziToast.info({
   message: message,
   position: window.innerWidth <= 768 ? 'bottomLeft' : 'topLeft',
   transitionIn: 'fadeInDown',
   messageSize: '16px',
});
}