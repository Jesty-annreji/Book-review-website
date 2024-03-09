document.addEventListener("DOMContentLoaded", function () {
    const reviewsContainer = document.getElementById("reviews-container");
    const reviewForm = document.getElementById("review-form");

    reviewForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const bookTitle = document.getElementById("book-title").value;
        const review = document.getElementById("review").value;

        // You can send this data to the server for processing and storage
        console.log("Book Title:", bookTitle);
        console.log("Review:", review);

        // For simplicity, just display the review on the frontend
        displayReview(bookTitle, review);

        // Clear the form after submission
        reviewForm.reset();
    });

    function displayReview(title, content) {
        const reviewDiv = document.createElement("div");
        reviewDiv.innerHTML = <h3>${title}</h3><p>${content}</p>;
        reviewsContainer.appendChild(reviewDiv);
    }
});
