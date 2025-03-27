document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const animeTitle = urlParams.get("anime");

    if (animeTitle) {
        document.getElementById("animeTitle").textContent = animeTitle;
        document.getElementById("animeVideo").src = `https://example.com/stream/${animeTitle}`;
    }
});

function goBack() {
    window.location.href = "index.html";
}

function postComment() {
    let comment = document.getElementById("commentInput").value;
    if (comment) {
        let commentList = document.getElementById("commentsList");
        let newComment = document.createElement("p");
        newComment.textContent = comment;
        commentList.appendChild(newComment);
    }
}
