
document.getElementById('search-button').addEventListener('click', () => {
    const title = encodeURIComponent(document.getElementById('movie-title').value.trim());
    if (title) {
        const apiKey = `ee7b1e07`
        const url = `https://www.omdbapi.com/?t=${title}&apikey=${apiKey}&_=${new Date().getTime()}`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.Response === "True") {
                    document.getElementById('movie-info').innerHTML = `
                        <div class="card">
                            
                            <div class="card-body  border rounded">
                                <h5 class="card-title">${data.Title}</h5>
                                <p class="card-text">Released: ${data.Released}</p>
                                <p class="card-text">Genre: ${data.Genre}</p>
                                <p class="card-text">Director: ${data.Director}</p>
                                <p class="card-text">Plot: ${data.Plot}</p>
                                <p class="card-text">IMDB Rating: ${data.imdbRating}</p>
                                <a href="http://t.me/TheQuestMedia" class="btn btn-success" target="_blank">Download Movies Here</a>
                            </div>
                        </div>
                    `;
                } else {
                    document.getElementById('movie-info').innerHTML = `<p class="text-danger">Movie not found!.</p>`;
                }
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('movie-info').innerHTML = `<p class="text-danger">Failed to fetch movie data. Please try again later.</p>`;
            });
    } else {
        alert('Please enter a movie title.');
    }
});
