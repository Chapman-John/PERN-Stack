import React, { Fragment, useState } from "react";
import $ from 'jquery';

const EditBook = ({ books }) =>
// const EditBook = () =>
{
    // console.log(books.books_id);
    const [name, setName] = useState(books.name);
    const [author, setAuthor] = useState(books.author);

    const updateBook = async e =>
    {
        e.preventDefault();
        console.log("Updating book...");
        try
        {
            const body = { name, author };
            const response = await fetch(
                `http://localhost:9000/books/${books.books_id}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                }
            );
            if (!response.ok)
            {
                throw new Error('Failed to update book');
            }


            const updatedBook = await response.json();
            console.log('Updated Book:', updatedBook);


            alert('Book was updated successfully');

            // Refresh the page after update
            // window.location.reload();
            // window.location.reload(); // Refresh the page after update
            window.location = "/";
        } catch (err)
        {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-warning"
                data-toggle="modal"
                data-target={`#id${books.books_id}`}
            // onClick={`id${books.books_id}`}
            >
                Edit
            </button>

            <div
                className="modal fade"
                id={`id${books.books_id}`}
                tabIndex="-1"
                role="dialog"
                // aria-labelledby="EditBook"
                aria-labelledby={`id${books.books_id}Label`}
                aria-hidden="true"
            // onClick={() => setName(books.name)}
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="EditBook">Edit Book</h5>
                            <button type="button" className="close" data-dismiss="modal">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="text"
                                className="form-control mt-2"
                                placeholder="Author"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" onClick={updateBook}>Save changes</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EditBook;
