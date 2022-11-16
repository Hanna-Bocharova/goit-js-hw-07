import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(createGalleryImg(items));

function createGalleryImg(items) {
const gallery = galleryItems.map(galleryItem => {
        return `
    <div class="gallery__item">
        <a class="gallery__link"
        href="${original}">
        <img class="gallery__image"
        src="${preview}" 
        alt="${description}"
        data-source="${original}"
        />
        </a>
    </div>`
    });
    console.log(gallery);
}





