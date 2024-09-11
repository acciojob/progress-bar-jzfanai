// script.js
document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    
    let currentIndex = 0;
    
    function updateButtons() {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === circles.length - 1;
    }
    
    function setActiveCircle(index) {
        circles.forEach((circle, i) => {
            if (i === index) {
                circle.classList.add('active');
            } else {
                circle.classList.remove('active');
            }
        });
    }
    
    nextButton.addEventListener('click', () => {
        if (currentIndex < circles.length - 1) {
            currentIndex++;
            setActiveCircle(currentIndex);
            updateButtons();
        }
    });
    
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            setActiveCircle(currentIndex);
            updateButtons();
        }
    });
    
    // Initial setup
    updateButtons();
});
