import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(createGalleryImg(galleryItems));

  



const imgContainer = document.querySelector(`.gallery`);
const galleryToDo = createGalleryImg(galleryItems);
imgContainer.insertAdjacentHTML(`beforeend`, galleryToDo);


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
        loading = "lazy"
        />
        </a>
    </div>`;
    })
    .join("");
    
}

imgContainer.addEventListener(`click`, onClickOpenModal);
 let instance = {};
function onClickOpenModal(e) {
    e.preventDefault();
    if (e.target.nodeName !== `IMG`) {
        return
    }
    const largeImg = e.target.dataset.source;
    instance = basicLightbox.create (`
    <img src="${largeImg}" width="800" height="600">
    <a>Close</a>`, {
      onShow: () => {
        window.addEventListener("keydown", offModal);
      },
      onClose: () => {
        window.removeEventListener("keydown", offModal);
      }
    }
  )
  
  instance.show();
   offModal(e);

}

function offModal(e) {
    if (e.code === "Escape"){
    instance.close()
}   
}