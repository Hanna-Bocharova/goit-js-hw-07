import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(createGalleryImg(galleryItems));

// const instance = basicLightbox.create(`
//      <div class="modal">
//      <a class="gallery__link"
//      href="${original}">
//      <img class="gallery__image"
//      src="${preview}" 
//      alt="${description}"
//      data-source="${original}"
//      />
//      </a>
//      </div>
//  `);

const imgContainer = document.querySelector(`.gallery__item`);
const galleryToDo = createGalleryImg(galleryItems);
imgContainer.insertAdjacentHTML(`beforeend`, galleryToDo);
imgContainer.addEventListener(`click`, onImgContainerClick)

function createGalleryImg(galleryItems) {
return galleryItems.map(({preview, original, description}) => {
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
    </div>`;
    })
    .join("");
    
}

function onImgContainerClick(evt) {
    evt.preventDefault();
    const isimgEl = evt.target.classList.contains(`.gallery__image`);
    if(!isimgEl){ 
        return
    }
    

}



