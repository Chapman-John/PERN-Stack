const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./database");

require('dotenv').config();

//middleware 
app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:3000' // or wherever your React app is hosted
//     // origin: 'http://localhost:3000', // or wherever your React app is hosted
//     // credentials: true // if you're using credentials (e.g., cookies) in your requests
// }));
app.use(express.json());


//routes

app.post("/books", async (req, res) =>
{
    try
    {
        const { name } = req.body;
        const { author } = req.body;
        const newBook = await pool.query("INSERT INTO books (name, author) VALUES ($1, $2) RETURNING *",
            [name, author]
        );

        res.json(newBook.rows[0]);

    } catch (err)
    {
        console.error(err.message);
    }
});

app.get("/books", async (req, res) =>
{
    try
    {
        const allBooks = await pool.query("SELECT * FROM books");
        res.json(allBooks.rows);


    } catch (err)
    {
        console.error(err.message);
    }
});

// app.put("/books/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { name } = req.body;
//         const { author } = req.body;
//         const updateBooks = await pool.query("UPDATE books");

//     } catch (err) {
//         console.error(err.message);
//     }
// });

// app.delete("/books/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deleteBooks = await pool.query("DELETE FROM books WHERE books_id = $1",
//         [id]
//         );
//         res.json("Book was deleted")
//     } catch (err) {
//         console.error(err.message);
//     }
// });

app.listen(9000, () =>
{
    console.log("Server is running on port 9000");
});