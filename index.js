// --- CONFIG ---
const BATCH_SIZE = 20; // number of paintings per scroll batch

// --- GLOBAL STATE ---
let currentBatch = 0;
let currentPaintings = [];

// --- HELPERS ---
function mapAvailable(value) {
    if (value === "yes") return true;
    if (value === "no") return false;
    return "";
}

function filterPaintings(filters) {
    return paintings.filter(function (painting) {
        const yearMatch = !filters.year || String(painting.year) === filters.year;
        const themeMatch = !filters.theme || painting.theme === filters.theme;
        const availableMatch =
            filters.available === "" || painting.available === filters.available;

        return yearMatch && themeMatch && availableMatch;
    });
}

// --- RENDER FUNCTIONS ---
function renderBatch() {
    const gallery = document.getElementById("gallery");

    const start = currentBatch * BATCH_SIZE;
    const end = start + BATCH_SIZE;
    const batch = currentPaintings.slice(start, end);

    batch.forEach(function (p) {
        if (!p.title) return;

        const item = document.createElement("div");
        item.className = "grid-item";

        item.innerHTML = `
            <a target="_blank" href="infopage.html?id=${p.id}" id="${p.id}">
                <img 
                    data-src="${p.thumb}" 
                    class="card-img lazy" 
                    alt="${p.title}"
                >
            </a>
        `;

        gallery.appendChild(item);
    });

    setupLazyLoading();
    currentBatch++;
}


function setupLazyLoading() {
    const lazyImages = document.querySelectorAll("img.lazy");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.onload = () => {
                        img.classList.add("loaded");
                    };
                    img.classList.remove("lazy");
                    obs.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => observer.observe(img));
    } else {
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.onload = () => img.classList.add("loaded");
            img.classList.remove("lazy");
        });
    }
}


// --- FILTER + RESET ---
function applyFilters() {
    const year = document.getElementById("year-filter").value;
    const theme = document.getElementById("theme-filter").value;
    const available = mapAvailable(document.getElementById("available-filter").value);

    currentPaintings = filterPaintings({
        year: year,
        theme: theme,
        available: available,
    });

    currentBatch = 0;
    document.getElementById("gallery").innerHTML = "";
    renderBatch();
}

// --- INFINITE SCROLL ---
function handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.body.offsetHeight;

    if (scrollY + viewportHeight >= fullHeight - 300) {
        if (currentBatch * BATCH_SIZE < currentPaintings.length) {
            renderBatch();
        }
    }
}

// --- INIT ---
window.addEventListener("DOMContentLoaded", function () {
    const filters = document.querySelectorAll(".filter");
    filters.forEach(function (select) {
        select.addEventListener("change", applyFilters);
    });

    applyFilters(); // first load

    window.addEventListener("scroll", handleScroll);
});
