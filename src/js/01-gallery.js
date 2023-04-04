import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryEL = document.querySelector(".gallery");

// const item = galleryItems[0].original;

// console.log(item);

// galleryItems.forEach((item) => {
//   let srcValue = item.preview;
//   let altValue = item.description;

//   const li = document.createElement("li");
//   galleryEL.append(li);
//   const img = document.createElement("img");
//   li.append(img);
//   img.setAttribute("src", srcValue);
//   img.setAttribute("alt", altValue);
//   img.classList.add("gallery__image");
//   //   img.setAttribute("width", "100px");
// });

galleryItems.forEach((item) => {
  galleryEL.insertAdjacentHTML(
    "beforeend",
    `
    <div class="gallery__item">
     <a class="gallery__link" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description} 
       data-source="${item.original}"/>
     </a>
    </div>`
  );
});

galleryEL.addEventListener("click", (event) => {
  event.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();
});
