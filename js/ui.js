function UI() {}

UI.prototype.deleteFilmList = function () {
  const ulDiv = document.querySelector(".list-group");
  ulDiv.innerHTML = "";
};

UI.prototype.deleteFilmItem = function (e) {
  e.target.parentElement.parentElement.parentElement.remove();
};

UI.prototype.editFilmItem = function (e) {
  const editID = e.target.parentElement.id;
  let films = JSON.parse(localStorage.getItem(KEY_NAME));
  films.forEach((element) => {
    if (element.id == editID) {
      id.value = element.id;
      filmTitle.value = element.title;
      filmDirector.value = element.director;
      posterUrl.value = element.poster;
      filmDate.value = element.filmDate;
    }
  });
};

UI.prototype.inputDelete = function () {
  filmTitle.value = "";
  filmDirector.value = "";
  posterUrl.value = "";
  filmDate.value = "";
};

UI.prototype.addNoneButton = function (button) {
  button.classList += " d-none";
};
UI.prototype.deleteNoneButton = function (button) {
  button.classList.remove("d-none");
};

UI.prototype.getUIFilms = function (film) {
  const listItem = document.createElement("li");
  listItem.className =
    "list-group-item d-flex justify-content-between align-items-center border border-primary";

  const listPoster = document.createElement("img");
  listPoster.src = `${film.poster}`;
  listPoster.alt = `${film.title}`;
  listPoster.width = "50";
  listPoster.height = "75";

  const titleDiv = document.createElement("div");
  titleDiv.innerText = film.title;

  const directorDiv = document.createElement("div");
  directorDiv.innerText = film.director;

  const dateDiv = document.createElement("div");
  dateDiv.innerText = film.filmDate;

  const iconDiv = document.createElement("div");
  iconDiv.className = "d-flex gap-3";

  const deleteIconLink = document.createElement("a");
  deleteIconLink.href = "#";
  deleteIconLink.className = "deleteItem";
  deleteIconLink.id = film.id;
  deleteIconLink.addEventListener("click", deleteFilm);

  const deleteIcon = document.createElement("i");
  deleteIcon.className = "bi bi-x-circle";

  const editIconLink = document.createElement("a");
  editIconLink.href = "#";
  editIconLink.className = "editItem";
  editIconLink.id = film.id;
  editIconLink.addEventListener("click", editFilm);

  const editIcon = document.createElement("i");
  editIcon.className = "bi bi-pen";

  editIconLink.appendChild(editIcon);
  deleteIconLink.appendChild(deleteIcon);

  iconDiv.appendChild(editIconLink);
  iconDiv.appendChild(deleteIconLink);

  listItem.appendChild(listPoster);
  listItem.appendChild(titleDiv);
  listItem.appendChild(directorDiv);
  listItem.appendChild(dateDiv);
  listItem.appendChild(iconDiv);

  ulDiv.appendChild(listItem);
};
