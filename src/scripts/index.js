import "../styles/index.scss";
import giphy from "./giphy.js";

/**
 * When the user submit and searches.
 *
 * @return {void}
 */
const onSubmit = event => {
  event.preventDefault();

  // Fetch the query from the input field.
  const input = document.querySelector(".search__field");
  const query = input.value;

  giphy.search(query).then(gifs => {
    const gifsData = gifs.data;
    const notFound = document.querySelector(".not-found");
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";

    notFound.classList.remove("not-found--active");

    // If we can't find any items based on the search query we need to tell
    // the user that.
    if (gifsData.length === 0) {
      notFound.classList.add("not-found--active");
      notFound.textContent =
        "We couldn't find any GIFs with the search query " + query + ".";
    }

    // Create new gallery items for all GIFs.
    gifsData.forEach(gif => {
      const a = document.createElement("a");
      a.classList.add("gallery__item");
      const img = new Image();
      img.src = gif.images.downsized.url;

      a.appendChild(img);
      gallery.appendChild(a);
    });
  });
};

// Start the engine.
window.addEventListener("load", () => {
  const form = document.forms.search;
  form.addEventListener("submit", onSubmit);
});
