import express from "express"
import books from "./bookRoutes.js"
import authors from "./authorRoutes.js"
import publishers from "./publisherRoutes.js"
import reader from "./readerRoutes.js"
import bookLoan from "./bookLoanRoutes.js"

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send(({title: "You're welcome to book-sale-api!"}))
  })

  app.use(
    express.json(),
    books,
    authors,
    publishers,
    reader,
    bookLoan
  )
}

export default routes


