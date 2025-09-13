
// Convert availability string to boolean
function mapAvailable(value) {
    if (value === "yes") return true;
    if (value === "no") return false;
    return ""; // no filter
}

// Filter paintings
function filterPaintings({ year, theme, available }) {
    return paintings.filter(p => {
        const yearFilter = !year || String(p.year) === year;
        const themeFilter = !theme || p.theme === theme;
        const availFilter = available === "" || p.available === available;
        return yearFilter && themeFilter && availFilter;
    });
}

// Render gallery
function renderGallery(paintingsArray) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    paintingsArray.forEach(p => {
        if (!p.title) return;

        const item = document.createElement('div');
        item.className = "grid-item";
        item.innerHTML = `
            <a target="_blank" href="infopage.html?id=${p.id}" id="${p.id}">
                <img src="${p.thumb}" class="card-img" alt="${p.title}">
            </a>`;
        gallery.appendChild(item);
    });

    imagesLoaded(gallery, layoutMasonry);
}

// Optimized masonry layout
let resizeTimeout;
function layoutMasonry() {
    const container = document.getElementById("gallery");
    container.style.height = '';

    const width = window.innerWidth;
    let columnCount = 4;
    if (width < 1200) columnCount = 3;
    if (width < 900) columnCount = 2;
    if (width < 600) columnCount = 1;

    const gap = 25;
    const containerWidth = container.clientWidth;
    const totalGap = (columnCount - 1) * gap;
    const columnWidth = Math.floor((containerWidth - totalGap) / columnCount);
    const colLefts = Array.from({ length: columnCount }, (_, i) => i * (columnWidth + gap));

    const columnHeights = new Array(columnCount).fill(0);
    const gridItems = container.querySelectorAll(".grid-item");
    gridItems.forEach(item => item.removeAttribute('style'));

    gridItems.forEach(item => {
        item.style.width = `${columnWidth}px`;
        item.style.position = 'absolute';
        const itemHeight = item.offsetHeight;

        const minHeight = Math.min(...columnHeights);
        const columnIndex = columnHeights.indexOf(minHeight);

        item.style.left = `${colLefts[columnIndex]}px`;
        item.style.top = `${minHeight}px`;

        columnHeights[columnIndex] += itemHeight + gap;
    });

    container.style.height = `${Math.max(...columnHeights)}px`;
}

// Debounced resize event
window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        requestAnimationFrame(layoutMasonry);
    }, 100);
});

// Wait for images to load before layout
function imagesLoaded(container, callback) {
    const images = container.getElementsByTagName('img');
    let loaded = 0;
    const total = images.length;

    if (total === 0) return callback();

    for (let img of images) {
        if (img.complete) {
            loaded++;
        } else {
            img.onload = img.onerror = () => {
                loaded++;
                if (loaded === total) callback();
            };
        }
    }

    if (loaded === total) callback();
}

// Apply filters and render gallery
function applyFilters() {
    const year = document.getElementById("year-filter").value;
    const theme = document.getElementById("theme-filter").value;
    const available = mapAvailable(document.getElementById("available-filter").value);

    const filtered = filterPaintings({ year, theme, available });
    renderGallery(filtered);
}

// Live filter listeners
document.querySelectorAll(".filter").forEach(select => {
    select.addEventListener("change", applyFilters);
});

// Initial render
window.addEventListener("load", applyFilters);
