function saveMovie() {
  let title = document.getElementById("title").value;
  let date = document.getElementById("date").value;

  console.log("入力されたタイトル:",title);
  console.log("入力された日付:",date);

  if (title === "" || date === "") {
    alert("タイトルと日付を入力してください");
    return;
  }

  let movies = JSON.parse(localStorage.getItem("movies")) || [];
  console.log("保存前のmovies:",movies);

  movies.push({
    title: title,
    date: date
  });

  localStorage.setItem("movies", JSON.stringify(movies));
  console.log("保存後のmovies:", JSON.parse(localStorage.getItem("movies")));


  location.href = "movie.html";
}