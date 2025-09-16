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
        item.style.position = "absolute";

        item.innerHTML = `
            <a target="_blank" href="infopage.html?id=${p.id}" id="${p.id}">
                <img 
                    src="placeholder.jpg" 
                    data-src="${p.thumb}" 
                    class="card-img lazy" 
                    alt="${p.title}" 
                    style="width: 100%; height: auto; opacity: 0; transition: opacity 0.5s ease-in-out;"
                >
            </a>
        `;

        gallery.appendChild(item);
    });

    setupLazyLoading();

    imagesLoaded(gallery, layoutMasonry);

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
                        img.style.opacity = 1;
                    };
                    img.classList.remove("lazy");
                    obs.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => observer.observe(img));
    } else {
        // fallback
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.onload = () => (img.style.opacity = 1);
            img.classList.remove("lazy");
        });
    }
}

// --- LAYOUT ---
function layoutMasonry() {
    const container = document.getElementById("gallery");
    container.style.height = "";

    const screenWidth = window.innerWidth;
    let columnCount = 4;
    if (screenWidth < 1200) columnCount = 3;
    if (screenWidth < 900) columnCount = 2;
    if (screenWidth < 600) columnCount = 1;

    const gap = 25;
    const containerWidth = container.clientWidth;
    const totalGap = (columnCount - 1) * gap;
    const columnWidth = Math.floor((containerWidth - totalGap) / columnCount);

    const colLefts = [];
    for (let i = 0; i < columnCount; i++) {
        colLefts.push(i * (columnWidth + gap));
    }

    const columnHeights = new Array(columnCount).fill(0);
    const gridItems = container.querySelectorAll(".grid-item");

    gridItems.forEach(function (item) {
        item.style.width = columnWidth + "px";
        item.style.position = "absolute";

        const img = item.querySelector("img");
        const itemHeight = img.offsetHeight;

        const minHeight = Math.min(...columnHeights);
        const columnIndex = columnHeights.indexOf(minHeight);

        item.style.left = colLefts[columnIndex] + "px";
        item.style.top = minHeight + "px";

        columnHeights[columnIndex] += itemHeight + gap;
    });

    const maxHeight = Math.max(...columnHeights);
    container.style.height = maxHeight + "px";
}

function imagesLoaded(container, callback) {
    const images = container.getElementsByTagName("img");
    let loaded = 0;
    const total = images.length;

    if (total === 0) {
        callback();
        return;
    }

    for (let i = 0; i < total; i++) {
        const img = images[i];

        if (img.complete) {
            loaded++;
            if (loaded === total) callback();
        } else {
            img.onload = img.onerror = function () {
                loaded++;
                if (loaded === total) callback();
            };
        }
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

    window.addEventListener("resize", layoutMasonry);
    window.addEventListener("scroll", handleScroll);
});
