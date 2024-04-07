const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43235331-b9827a4a5560b952e70d62539';

export function searchImages(image = '') {
  const params = new URLSearchParams({
    key: API_KEY,
    q: image,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
