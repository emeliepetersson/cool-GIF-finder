import "../styles/index.scss";
import search from "./giphy.js";

const button = document.querySelector(".search__button");
const input = document.querySelector(".search__field");

button.addEventListener("click", event => {
  event.preventDefault();
  const inputValue = input.value;
  search(inputValue);
});
