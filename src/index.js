document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("form")
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // can we console.log what is in the input?
    console.log(event);
  });
});
