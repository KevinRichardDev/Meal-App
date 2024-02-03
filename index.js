// https://themealdb.com/api/json/v1/1/search.php?s=tomato

const result = document.getElementById("result");
const form = document.querySelector("form");
const input = document.querySelector("input");
let meals = [];

async function fetchMeals(search) {
  await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then((res) => res.json())
    .then((data) => (meals = data.meals));

  console.log(meals);
}

// fonction pour limiter le nombre de recherche a 12

function mealsDisplay() {
  meals.length = 12;

  result.innerHTML = meals.map(
    (meal) =>
      `
      <li class="card">
        <h2>${meal.strMeal}</h2>
        <p>${meal.strArea}</p>
        <img src=${meal.strMealThumb} alt="photo ${meal.strMeal}">
        <ul></ul>
      </li>
    `
  )
  .join("");
}

input.addEventListener("input", (e) => {
  fetchMeals(e.target.value);
})

// ajout d'un evenment a form

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchMeals().then(() => mealsDisplay());
});

