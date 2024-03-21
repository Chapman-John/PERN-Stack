import React, { Fragment, useState } from "react";

const EditBook = ({ books }) =>
{
    // if (!books) return null;
    const [name, setName] = useState(books.name);
    const [author, setAuthor] = useState(books.author);
    // const [name, setName] = useState(books ? books.name : '');
    // const [author, setAuthor] = useState(books ? books.author : '');

    //edit book function

    const updateBook = async e =>
    {
        e.preventDefault();
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

            // window.location = "/";
            window.location.reload();
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
            >
                Edit
            </button>

            <div className="modal fade" id={`id${books.books_id}`} tabIndex="-1" role="dialog" aria-labelledby="editBookModal" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editBookModal">Edit Book</h5>
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
                            <button type="button" className="btn btn-warning" onClick={(e) => updateBook(e)}>Save changes</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EditBook;

