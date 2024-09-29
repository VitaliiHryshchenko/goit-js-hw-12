import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionsPosition: 'bottom',
});

export const refs = {
  searchForm: document.querySelector('.js-search-form'),
  gallery: document.querySelector('.js-gallery'),
  loadMoreBtn: document.querySelector('.js-load-more-button'),
  loader: document.querySelector('.js-loader'),
};
export function showLoader() {
  refs.loader.classList.remove('is-hidden');
}

export function hideLoader() {
  refs.loader.classList.add('is-hidden');
}
