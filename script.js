function toggleContactDetail() {
    const panel = document.getElementById("contact-panel");
    const button = document.querySelector(".btn-action-primary");
    
    if (panel.style.display === "block") {
        panel.style.display = "none";
        button.textContent = "Minta Informasi Kontak";
    } else {
        panel.style.display = "block";
        panel.style.styleAnimation = "fadeIn 0.3s";
        button.textContent = "Sembunyikan Kontak";
    }
}

function viewProject(projectName) {
    console.log(`Mengalihkan rute menuju file proyek: ${projectName}`);
}