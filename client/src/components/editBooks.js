import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const EditBook = ({ books }) =>
{
    const [name, setName] = useState(books.name);
    const [author, setAuthor] = useState(books.author);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const updateBook = async e =>
    {
        e.preventDefault();
        // console.log("Updating book...");
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

            // alert('Book was updated successfully');

            // Refresh the page after update
            window.location = "/";
        } catch (err)
        {
            console.error(err.message);
        }
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={updateBook}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditBook;