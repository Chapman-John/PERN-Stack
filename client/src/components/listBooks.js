import React, { Fragment, useEffect, useState } from "react";

import EditBook from "./editBooks";

const ListBooks = () =>
{
    const [books, setBooks] = useState([]);

    //delete book function

    const deleteBook = async id =>
    {
        try
        {
            const deleteBook = await fetch(`http://localhost:9000/books/${id}`, {
                method: "DELETE"
            });
            // const response = await fetch(`http://localhost:9000/books/${id}`, {
            //     method: "DELETE"
            // });

            setBooks(books.filter(books => books.books_id !== id));
        } catch (err)
        {
            console.error(err.message);
        }
    };

    const getBooks = async () =>
    {
        try
        {
            const response = await fetch("http://localhost:9000/books");
            const jsonData = await response.json();

            setBooks(jsonData);
        } catch (err)
        {
            console.error(err.message);
        }
    };

    useEffect(() =>
    {
        getBooks();
    }, []);

    // console.log(books);

    return (
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(books => (
                        <tr key={books.books_id}>
                            <td>{books.name}</td>
                            <td>{books.author}</td>
                            <td>
                                {/* <EditBook book={book} /> */}
                                <EditBook books={books} />
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteBook(books.books_id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListBooks;