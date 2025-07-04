// Generate gallery


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
    function getColumnCount() {
        const width = window.innerWidth;
        if (width < 600) return 1;
        if (width < 900) return 2;
        if (width < 1200) return 3;
        return 4;
    };

    //calculating column widths
    const container = document.getElementById("gallery");
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
            item.style.position = '';
            item.style.top = '';
            item.style.left = '';
            item.style.width = '';
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
}

function applyLayout() {
    const gallery = document.getElementById("gallery");
    imagesLoaded(gallery, layoutMasonry);
}
window.addEventListener('load', applyLayout);
window.addEventListener('resize', applyLayout);
