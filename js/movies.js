class Movie {
  constructor(title, director, poster, filmDate) {
    this.id = new Date().getTime();
    this.title = title;
    this.director = director;
    this.poster = poster;
    this.filmDate = filmDate;
  }
  defaultFilms() {
    const film1 = new Movie(
      "Intersteller",
      "Christopher Nolan",
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      "2014-11-07"
    );

    return [film1];
  }
}
