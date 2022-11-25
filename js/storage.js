class Storage {
  getFilmsFromStorage(KEY_NAME) {
    if (localStorage.getItem(KEY_NAME) === null) {
      KEY_NAME = [];
    } else {
      KEY_NAME = JSON.parse(localStorage.getItem(KEY_NAME));
    }
    return KEY_NAME;
  }

  deleteItemFromStorage(e) {
    const silinecekID = e.target.parentElement.id;
    let films = JSON.parse(localStorage.getItem(KEY_NAME));
    films.forEach((element) => {
      if (element.id == silinecekID) {
        const index = films.indexOf(element);

        if (index > -1) {
          // only splice array when item is found
          films.splice(index, 1); // 2nd parameter means remove one item only
        }
      }
    });
    localStorage.setItem(KEY_NAME, JSON.stringify(films));
  }

  updateFilmFromStorage() {
    let films = JSON.parse(localStorage.getItem(KEY_NAME));
    films.forEach((element) => {
      if (element.id == id.value) {
        element.title = filmTitle.value;
        element.director = filmDirector.value;
        element.poster = posterUrl.value;
        element.filmDate = filmDate.value;
      }
      localStorage.setItem(KEY_NAME, JSON.stringify(films));
    });
  }
}
