export class NewFilm {
  constructor(element) {
    this._element = element;
  }

  addNewFilm(filmData) {
    const row = document.createElement('tr');

    row.setAttribute('data-id', filmData.id);
    row.setAttribute('data-title', filmData.title);
    row.setAttribute('data-year', filmData.year);
    row.setAttribute('data-imdb', filmData.imdb.toFixed(2));

    const idBlock = document.createElement('td');
    idBlock.textContent = filmData.id;

    const titleBlock = document.createElement('td');
    titleBlock.textContent = filmData.title;

    const imdbBlock = document.createElement('td');
    imdbBlock.textContent = filmData.imdb.toFixed(2);

    const yearBlock = document.createElement('td');
    yearBlock.textContent = filmData.year;

    row.appendChild(idBlock);
    row.appendChild(titleBlock);
    row.appendChild(yearBlock);
    row.appendChild(imdbBlock);
    

    this._element.appendChild(row);
  }
}