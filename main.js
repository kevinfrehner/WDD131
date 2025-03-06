document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("search-form");
    const recipesContainer = document.getElementById("recipes");

    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const query = event.target.search.value.trim().toLowerCase();
        loadRecipes(query);
    });

    async function loadRecipes(query = "") {
        try {
            const { recipes } = await import("./recipes.mjs");
            recipesContainer.innerHTML = "";
    
            const filteredRecipes = query
                ? recipes.filter(recipe => recipe.name.toLowerCase().includes(query))
                : recipes;
    
            filteredRecipes.forEach(recipe => {
                const recipeElement = document.createElement("div");
                recipeElement.classList.add("recipe");
                
                let stars = "";
                for (let i = 0; i < 5; i++) {
                    if (i < recipe.rating) {
                        stars += `<span aria-hidden="true" class="icon-star">⭐</span>`;
                    } else {
                        stars += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
                    }
                }
    
                recipeElement.innerHTML = `
                    <h2>${recipe.name}</h2>
                    <img src="${recipe.image}" alt="${recipe.name}">
                    <p>${recipe.description}</p>
                    <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                        ${stars}
                    </span>
                `;
                recipesContainer.appendChild(recipeElement);
            });
        } catch (error) {
            console.error("Error loading recipes:", error);
        }
    }

    loadRecipes(); 
});
