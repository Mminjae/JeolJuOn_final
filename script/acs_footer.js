let menu = document.querySelector(".family_site_list");
let button = document.querySelector(".family_site");

button.addEventListener("click", () => {
  // Toggle the display of the menu
  console.log(menu.style.display);

  if (menu.style.display === "none") {
    menu.style.display = "block"; // Show the menu
  } else {
    menu.style.display = "none"; // Hide the menu
  }
});
