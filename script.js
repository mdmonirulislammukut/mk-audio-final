// Function executed on Home Page Button click to scroll down to features
function scrollToFeatures() {
    const section = document.getElementById("acoustic-features");
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
function buyProduct(productName) {
    window.location.href = "contact.html?product=" + encodeURIComponent(productName);
}
window.addEventListener("DOMContentLoaded", function() {
    const messageBox = document.getElementById("messageBox");
    if (messageBox) {
        const urlParams = new URLSearchParams(window.location.search);
        const selectedProduct = urlParams.get("product");
        if (selectedProduct) {
            messageBox.value = "I want to buy the " + selectedProduct + " product.";
        }
    }
});

function submitForm() {
    alert("Thank you for contacting MK AUDIO! We will get back to you soon.");
}