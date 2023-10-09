// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

function galleryNew(image) {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = image.original;

  const img = document.createElement('img');
  img.classList.add('gallery__image');
  img.src = image.preview;
  img.alt = image.description;

  link.appendChild(img);
  galleryItem.appendChild(link);

  return galleryItem;
}

const gallery = document.querySelector('.gallery');
const html = galleryItems.map(galleryNew);
gallery.append(...html);

const options = {
  captions: true,
  captionsDelay: 250,
  captionSelector: 'img',
  captionType: 'attr',
  captionPosition: 'bottom',
  captionsData: 'alt',
};
const box = new SimpleLightbox('.gallery a', options);
