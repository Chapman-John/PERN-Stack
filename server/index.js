const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./database");

require('dotenv').config();

//middleware 
app.use(cors());
app.use(express.json());


// Routes

// Create a new book
app.post("/books", async (req, res) =>
{
    try
    {
        const { name, author } = req.body;
        const newBook = await pool.query(
            "INSERT INTO books (name, author) VALUES ($1, $2) RETURNING *",
            [name, author]
        );
        res.json(newBook.rows[0]);
    } catch (err)
    {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Get all books
app.get("/books", async (req, res) =>
{
    try
    {
        const allBooks = await pool.query("SELECT * FROM books");
        res.json(allBooks.rows);
    } catch (err)
    {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Get a single book by ID
app.get("/books/:id", async (req, res) =>
{
    try
    {
        const { id } = req.params;
        const book = await pool.query(
            "SELECT * FROM books WHERE books_id = $1",
            [id]
        );

        if (book.rows.length === 0)
        {
            return res.status(404).json({ message: "Book not found" });
        }

        res.json(book.rows[0]);
    } catch (err)
    {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Update a book
app.put("/books/:id", async (req, res) =>
{
    try
    {
        const { id } = req.params;
        const { name, author } = req.body;
        const updateBook = await pool.query(
            "UPDATE books SET name = $1, author = $2 WHERE books_id = $3 RETURNING *",
            [name, author, id]
        );
        res.json(updateBook.rows[0]);
        res.json("Book was updated!");
    } catch (err)
    {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Delete a book
app.delete("/books/:id", async (req, res) =>
{
    try
    {
        const { id } = req.params;
        const deleteBook = await pool.query(
            "DELETE FROM books WHERE books_id = $1",
            [id]
        );
        res.json("Book was deleted");
    } catch (err)
    {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

app.listen(9000, () =>
{
    console.log("Server is running on port 9000");
});