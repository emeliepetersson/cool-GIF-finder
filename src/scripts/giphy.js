"use strict";

// Search for GIFs on Giphy.
const search = input => {
  return window
    .fetch(
      "https://api.giphy.com/v1/gifs/search?api_key=" +
        process.env.GIPHY_API_KEY +
        "&q=" +
        input
    )
    .then(response => response.json())
    .catch(console.error);
};

export default { search };
