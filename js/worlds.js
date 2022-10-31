// Hamburger Button
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;

// Last Modified Date
const today = new Date();
document.querySelector("footer div span").textContent = today.getFullYear();
document.getElementById("lastupdatedate").textContent = document.lastModified;