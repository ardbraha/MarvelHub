const body = document.querySelector("body");
const openButton = document.querySelector(".delete");
const cancelButton = document.querySelector(".cancelButton");
const deleteButton = document.querySelector(".deleteButton");
const deleteWindow = document.querySelector(".deleteWindow");
const overlay = document.querySelector(".overlay");

function openWindow(){
  deleteWindow.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.classList.add("lockScroll");
}

function closeWindow(){
  deleteWindow.classList.add("hidden");
  overlay.classList.add("hidden");
  body.classList.remove("lockScroll");
}

openButton.addEventListener("click", openWindow);
cancelButton.addEventListener("click", closeWindow);
deleteButton.addEventListener("click", closeWindow);

document.addEventListener("keydown", function(e){
  if (e.key = "Escape") closeWindow()
})