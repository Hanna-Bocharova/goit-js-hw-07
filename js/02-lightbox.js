import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryImgs = document.querySelector(".gallery");
const makeGallary = createGalleryImg(galleryItems);
galleryImgs.insertAdjacentHTML(`beforeend`, makeGallary)

function createGalleryImg(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
            return `
        <li>
        <a class="gallery__item" 
        href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="Image ${description}" 
        loading = "lazy"/>
        </a>

        </li>`;
        })
        .join("");
        
    }
window.addEventListener(`click`, onClickImg)
    function onClickImg (event) {
        event.preventDefault();
        
      };
      const lightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captionsData: `alt`,
    });