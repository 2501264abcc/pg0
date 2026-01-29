document.addEventListener("DOMContentLoaded", () => {
  let movieList = document.getElementById("movieList");
  let movies = JSON.parse(localStorage.getItem("movies")) || [];

  movieList.innerHTML = "";

  if (movies.length === 0) {
    movieList.innerHTML = "<p>まだ記録がありません</p>";
    return;
  }

  movies.forEach((movie, index) => {
    let card = document.createElement("div");
    card.className = "card";
card.innerHTML = `
      <div>
        <h3>${movie.title}</h3>
        <p>観た日：${movie.date}</p>
        <button class="delete-btn" onclick="deleteMovie(${index})">
          削除
        </button>
      </div>
    `;

    movieList.appendChild(card);
  });
});

function goHome() {
  location.href = "home.html";
}

function deleteMovie(index) {
  let movies = JSON.parse(localStorage.getItem("movies")) || [];
  console.log("削除前のmovies:", movies);


  if (!confirm("この記録を削除しますか？")) return;

  movies.splice(index, 1);
  console.log("削除後のmovies:", movies);
  localStorage.setItem("movies", JSON.stringify(movies));

  location.reload(); 
}
