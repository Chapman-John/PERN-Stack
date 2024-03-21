import { Fragment, useState } from "react";

function InputBooks()
{
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");

    const onSubmitForm = async (e) =>
    {
        e.preventDefault();
        try
        {
            const body = { name, author };
            const response = await fetch("http://localhost:9000/books", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            console.log(response);
            window.location = "/";
        } catch (err)
        {
            console.error(err.message);
        }
    };

    return (
        <>
            <h1 className="text-center mt-5">Input Book</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>

                <div className="form-group">
                    <label htmlFor="bookName">Name:</label>
                    <input
                        type="text"
                        // id="bookName"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="bookAuthor">Author:</label>
                    <input
                        type="text"
                        // id="bookAuthor"
                        className="form-control"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-success align-self-end">
                    Add
                </button>
            </form>
        </>
        // <Fragment>
        //     <h1 className="text-center mt-5">Input Book</h1>
        //     <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        //         <input
        //             type="text"
        //             className="form-control"
        //             value={name}
        //             onChange={e => setName(e.target.value)}
        //         />
        //         <input
        //             type="text"
        //             className="form-control"
        //             value={author}
        //             onChange={e => setAuthor(e.target.value)}
        //         />
        //         <button className="btn btn-success">Add</button>
        //     </form>
        // </Fragment>
    );
}

export default InputBooks;