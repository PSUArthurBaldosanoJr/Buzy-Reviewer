function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
}
function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    let toggleBtn = document.getElementById("toggleBtn");
    let gridContainer = document.querySelector(".grid-container");
    let ulo = document.querySelector(".ulo");

    sidebar.classList.toggle("collapsed");

    if (sidebar.classList.contains("collapsed")) {
        sidebar.style.width = "0";
        gridContainer.style.transform = "translateX(-100px)";
        ulo.style.transform = "translateX(-100px)";
        toggleBtn.style.left = "10px";
    } else {
        sidebar.style.width = "200px";
        gridContainer.style.transform = "translateX(0)";
        ulo.style.transform = "translateX(0)";
        toggleBtn.style.left = "210px";
    }
}
