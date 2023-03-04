import Book from "../models/Book.js";

class BookController {

  static listAllBooks = (req, res) => {
    Book.find()
      .populate('author') 
      .populate('publisher') 
      .exec((err, Book) => {
      res.status(200).send(Book)
    })
  }

  static createBook = (req, res) => {
    let book = new Book(req.body)
    book.save((err) => {
      if(err) {
        res.status(500).send({message: `${err.message} - failed!`})
      } else {
        res.status(201).send(book.toJSON())
      }
    })
  }

  static updateBook = (req, res) => {
    const id = req.params.id
                              
    Book.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Book updated successfully!'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static findBookById = (req, res) => {
    const id = req.params.id

    Book.findById(id)
    .populate('author') 
    .populate('publisher') 
    .exec((err, book) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id's book don't found!.`})
      } else {
        res.status(200).send(book)
      }
    })
  }

  static deleteBook = (req, res) => {
    const id = req.params.id;

    Book.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Book deleted successfully!'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static listBookByPublisher = (req, res) => {
    /* list all books by publisher */
    const publisher = req.params.id;

    Book.find({'publisher': publisher}, {}, (err, books) => {
      res.status(200).send(books);
    })
  }
  

}

export default BookController