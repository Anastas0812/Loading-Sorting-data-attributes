import { NewFilm } from "./data/data";

// TODO: write code here

// comment this to pass build
const unusedVariable = "variable";

// for demonstration purpose only
export default function demo(value) {
  return `Demo: ${value}`;
}

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

let currentSortState = 0;

function sortFilms() {
  const tableBody = document.querySelector('tbody');
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
  const tableBody = document.querySelector('tbody');
  const filmCreate = new NewFilm(tableBody);

  incomingData.forEach(film => filmCreate.addNewFilm(film));

  setInterval(sortFilms, 2000);
})