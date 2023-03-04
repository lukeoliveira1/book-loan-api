import BookLoan from "../models/BookLoan.js";
import Book from "../models/Book.js";

class BookLoanController {

  static listAllBookLoan = (req, res) => {
    BookLoan.find()
      .populate('idReader') //merge datas of foreign keys
      .populate('idBook') 
      .exec((err, bookLoan) => {
          res.status(200).send(bookLoan)
    })
  }

  static createBookLoan = async (req, res) => {
    const { idReader, idBook, borrowDate, returnDate } = req.body;

    try {
  
      const bookLoan = new BookLoan({
        idReader: idReader,
        idBook: idBook,
        borrowDate: borrowDate,
        returnDate: returnDate
      });
  
      //accessing bookLoan.book to set book.loaned_book to true
      const bookObj = await Book.findById(idBook);
      if (!bookObj) {
        return res.status(404).send({ message: 'The book not found!' });
      }
      if(bookObj.loaned_book == true) {
        return res.status(400).send({ message: 'The book is already loaned!'})
      }

      bookLoan.idBook = bookObj;
      bookLoan.idBook.loaned_book = true;
  
      await bookLoan.save();
      await bookLoan.idBook.save();
  
      res.status(201).send(bookLoan.toJSON());

    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  }

  static findBookLoanById = (req, res) => {
    const id = req.params.id

    BookLoan.findById(id)
    .populate('idReader') 
    .populate('idBook') 
    .exec((err, bookLoan) => {
      if(err) {
        res.status(400).send({message: `${err.message} - The book loan don't found!.`})
      } else {
        res.status(200).send(bookLoan)
      }
    })
  }

  static deleteBookLoan = async (req, res) => {
    const id = req.params.id;

    //accessing bookLoan.book to set book.loaned_book to true
    const newValueLoaned_book = false;
  
    const bookLoan = await BookLoan.findById(id).populate('idBook');
  
    if (!bookLoan) {
      return res.status(404).send({ message: 'The book loan not found' });
    }

    bookLoan.idBook.loaned_book = newValueLoaned_book;
    await bookLoan.idBook.save();
  
    await BookLoan.findByIdAndDelete(id)
    res.status(200).send({message: 'The book loan was deleted successfully!'})
  }

  static listBookLoanByReader= (req, res) => {
    /* list all loans by reader */
    const reader = req.params.id;

    BookLoan.find({'idReader': reader})
    .populate('idReader') 
    .populate('idBook') 
    .exec((err, bookLoans) => {
      res.status(200).send(bookLoans);
    })
  }

  static listBookLoanByBook= (req, res) => {
    /* list all loans by book */
    const book = req.params.id;

    BookLoan.find({'idBook': book})
    .populate('idReader') 
    .populate('idBook') 
    .exec((err, bookLoans) => {
      res.status(200).send(bookLoans);
    })

  }

}

export default BookLoanController