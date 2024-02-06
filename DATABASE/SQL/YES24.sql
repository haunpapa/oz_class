USE mini;

-- SELECT title, author FROM books;
-- SELECT * FROM books WHERE rating >= 8.0;
-- SELECT title, review FROM books WHERE review >= 100 ORDER BY review DESC;
-- SELECT * FROM books WHERE ranking_weeks >= 4 ORDER BY ranking_weeks DESC;
-- SELECT * FROM books WHERE author = '김승호 저'
-- SELECT author, COUNT(*) AS books_count FROM Books GROUP BY author ORDER BY books_count;
-- SELECT * FROM books WHERE publisher = '웅진지식하우스'
-- SELECT publisher, COUNT(*) AS publishing_count FROM Books GROUP BY publisher ORDER BY publishing_count DESC;
-- SELECT author, AVG(rating) AS rating_avg FROM books GROUP BY author ORDER BY rating_avg DESC;
-- SELECT * FROM books WHERE ranking = 1
-- SELECT title, sales, review  FROM books ORDER BY sales DESC, review DESC LIMIT 10;\
-- SELECT * FROM books ORDER BY publishing DESC LIMIT 10;
-- SELECT author, AVG(rating) as rating_avg FROM books GROUP BY author ORDER BY rating_avg DESC;
-- SELECT publishing, COUNT(*) FROM books GROUP BY publishing ;
-- SELECT title, AVG(price) FROM books GROUP BY title;
-- SELECT * FROM books ORDER BY review DESC LIMIT 5;
-- SELECT ranking, AVG(review) FROM books GROUP BY ranking;
-- SELECT title,rating FROM books WHERE rating > (SELECT AVG(rating) FROM books) ;
-- SELECT title, price FROM books WHERE price > (SELECT AVG(price) FROM books) ORDER BY price DESC;
-- SELECT title, review FROM books WHERE review > (SELECT MAX(review) FROM books)
-- SELECT title, sales FROM books WHERE sales < (SELECT AVG(sales) FROM books) ORDER BY sales DESC; 
-- SELECT title, author, publishing FROM books 
-- WHERE author = (SELECT author FROM books GROUP BY author ORDER BY COUNT(*) DESC LIMIT 1)  
-- UPDATE Books SET price = 99999 WHERE title = "한국사"
-- UPDATE Books SET title = "책 제목 업데이트" WHERE author = "최태성 저"
-- DELETE FROM books WHERE sales = (SELECT MIN(sales) FROM books)
-- UPDATE books SET rating = rating + 1 WHERE publisher = '웅진하우스'
-- SELECT author, AVG(rating), AVG(sales) FROM books GROUP BY author ORDER BY AVG(rating) DESC, AVG(sales) DESC
-- SELECT publishing, AVG(price) FROM books GROUP BY publishing ORDER BY publishing ASC;
-- SELECT publisher, COUNT(*) AS book_count, SUM(review) AS review_sum FROM books GROUP BY publisher ORDER BY review_sum DESC;
-- SELECT ranking, AVG(sales) FROM books GROUP BY ranking;
-- SELECT price, AVG(review), AVG(rating) FROM books GROUP BY price ORDER BY price;

-- SELECT publisher, author, AVG(sales) as avg_sales
-- FROM Books
-- GROUP BY publisher, author
-- ORDER BY publisher, avg_sales DESC

-- SELECT title, review, price
-- FROM Books
-- WHERE review > (SELECT AVG(review) FROM Books) AND price < (SELECT AVG(price) FROM Books);

-- SELECT author, COUNT(DISTINCT title) as num_books
-- FROM Books
-- GROUP BY author
-- ORDER BY num_books DESC
-- LIMIT 1;

-- SELECT author, MAX(sales) as max_sales
-- FROM Books
-- GROUP BY author;

-- SELECT YEAR(publishing) as year, COUNT(*) as num_books, AVG(price) as avg_price
-- FROM Books
-- GROUP BY year;

-- SELECT publisher, COUNT(*), MAX(rating) - MIN(rating) as rating_difference
-- FROM Books
-- GROUP BY publisher
-- HAVING COUNT(*) >= 2
-- ORDER BY rating_difference DESC;

SELECT title, sales, rating / sales as ratio
FROM Books
ORDER BY ratio DESC


