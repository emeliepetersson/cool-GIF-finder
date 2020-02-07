(function () {
  'use strict';

  const search = input => {
    fetch("https://api.giphy.com/v1/gifs/search?api_key=" + 'PMHxZ6r4IpUrkVI3VDc4CKaflZG5oxCy' + "&q=" + input).then(response => response.json()).then(gifs => {
      console.log(gifs.data);
      const gifsData = gifs.data;

      if (gifsData.length === 0) {
        const notFound = document.querySelector(".not-found");
        notFound.classList.add("not-found--active");
        notFound.textContent = "We couldn't find any GIFs with the search query " + input + ".";
      } else {
        gifsData.forEach(gif => {
          const gallery = document.querySelector(".gallery");
          const a = document.createElement("a");
          a.classList.add("gallery__item");
          const img = new Image();
          img.src = gif.images.downsized.url;
          a.appendChild(img);
          gallery.appendChild(a);
        });
      }
    });
  };

  const button = document.querySelector(".search__button");
  const input = document.querySelector(".search__field");
  button.addEventListener("click", event => {
    event.preventDefault();
    const inputValue = input.value;
    search(inputValue);
  });

}());
