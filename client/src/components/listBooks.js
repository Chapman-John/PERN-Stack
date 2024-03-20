import React, { Fragment, useState } from "react";

const ListBooks = () =>
{
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");

    const onSubmitForm = async e =>
    {
        e.preventDefault();
        try
        {
            const body = { name, author };
            const response = await fetch("http://localhost:9000/books", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            // console.log(response);
            window.location = "/";
        } catch (err)
        {
            console.error(err.message);
        }
    }
    return (
        <Fragment>
            <h1 className="text-center mt-5">List Books</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={e => setName(e.target.value)} />
                <input
                    type="text"
                    className="form-control"
                    value={author}
                    onChange={e => setAuthor(e.target.value)} />
                <button className="btn btn-success">List</button>
            </form>

        </Fragment>
    );

};

export default ListBooks;