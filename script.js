function showSurprise() {
    const surpriseText = document.getElementById("surpriseText");
    surpriseText.classList.remove("hidden");
    surpriseText.classList.add("show");
    createHearts();
}

function createHearts() {
    const container = document.querySelector('.heart-animation');
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
            heart.innerHTML = '❤️';
            container.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, i * 300);
    }
}

// Add this CSS to your style.css file
const styleSheet = document.createElement('style');
styleSheet.textContent = `
.heart {
    position: fixed;
    font-size: 1.5rem;
    animation: floatHeart linear forwards;
}

@keyframes floatHeart {
    0% {
        transform: translateY(100vh) scale(0);
        opacity: 1;
    }
    100% {
        transform: translateY(-100vh) scale(1);
        opacity: 0;
    }
}
`;
document.head.appendChild(styleSheet);

