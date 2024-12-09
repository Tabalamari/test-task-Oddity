
const button = document.querySelector('button');
button.addEventListener('click', changeLogo);


function changeLogo() {
    const logo = document.getElementById('logo');
    const oddity = document.getElementById('oddity');
    if (logo.style.display === "none") {
        logo.style.display = "block";
        oddity.style.display = "none"
    } else {
        logo.style.display = "none";
        oddity.style.display = "block";
    }
}