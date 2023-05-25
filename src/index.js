document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.addEventListener("submit", () => {
    let shrek = document.getElementById(id = "tasks")
    shrek.append(document.getElementById(id = "new-task-description"))
    Event.preventDefault();
  });
});
