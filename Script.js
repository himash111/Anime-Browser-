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
// Function to search for anime
async function searchAnime() {
    let query = document.getElementById("animeSearch").value;
    if (!query) return;

    let url = `https://api.jikan.moe/v4/anime?q=${query}&limit=10`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        displayAnimeResults(data.data);
    } catch (error) {
        console.error("Error fetching anime:", error);
    }
}

// Function to display anime results
function displayAnimeResults(animes) {
    let resultsContainer = document.getElementById("animeResults");
    resultsContainer.innerHTML = ""; // Clear previous results

    animes.forEach(anime => {
        let animeCard = document.createElement("div");
        animeCard.classList.add("anime-card");
        animeCard.innerHTML = `
            <img src="${anime.images.jpg.image_url}" alt="${anime.title}" />
            <h3>${anime.title}</h3>
            <p>${anime.synopsis ? anime.synopsis.substring(0, 100) + "..." : "No synopsis available."}</p>
            <a href="${anime.url}" target="_blank">More Info</a>
        `;
        resultsContainer.appendChild(animeCard);
    });
                 }
