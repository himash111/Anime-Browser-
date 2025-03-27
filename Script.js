
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Firebase Authentication
document.getElementById("loginBtn").addEventListener("click", () => {
    // Firebase Authentication logic here
    alert("Login system coming soon!");
});

function searchAnime() {
    let query = document.getElementById("searchBox").value;
    if (query) {
        window.location.href = `watch.html?anime=${encodeURIComponent(query)}`;
    }
}
