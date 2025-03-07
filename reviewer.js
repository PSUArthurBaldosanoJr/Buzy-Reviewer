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
        gridContainer.style.marginLeft = "0";
        ulo.style.marginLeft = "20px";
        toggleBtn.style.left = "10px";
    } else {
        gridContainer.style.marginLeft = "200px"; /* Match the sidebar width */
        ulo.style.marginLeft = "220px";
        toggleBtn.style.left = "210px";
    }
}
