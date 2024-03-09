const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

let books = [];

app.get('/books', (req, res) => {
    res.json(books);
});

app.post('/review', (req, res) => {
    const { bookTitle, author, rating, review } = req.body;
    const newReview = { bookTitle, author, rating, review };
    books.push(newReview);
    res.status(201).json({ message: 'Review added successfully' });
});

app.listen(port, () => {
    console.log(Server is running at http://localhost:${port});
});
Frontend (HTML, CSS, JavaScript):
public/index.html:

html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Book Review Website</title>
</head>
<body>
    <div id="app">
        <h1>Welcome to the Book Review Website</h1>
        <div id="bookList"></div>
        <div id="reviewForm">
            <h2>Add a Review</h2>
            <input type="text" id="bookTitle" placeholder="Book Title">
            <input type="text" id="author" placeholder="Author">
            <input type="number" id="rating" placeholder="Rating (1-5)">
            <textarea id="review" placeholder="Write your review"></textarea>
            <button onclick="submitReview()">Submit Review</button>
        </div>
    </div>
    <script src="app.js"></script>
</body>
</html>
