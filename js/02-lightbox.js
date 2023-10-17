import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryUl = document.querySelector("ul");

const createMarkup = () => {
  const markup = galleryItems
    .map(({ description, preview, original }) => {
      return `<li class="gallery__item">
              <a class="gallery__link" href=${original}>
                <img class="gallery__image"
                  src=${preview} 
                  alt=${description} 
                  title=${description}
                />
              </a>
            </li>`;
    })
    .join("");
  galleryUl.insertAdjacentHTML("beforeend", markup);
};

const openImage = (event) => {
  event.preventDefault();

  const lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    navText: ["←", "→"],
  });
};

createMarkup();
galleryUl.addEventListener("click", openImage);
