import { NewFilm } from "./data/data";

console.log("app.js included");

const incomingData = [
  {
    "id": 26,
    "title": "Побег из Шоушенка",
    "imdb": 9.30,
    "year": 1994
  },
  {
    "id": 25,
    "title": "Крёстный отец",
    "imdb": 9.20,
    "year": 1972
  },
  {
    "id": 27,
    "title": "Крёстный отец 2",
    "imdb": 9.00,
    "year": 1974
  },
  {
    "id": 1047,
    "title": "Тёмный рыцарь",
    "imdb": 9.00,
    "year": 2008
  },
  {
    "id": 223,
    "title": "Криминальное чтиво",
    "imdb": 8.90,
    "year": 1994
  }
];

function createTable() {
  const container = document.getElementById('table-container');
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');

  const headers = ['id', 'title', 'year', 'imdb'];
  headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.append(th);
  });

  thead.append(headerRow);
  table.append(thead);

  const tbody = document.createElement('tbody');
  table.append(thead, tbody)
  container.append(table);
  return tbody;
}

let currentSortState = 0;
function sortFilms() {
  const tableBody = document.querySelector('tbody');
  if (!tableBody) {
    console.error('tbody not found');
    return;
  }
  
  const rows = Array.from(tableBody.querySelectorAll('tr'));

  rows.forEach(row => row.remove());

  rows.sort((a, b) => {
    const fields = ['id', 'title', 'year', 'imdb'];
    const field = fields[Math.floor(currentSortState / 2)];
    const isAscending = currentSortState % 2 === 0;

    let valueA, valueB;

    if (field === 'id' || field === 'year' || field === 'imdb') {
      valueA = parseFloat(a.getAttribute(`data-${field}`));
      valueB = parseFloat(b.getAttribute(`data-${field}`));
    } else {
      valueA = a.getAttribute(`data-${field}`);
      valueB = b.getAttribute(`data-${field}`);
    }
    
    if (valueA < valueB) return isAscending ? -1 : 1;
    if (valueA > valueB) return isAscending ? 1 : -1;
    return 0;
  });

  rows.forEach(row => tableBody.appendChild(row));
  currentSortState = (currentSortState + 1) % 8;

}

document.addEventListener('DOMContentLoaded', () => {
  const tBody = createTable();
  const filmCreate = new NewFilm(tBody);

  incomingData.forEach(film => filmCreate.addNewFilm(film));
  setInterval(sortFilms, 2000);
})