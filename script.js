function showPopup(serviceName) {
    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popup-text");
    popupText.textContent = `Informações sobre: ${serviceName}`;
    popup.style.display = "block";
}

function hidePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}

let currentIndex = 0;
const items = document.querySelectorAll('.scroll-item');
const dots = document.querySelectorAll('.dot');
const container = document.querySelector('.scroll-container');

function changeSlide(index) {
    currentIndex = index;
    updateSlide();
}

function prevSlide() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    updateSlide();
}

function nextSlide() {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    updateSlide();
}

function updateSlide() {
    const offset = -currentIndex * 100;
    container.style.transform = `translateX(${offset}%)`;
    updateDots();
}

function updateDots() {
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

function showInfo(text) {
    document.getElementById("info").textContent = text;
}