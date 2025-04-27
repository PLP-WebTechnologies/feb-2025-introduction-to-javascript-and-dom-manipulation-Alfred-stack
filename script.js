// Changing text content dynamically
document.getElementById('change-text-btn').addEventListener('click', function() {
    const infoText = document.getElementById('info-text');
    infoText.textContent = "The text has been changed! 🎉";
    // Modifying CSS style via JavaScript
    infoText.style.color = "#2c3e50";
    infoText.style.fontWeight = "bold";
    infoText.style.background = "#e0f7fa";
    infoText.style.padding = "10px";
    infoText.style.borderRadius = "6px";
});

// Adding or removing an element when a button is clicked
const boxBtn = document.getElementById('toggle-box-btn');
const boxContainer = document.getElementById('box-container');
let boxExists = false;

boxBtn.addEventListener('click', function() {
    if (!boxExists) {
        const box = document.createElement('div');
        box.id = "dynamic-box";
        box.textContent = "I'm a dynamically added box!";
        box.style.width = "250px";
        box.style.height = "80px";
        box.style.background = "#52ab98";
        box.style.color = "#fff";
        box.style.display = "flex";
        box.style.alignItems = "center";
        box.style.justifyContent = "center";
        box.style.marginTop = "15px";
        box.style.borderRadius = "8px";
        boxContainer.appendChild(box);
        boxExists = true;
        boxBtn.textContent = "Remove Box";
    } else {
        const box = document.getElementById('dynamic-box');
        if (box) box.remove();
        boxExists = false;
        boxBtn.textContent = "Add/Remove Box";
    }
});
