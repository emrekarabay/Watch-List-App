class UI {
  deleteFilmList() {
    const ulDiv = document.querySelector(".list-group");
    ulDiv.innerHTML = "";
  }
  deleteFilmItem(e) {
    e.target.parentElement.parentElement.parentElement.remove();
  }
  alert(type, message, time) {
    const alert = document.createElement("div");
    const form = document.querySelector("#form");
    alert.className = `mt-3 alert alert-${type}`;
    alert.textContent = message;
    form.appendChild(alert);

    setTimeout(function () {
      alert.remove();
    }, time);
  }
  emptyControl() {
    if (
      filmTitle.value != "" &&
      filmDirector.value != "" &&
      posterUrl.value != "" &&
      filmDate.value != ""
    ) {
      return true;
    } else {
      this.alert("danger", "please do not empty the inputs", 2000);
      return false;
    }
  }
  editFilmItem(e) {
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
  }
  inputDelete() {
    filmTitle.value = "";
    filmDirector.value = "";
    posterUrl.value = "";
    filmDate.value = "";
  }

  addNoneButton(button) {
    button.classList += " d-none";
  }
  deleteNoneButton(button) {
    button.classList.remove("d-none");
  }
  getUIFilms(film) {
    const listItem = document.createElement("div");
    listItem.className = "row my-3 mx-1 align-items-center";

    const colDivImg = document.createElement("div");
    colDivImg.className = "col-sm-1 text-center";
    const listPoster = document.createElement("img");
    listPoster.src = `${film.poster}`;
    listPoster.alt = `${film.title}`;
    listPoster.width = "50";
    listPoster.height = "75";

    const titleDiv = document.createElement("div");
    titleDiv.className = "col-sm-4 text-center";
    titleDiv.innerText = film.title;

    const directorDiv = document.createElement("div");
    directorDiv.className = "col-sm-4 text-center";
    directorDiv.innerText = film.director;

    const dateDiv = document.createElement("div");
    dateDiv.className = "col-sm-2 text-center";
    dateDiv.innerText = film.filmDate;

    const iconDiv = document.createElement("div");
    iconDiv.className = "col-sm-1 d-flex gap-3 justify-content-center";

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
    listItem.appendChild(colDivImg);
    colDivImg.appendChild(listPoster);
    listItem.appendChild(titleDiv);
    listItem.appendChild(directorDiv);
    listItem.appendChild(dateDiv);
    listItem.appendChild(iconDiv);

    ulDiv.appendChild(listItem);
  }
}
