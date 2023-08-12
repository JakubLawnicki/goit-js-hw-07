import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  let listItem = document.createElement("li");
  gallery.append(listItem);
  listItem.insertAdjacentHTML(
    "beforeend",
    `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a>`
  );
});

gallery.addEventListener("click", clickImage);

function clickImage(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const lightbox = new SimpleLightbox(".gallery li a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}
