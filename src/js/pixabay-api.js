import axios from 'axios';

export const searchParams = {
  key: '46019224-0ece95bdc3a0496b8437567d7',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 40,
  page: 1,
  per_page: 15,
  maxPage: 0,
};

export async function getPictures() {
  const response = await axios.get('https://pixabay.com/api/', {
    params: searchParams,
  });
  return response.data;
}
