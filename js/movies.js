function Movie(title, director, poster, filmDate) {
  this.id = new Date().getTime();
  this.title = title;
  this.director = director;
  this.poster = poster;
  this.filmDate = filmDate;
}

Movie.prototype.defaultFilms = function () {
  const film1 = new Movie(
    "Intersteller",
    "Christopher Nolan",
    "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "2014-11-07"
  );
  const film2 = new Movie(
    "Inception",
    "Christopher Nolan",
    "https://upload.wikimedia.org/wikipedia/tr/9/94/Ba%C5%9Flang%C4%B1%C3%A7.jpg",
    "2010-07-08"
  );

  return [film1, film2];
};
