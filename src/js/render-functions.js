export function createGalleryMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
              width = "360"
              height = "200"
            />
            <ul class="image-info">
              <li class="item-info">Likes <span>${likes}</span></li>
              <li class="item-info">Views <span>${views}</span></li>
              <li class="item-info">Comments <span>${comments}</span></li>
              <li class="item-info">Downloads <span>${downloads}</span></li>
            </ul>
          </a>
        </li>
    `
    )
    .join('');
}
