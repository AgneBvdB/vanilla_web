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
}
