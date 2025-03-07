function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
}
function toggleSidebar() {
            let sidebar = document.getElementById("sidebar");
            let btn = document.getElementById("toggleBtn");
            sidebar.classList.toggle("collapsed");
        }
