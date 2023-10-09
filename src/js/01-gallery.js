// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

console.log(galleryItems);

const body = document.querySelector('body');
const div = document.createElement('div');
div.classList.add('gallery__item');

body.append(div);
console.log(body);
const galleryUl = document.querySelector('.gallery');
div.append(galleryUl);

galleryItems.forEach(i => {
  const list = document.createElement('li');
  galleryUl.append(list);
  const link = document.createElement('a');
  link.href = i.original;
  link.classList.add('gallery__link');

  list.append(link);
  const img = document.createElement('img');
  img.classList.add('gallery__image');
  img.src = i.preview;
  img.alt = i.description;
  img.setAttribute('data-source', i.original);
  link.append(img);

  img.addEventListener('click', event => {
    event.preventDefault();
    const selectedImage = event.target.dataset.source;
    console.log(selectedImage);
    const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${selectedImage}"width="900" height="600">
    </div>
`);

    instance.show();
  });
});
