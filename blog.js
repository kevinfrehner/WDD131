const articles = [
    {
        id: 1,
        date: "February 4, 2025",
        ageRange: "10-14",
        genre: "Fantasy",
        rating: "★★★★",
        title: "Septimus Heap",
        imageUrl: "placeholder.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, fugit?"
    },
    {
        date: "January 20, 2025",
        ageRange: "8-12",
        genre: "Adventure",
        rating: "★★★★★",
        title: "Percy Jackson",
        imageUrl: "placeholder2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, fugit?"
    }
];

function displayArticles() {
    const articlesContainer = document.querySelector(".reviews"); // Make sure your section has this class

    articles.forEach(item => {
        const article = document.createElement("article");
        article.classList.add("review");
        article.innerHTML = `
        <div class="details">
            <time datetime="${item.date}">${item.date}</time>
            <p>Age: ${item.ageRange}</p>
            <p>Genre: ${item.genre}</p>
            <p>Rating: ${item.rating}</p>
        </div>
        <div class="content">
            <h2>${item.title}</h2>
            <img src="${item.imageUrl}" alt="cover of ${item.title}">
            <p>${item.description}</p>
        </div>
    `;
    articlesContainer.appendChild(article);
    });
}
document.addEventListener("DOMContentLoaded", displayArticles);
