// https://themealdb.com/api/json/v1/1/search.php?s=tomato

let meals = [];

async function fetchMeals() {
  fetch("https://themealdb.com/api/json/v1/1/search.php?s=duck")
    .then((res) => res.json())
    .then((data) => meals = data.meals);
}

fetchMeals();