const image = document.getElementById("image");

const brightness = document.getElementById("brightness");
const contrast = document.getElementById("contrast");
const saturation = document.getElementById("saturation");
const blur = document.getElementById("blur");
const grayscale = document.getElementById("grayscale");
const resetBtn = document.getElementById("reset");

function applyFilters() {
    image.style.filter = `
        brightness(${brightness.value}%)
        contrast(${contrast.value}%)
        saturate(${saturation.value}%)
        blur(${blur.value}px)
        grayscale(${grayscale.value}%)
    `;
}

brightness.addEventListener("input", applyFilters);
contrast.addEventListener("input", applyFilters);
saturation.addEventListener("input", applyFilters);
blur.addEventListener("input", applyFilters);
grayscale.addEventListener("input", applyFilters);

resetBtn.addEventListener("click", () => {
    brightness.value = 100;
    contrast.value = 100;
    saturation.value = 100;
    blur.value = 0;
    grayscale.value = 0;
    applyFilters();
});

applyFilters();