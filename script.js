// Modal

const modal = document.getElementById("myModal");


window.onclick = function(Event) {
    if (Event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modal.style.display === "flex") {
    modal.style.display = "none";
    modalImage.src = "";
  }
});

function openModal(imageSrc) {
    modal.style.display = "flex";
    document.getElementById('modalImage').src = imageSrc;
}
