const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.nav-links');

if (menuButton && menu) {
    menuButton.addEventListener('click', function () {
    menu.classList.toggle('show');
    });
}

function handleResize() {
    if (window.innerWidth > 1000) {
        menu.classList.remove('hide');
    } else {
        menu.classList.add('hide');
    }
}

window.addEventListener('resize', handleResize);
handleResize();

function viewerTemplate(pic, alt) {
    return `div class="viewer">
                <button class="close-viewer">X</button>
                <img src="${pic}" alt="${alt}">
            </div>`;
}

function viewHandler(event) {
    const clickedImage = event.target;
    if (clickedImage.tagName === 'IMG') {
        const imagePath = clickedImage.src;
        const imageAlt = clickedImage.alt;
        
        const modal = document.createElement('div');
        modal.classList.add('viewer');
        const closeButton = document.createElement('button');
        closeButton.classList.add('close-viewer');
        closeButton.textContent = 'X';
        const modalImage = document.createElement('img')
        modalImage.src = imagePath;
        modalImage.alt = imageAlt;
        modal.appendChild(closeButton);
        modal.appendChild(modalImage);
        document.body.appendChild(modal);
        closeButton.addEventListener('click', closeViewer)
    }
}

function closeViewer() {
    const viewerModal = document.querySelector('.viewer');
    viewerModal.remove();
}

const gallerySection = document.querySelector('.gallery');
gallerySection.addEventListener('click', viewHandler);