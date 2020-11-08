/**
 * Snappy R&D
 * Task 3
 */


const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";

const mealsArr = [];

function getReceipes() {
  fetch(API_URL)
    .then(response => response.json())
    .then(data => mealsArr.push(data.meals[0].strMeal));

  fetch(API_URL)
    .then(response => response.json())
    .then(data => mealsArr.push(data.meals[0].strMeal));

  fetch(API_URL)
    .then(response => response.json())
    .then(data => mealsArr.push(data.meals[0].strMeal));
}