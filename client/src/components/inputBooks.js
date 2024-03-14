import { useState } from "react";

function InputBooks() {
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { name, author };
            const response = await fetch("http://localhost:9000/books", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            console.log(response);
            // window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <>
            <h1 className="text-center mt-5">Input Book</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    className="form-control"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <button type="submit" className="btn btn-success">
                    Add
                </button>
            </form>
        </>
    );
}

export default InputBooks;