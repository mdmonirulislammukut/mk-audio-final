// Function executed on Home Page Button click to scroll down to features
function scrollToFeatures() {
    const section = document.getElementById("acoustic-features");
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


function submitForm() {
    alert("Thank you for contacting MK AUDIO! We will get back to you soon.");
}