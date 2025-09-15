// infopage

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log("Painting ID:", id);

const painting = paintings.find(p => p.id == id);

if (painting) {
  document.getElementById("title").textContent = painting.title;
  document.getElementById("description").textContent = painting.description;
  document.getElementById("year").textContent = painting.year;
  document.getElementById("painting").src = painting.src;
  document.getElementById("head-title").textContent = painting.title;
  if(painting.available === false){
    document.getElementById("buy").classList.add("hidden");
  }
  // ModalImage src
document.getElementById("modalImage").src = painting.src;
}

// Modal

const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];


// Open modal
btn.onclick = function(e) {
  e.preventDefault(); 
  modal.classList.remove("hidden");
  modal.classList.add("block");
}



// Close modal
span.addEventListener('click', () => {
  modal.classList.remove("block");
  modal.classList.add('hidden');
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("block");
    modal.classList.add("hidden");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("block");
    modal.classList.add("hidden");
  }
});




