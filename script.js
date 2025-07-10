// Generate gallery
function renderGallery() {
    paintings.sort(() => Math.random() - 0.5);
    paintings.forEach(painting => {
        if (painting.title !== "") {
        const item = document.createElement('div');
        item.className = "grid-item";

        item.innerHTML = `
            <a onclick="openModal('${painting.src.replace(/'/g, "\\'")}')">
                <img data-src="${painting.thumb}" class="card-img lazy-img" width="300" height="350" alt="${painting.title}" loading="lazy">
            </a>
            <div class="card-body">
                <h5 class="card-title">${painting.title}</h5>
                <p class="card-year">${painting.year}<p>
                <p class="card-text">${painting.description || "&nbsp;"}</p>
            </div>`;
            gallery.appendChild(item);
}});
     

    imagesLoaded(gallery, () => {
        layoutMasonry();
        initLazyLoading();
    });
}


// Modal

const modal = document.getElementById("myModal");
const modalImage = document.getElementById('modalImage');

function openModal(imageSrc) {
    modal.style.display = "flex";
    modalImage.src = imageSrc;
};

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modal.style.display === "flex") {
    modal.style.display = "none";
    modalImage.src = "";
  }
});

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Masonry type layout
function layoutMasonry() {

    const container = document.getElementById("gallery");
     container.style.height = '';

    function getColumnCount() {
        const width = window.innerWidth;
        if (width < 600) return 1;
        if (width < 900) return 2;
        if (width < 1200) return 3;
        return 4;
    };

    //calculating column widths

    const gap = 20;
    const columnCount = getColumnCount();

    const containerWidth = container.clientWidth;
    const totalGap = (columnCount - 1) * gap;
    const columnWidth = Math.floor((containerWidth - totalGap) / columnCount);

    const colLefts = Array.from({ length: columnCount }, (_, i) => i * (columnWidth + gap));

    //positioning items
    const columnHeights = new Array(columnCount).fill(0);//track column height
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(item => {
    item.removeAttribute('style');
        });
    gridItems.forEach(item => {
        item.style.width = `${columnWidth}px`;
        item.style.position = 'absolute';
        const itemHeight = item.offsetHeight; //measure height

        let minHeight = Math.min(...columnHeights);
        let columnIndex = columnHeights.indexOf(minHeight);

        item.style.left = `${colLefts[columnIndex]}px`;
        item.style.top = `${minHeight}px`;
        
        columnHeights[columnIndex] += itemHeight + gap;
    });

    const maxHeight = Math.max(...columnHeights);
    container.style.height = `${maxHeight}px`;
};

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
};


window.addEventListener('load', renderGallery);
window.addEventListener("resize", layoutMasonry);

// navbar toggle
document.addEventListener("DOMContentLoaded", () => {
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
});

// Lazy loading

function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img.lazy-img');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                img.classList.remove('lazy-img');
                obs.unobserve(img);
            }
        });
    }, {
        rootMargin: '100px', // start loading before in view
        threshold: 0.1
    });

    lazyImages.forEach(img => {
        observer.observe(img);
    });
}
