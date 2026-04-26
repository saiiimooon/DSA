// --- Slide Navigation Logic ---
let currentSlide = 1;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function updateProgress() {
    const progress = (currentSlide / totalSlides) * 100;
    document.getElementById('progressBar').style.width = progress + "%";
}

function showSlide(n) {
    if (n > totalSlides) currentSlide = 1;
    if (n < 1) currentSlide = totalSlides;
    
    slides.forEach(slide => slide.classList.remove("active"));
    slides[currentSlide - 1].classList.add("active");
    updateProgress();
}

function nextSlide() { showSlide(++currentSlide); }
function prevSlide() { showSlide(--currentSlide); }

updateProgress();

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

// --- Slide 3: LL Rotation Animation ---
function animateLL() {
    document.getElementById('n30').style.top = '100px';
    document.getElementById('n30').style.left = '60%';
    
    document.getElementById('n20').style.top = '20px';
    document.getElementById('n20').style.left = '50%';
    
    document.getElementById('n10').style.top = '100px';
    document.getElementById('n10').style.left = '40%';

    document.getElementById('ll-text').innerText = "Balanced! Node 20 is the new root. (All BF = 0)";
    document.getElementById('ll-text').style.color = "green";
}

function resetLL() {
    document.getElementById('n30').style.top = '20px';
    document.getElementById('n30').style.left = '50%';
    
    document.getElementById('n20').style.top = '100px';
    document.getElementById('n20').style.left = '40%';
    
    document.getElementById('n10').style.top = '180px';
    document.getElementById('n10').style.left = '30%';

    document.getElementById('ll-text').innerText = "Imbalance at Node 30 (BF = +2)";
    document.getElementById('ll-text').style.color = "#01579b";
}

// --- Slide 4: LR Rotation Animation ---
function animateLR_Step1() {
    document.getElementById('lr10').style.top = '180px';
    document.getElementById('lr10').style.left = '30%';
    
    document.getElementById('lr20').style.top = '100px';
    document.getElementById('lr20').style.left = '40%';

    document.getElementById('lr-text').innerText = "Step 1: Straightened into an LL Line.";
    document.getElementById('lr-text').style.color = "orange";
}

function animateLR_Step2() {
    document.getElementById('lr30').style.top = '100px';
    document.getElementById('lr30').style.left = '60%';
    
    document.getElementById('lr20').style.top = '20px';
    document.getElementById('lr20').style.left = '50%';

    document.getElementById('lr-text').innerText = "Step 2: Balanced! Node 20 is root.";
    document.getElementById('lr-text').style.color = "green";
}

function resetLR() {
    document.getElementById('lr30').style.top = '20px';
    document.getElementById('lr30').style.left = '50%';
    
    document.getElementById('lr10').style.top = '100px';
    document.getElementById('lr10').style.left = '35%';
    
    document.getElementById('lr20').style.top = '180px';
    document.getElementById('lr20').style.left = '45%';

    document.getElementById('lr-text').innerText = "Left-Right Case: Imbalance at Node 30";
    document.getElementById('lr-text').style.color = "#01579b";
}