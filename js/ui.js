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
    deleteIcon.className = "fa fa-remove";

    const editIconLink = document.createElement("a");
    editIconLink.href = "#";
    editIconLink.className = "editItem";
    editIconLink.id = film.id;
    editIconLink.addEventListener("click", editFilm);

    const editIcon = document.createElement("div");
    editIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen text-light" viewBox="0 0 16 16">
    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
  </svg>`;

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
