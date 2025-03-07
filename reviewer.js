function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
}
function toggleSidebar() {
        let sidebar = document.getElementById("sidebar");
        let content = document.querySelector(".content");
        sidebar.classList.toggle("collapsed");
        
        if (sidebar.classList.contains("collapsed")) {
            content.style.marginLeft = "0";
        } else {
            content.style.marginLeft = "250px";
        }
        }
