// infopage

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log("Painting ID:", id);

const painting = paintings.find(p => p.id == id);

    if(painting.available === true){
    document.getElementById("buy-container").classList.remove("hidden");
  }

if (painting) {
  document.getElementById("title").textContent = painting.title;
  document.getElementById("description").textContent = painting.description;
  document.getElementById("year").textContent = painting.year;
  let paintingImg = document.getElementById("painting").src = painting.src;
  document.getElementById("head-title").textContent = painting.title;

  // ModalImage src
document.getElementById("modalImage").src = painting.src;

//buy page painting id and img
document.getElementById("buy-now").href = `buy.html?id=${painting.id}`
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


