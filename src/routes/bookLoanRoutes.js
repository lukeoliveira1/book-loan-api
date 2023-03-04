import express from "express"
import BookLoanController from "../controllers/bookLoanController.js"

const router = express.Router()

router
  .get("/book-loans/readers/:id", BookLoanController.listBookLoanByReader) 
  .get("/book-loans/books/:id", BookLoanController.listBookLoanByBook)
  .get("/book-loans/:id", BookLoanController.findBookLoanById)
  .get("/book-loans", BookLoanController.listAllBookLoan)
  .post("/book-loans", BookLoanController.createBookLoan)
  .delete("/book-loans/:id", BookLoanController.deleteBookLoan)

export default router
