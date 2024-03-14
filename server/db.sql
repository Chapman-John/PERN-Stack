CREATE DATABASE booksdb;

CREATE TABLE IF NOT EXISTS books(
    books_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    author VARCHAR(255)
);

INSERT INTO books (name, author) VALUES ('Antifragile', 'Nassim Taleb');