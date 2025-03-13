import { recipes } from "./recipes.mjs";

document.addEventListener("DOMContentLoaded", () => {
    const recipesContainer = document.getElementById("recipes");
    const searchForm = document.getElementById("search-form");

    function getRandomNumber(num) {
        return Math.floor(Math.random() * num);
    }

    function getRandomListEntry(list) {
        return list[getRandomNumber(list.length)];
    }

    function tagsTemplate(tags) {
        return `<ul class="recipe__tags">${tags.map(tag => `<li>${tag}</li>`).join(" ")}</ul>`;
    }

    function ratingTemplate(rating) {
        let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
        for (let i = 1; i <= 5; i++) {
            html += i <= rating ? `<span aria-hidden="true" class="icon-star">⭐</span>` : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
        html += `</span>`;
        return html;
    }

    function recipeTemplate(recipe) {
        return `<figure class="recipe">
            <img src="${recipe.image}" alt="image of ${recipe.name}" />
            <figcaption>
                <h2><a href="#">${recipe.name}</a></h2>
                <p class="recipe__ratings">${ratingTemplate(recipe.rating)}</p>
                <p class="recipe__description">${recipe.description}</p>
            </figcaption>
        </figure>`;
    }

    function renderRecipes(recipeList) {
        recipesContainer.innerHTML = recipeList.map(recipeTemplate).join(" ");
    }

    function filterRecipes(query) {
        return recipes.filter(recipe => 
            recipe.name.toLowerCase().includes(query) ||
            recipe.description.toLowerCase().includes(query) ||
            recipe.tags.find(tag => tag.toLowerCase().includes(query))
        ).sort((a, b) => a.name.localeCompare(b.name));
    }

    function searchHandler(event) {
        event.preventDefault();
        const query = event.target.search.value.trim().toLowerCase();
        renderRecipes(filterRecipes(query));
    }

    function init() {
        const recipe = getRandomListEntry(recipes);
        renderRecipes([recipe]);
    }

    searchForm.addEventListener("submit", searchHandler);
    init();
});
