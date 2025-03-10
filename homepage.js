document.addEventListener("DOMContentLoaded", () => toggleSidebar(true));

function toggleSidebar(initial = false) {
    let sidebar = document.getElementById("sidebar"),
        toggleBtn = document.getElementById("toggleBtn"),
        shiftElements = document.querySelectorAll(".grid-container, .ulo"),
        isCollapsed = initial || sidebar.classList.toggle("collapsed"),
        sidebarWidth = isCollapsed ? 0 : 150;

    sidebar.style.width = sidebarWidth + "px";
    toggleBtn.style.left = (sidebarWidth + 10) + "px";

    shiftElements.forEach(el => el.style.transform = "translateX(" + (isCollapsed ? 0 : sidebarWidth / 2) + "px)");
}