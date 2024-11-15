CREATE DATABASE IF NOT EXISTS homework_9;
USE homework_9;

CREATE TABLE IF NOT EXISTS library (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS books (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS libraryBook (
    id INT(11) NOT NULL AUTO_INCREMENT,
    libraryID INT(11) NOT NULL,
    bookID INT(11) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (libraryID) REFERENCES library(id) ON DELETE CASCADE,
    FOREIGN KEY (bookID) REFERENCES books(id) ON DELETE CASCADE
);

INSERT INTO library (name) VALUES ('Quinn Library');
INSERT INTO library (name) VALUES ('Queens Library');
INSERT INTO library (name) VALUES ('New York Public Library');

INSERT INTO books (name) VALUES ('The Great Gatsby');
INSERT INTO books (name) VALUES ('To Kill a Mockingbird');
INSERT INTO books (name) VALUES ('The Catcher in the Rye');
INSERT INTO books (name) VALUES ('1984');
INSERT INTO books (name) VALUES ('Moby Dick');
INSERT INTO books (name) VALUES ('Pride and Prejudice');

INSERT INTO libraryBook (libraryID, bookID) VALUES (1, 1);
INSERT INTO libraryBook (libraryID, bookID) VALUES (1, 2);
INSERT INTO libraryBook (libraryID, bookID) VALUES (1, 3);
INSERT INTO libraryBook (libraryID, bookID) VALUES (1, 4);
INSERT INTO libraryBook (libraryID, bookID) VALUES (2, 3);
INSERT INTO libraryBook (libraryID, bookID) VALUES (2, 5);
INSERT INTO libraryBook (libraryID, bookID) VALUES (3, 1);
INSERT INTO libraryBook (libraryID, bookID) VALUES (3, 2);
INSERT INTO libraryBook (libraryID, bookID) VALUES (3, 6);

SELECT * FROM library WHERE id = 1;

SELECT * FROM books WHERE name LIKE '%Catcher%';

SELECT * FROM books ORDER BY name ASC;

SELECT b.name AS book_name, l.name AS library_name
FROM books b
JOIN libraryBook lb ON b.id = lb.bookID
JOIN library l ON lb.libraryID = l.id;

UPDATE books 
SET name = 'The Catcher in the Rye'
WHERE id = 3;

DELETE FROM books WHERE id = 1;

