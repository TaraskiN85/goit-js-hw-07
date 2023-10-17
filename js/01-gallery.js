import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryUl = document.querySelector(".gallery");

const createMarkup = () => {
  const markup = galleryItems
    .map(({ preview, description, original }) => {
      return `<li class='gallery__item'><a class='gallery__link' href=${original}><img class='gallery__image' src=${preview} alt=${description}></a></li>`;
    })
    .join("");
  galleryUl.insertAdjacentHTML("afterbegin", markup);
};

const openImage = (event) => {
  event.preventDefault();
  if (event.target.classList[0] === "gallery-image") {
    console.log("Neeeh!");
    return;
  }
  const instance = basicLightbox.create(`
    <img src=${event.target.parentNode.href} width="800" height="600">
  `);

  instance.show();

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
};

createMarkup();
galleryUl.addEventListener("click", openImage);
