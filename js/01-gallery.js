import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const itemsArray = [];

galleryItems.forEach((item) => {
  let listItem = document.createElement("li");
  itemsArray.push(listItem);
  listItem.insertAdjacentHTML(
    "beforeend",
    `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
  );
});

gallery.append(...itemsArray);
gallery.addEventListener("click", imageClick);

function imageClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" alt="${e.target.description}" width="800" height="600">
`);
  instance.show();

  if (instance.show) {
    gallery.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        instance.close();
      }
    });
  } else {
    gallery.removeEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        instance.close();
      }
    });
  }
}
