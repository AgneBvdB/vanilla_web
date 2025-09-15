function mapAvailable(value) {
    if (value === "yes") {
        return true;
    }
    if (value === "no") {
        return false;
    }
    return ""; 
}

function filterPaintings(filters) {
    return paintings.filter(function(painting) {
        const yearMatch = !filters.year || String(painting.year) === filters.year;
        const themeMatch = !filters.theme || painting.theme === filters.theme;
        const availableMatch = filters.available === "" || painting.available === filters.available;

        return yearMatch && themeMatch && availableMatch;
    });
}

function renderGallery(paintingsArray) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";
    
    paintingsArray.forEach(function(p) {
        if (!p.title) {
            return; // skip if no title
        }

        const item = document.createElement("div");
        item.className = "grid-item";
        item.style.position = "absolute"; 

        item.innerHTML = `
            <a target="_blank" href="infopage.html?id=${p.id}" id="${p.id}">
                <img src="${p.thumb}" class="card-img" alt="${p.title}" style="width: 100%; height: auto;">
            </a>
        `;

        gallery.appendChild(item);
    });

    // wait for images to load before applying masonry layout
    imagesLoaded(gallery, layoutMasonry);
}

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

    gridItems.forEach(function(item) {
        item.style.width = columnWidth + "px";
        item.style.position = "absolute";

        const img = item.querySelector("img");
        const itemHeight = img.offsetHeight;

        const minHeight = Math.min.apply(null, columnHeights);
        const columnIndex = columnHeights.indexOf(minHeight);

        item.style.left = colLefts[columnIndex] + "px";
        item.style.top = minHeight + "px";

        columnHeights[columnIndex] += itemHeight + gap;
    });

    const maxHeight = Math.max.apply(null, columnHeights);
    container.style.height = maxHeight + "px";
}

function imagesLoaded(container, callback) {
    const images = container.getElementsByTagName("img");
    let loaded = 0; // can change
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
            img.onload = img.onerror = function() {
                loaded++;
                if (loaded === total) {
                    callback();
                }
            };
        }
    }
}

function applyFilters() {
    const year = document.getElementById("year-filter").value;
    const theme = document.getElementById("theme-filter").value;
    const available = mapAvailable(document.getElementById("available-filter").value);

    const filtered = filterPaintings({
        year: year,
        theme: theme,
        available: available
    });

    renderGallery(filtered);
}

// --- Event listeners ---
window.addEventListener("DOMContentLoaded", function() {
    const filters = document.querySelectorAll(".filter");
    filters.forEach(function(select) {
        select.addEventListener("change", applyFilters);
    });

    // Run when page loads
    applyFilters();

    // Re-run layout when screen resizes
    window.addEventListener("resize", layoutMasonry);
});
