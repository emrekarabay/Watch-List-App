const KEY_NAME = "filmsDefault";
const INIT_KEY_NAME = "initialized";
const ADD_KEY_NAME = "add";
const id = document.querySelector("#id");

const filmTitle = document.querySelector("#filmTitle");
const filmDirector = document.querySelector("#filmDirector");
const posterUrl = document.querySelector("#posterUrl");
const filmDate = document.querySelector("#filmDate");
const addButton = document.querySelector("#filmAdd");
const clearAllButton = document.querySelector("#clearAll");
const updateButton = document.querySelector("#update");

const ulDiv = document.querySelector(".list-group");

const ui = new UI();
const movies = new Movie();
const storage = new Storage();

eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", loadFilmsToUI);
  addButton.addEventListener("click", addNewFilm);
  clearAllButton.addEventListener("click", clearAll);
  updateButton.addEventListener("click", updateFilm);
}

function loadFilmsToUI() {
  ui.deleteFilmList();

  if (storage.getFilmsFromStorage(INIT_KEY_NAME) == "") {
    const firstFilms = movies.defaultFilms();
    localStorage.setItem(INIT_KEY_NAME, true);
    localStorage.setItem(KEY_NAME, JSON.stringify(firstFilms));
  }
  const films = storage.getFilmsFromStorage(KEY_NAME);

  films.forEach((film) => {
    ui.getUIFilms(film);
  });
}

function addNewFilm() {
  if (ui.emptyControl()) {
    ui.deleteFilmList();
    const films = storage.getFilmsFromStorage(KEY_NAME);
    const newFilm = new Movie(
      filmTitle.value,
      filmDirector.value,
      posterUrl.value,
      filmDate.value
    );
    films.push(newFilm);
    localStorage.setItem(KEY_NAME, JSON.stringify(films));
    loadFilmsToUI();
    ui.inputDelete();
    ui.alert("success", "Successfully added", 2000);
  }
}

function clearAll() {
  ui.deleteFilmList();
  localStorage.removeItem(KEY_NAME);
  storage.getFilmsFromStorage(KEY_NAME);
}

function deleteFilm(e) {
  ui.deleteFilmItem(e);
  storage.deleteItemFromStorage(e);
  ui.alert("success", "Successfully deleted", 2000);
}

function editFilm(e) {
  ui.editFilmItem(e);
  ui.addNoneButton(addButton);
  ui.addNoneButton(clearAllButton);
  ui.deleteNoneButton(updateButton);
}

function updateFilm(e) {
  ui.addNoneButton(updateButton);
  ui.deleteNoneButton(addButton);
  ui.deleteNoneButton(clearAllButton);
  storage.updateFilmFromStorage();
  ui.deleteFilmList();
  const films = storage.getFilmsFromStorage(KEY_NAME);
  films.forEach((film) => {
    ui.getUIFilms(film);
  });
  ui.inputDelete();
  ui.alert("success", "Updated successfully", 2000);
}
