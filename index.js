// Generate gallery
function renderGallery() {
    const gallery = document.getElementById("gallery");
    console.log(paintings);
    paintings.sort(() => Math.random() - 0.5);

    paintings.forEach((painting) => {
        if (painting.title !== "") {
        const item = document.createElement('div');
        item.className = "grid-item";

        item.innerHTML = `
            <a target="_blank" href="infopage.html?id=${painting.id}" id="${painting.id}">
                <img
                 src="${painting.thumb}"
                class="card-img"
            alt="${painting.title}">
            </a>`;
            gallery.appendChild(item);
}});
     

    imagesLoaded(gallery, () => {
        layoutMasonry();
        
    });
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

    const gap = 25;
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


// Lazy loading

function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img.lazy-img');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;

                img.src = img.dataset.src;
                img.removeAttribute('data-src');

                img.onload = () => {
                    img.classList.remove('lazy-img');
                    
                };

                obs.unobserve(img);
            }
        });
    }, {
        rootMargin: '500px', 
        threshold: 0.5
    });

    lazyImages.forEach(img => {
        observer.observe(img);
    });
}


