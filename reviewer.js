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
        // Center content
        gridContainer.style.marginLeft = "auto";
        gridContainer.style.marginRight = "auto";
        ulo.style.marginLeft = "auto";
        ulo.style.marginRight = "auto";
        toggleBtn.style.left = "10px";
    } else {
        // Shift content back to the right
        gridContainer.style.marginLeft = "250px";
        gridContainer.style.marginRight = "0";
        ulo.style.marginLeft = "270px";
        ulo.style.marginRight = "0";
        toggleBtn.style.left = "210px";
    }
}
