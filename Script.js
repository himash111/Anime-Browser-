async function searchAnime() {
    const query = document.getElementById("search-bar").value;
    const apiUrl = `https://api.jikan.moe/v4/anime?q=${query}&limit=10`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    displayResults(data.data);
}

function displayResults(animes) {
    const container = document.getElementById("anime-container");
    container.innerHTML = "";

    animes.forEach(anime => {
        const animeCard = document.createElement("div");
        animeCard.classList.add("anime-card");

        animeCard.innerHTML = `
            <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
            <h3>${anime.title}</h3>
            <a href="${anime.url}" target="_blank">Watch Now</a>
        `;

        container.appendChild(animeCard);
    });
}
