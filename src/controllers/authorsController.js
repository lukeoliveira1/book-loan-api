import Author from "../models/Author.js";

class AuthorController {

  static listAllAuthors = (req, res) => {
    Author.find((err, Author) => {
      res.status(200).send(Author)
    })
  }

  static createAuthor = (req, res) => {
    let author = new Author(req.body)
    author.save((err) => {
      if(err) {
        res.status(500).send({message: `${err.message} - failed!`})
      } else {
        res.status(201).send(author.toJSON())
      }
    })
  }

  static updateAuthor = (req, res) => {
    const id = req.params.id

    Author.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'The author updated successfully!'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static findAuthorById = (req, res) => {
    const id = req.params.id

    Author.findById(id, (err, author) => {
      if(err) {
        res.status(400).send({message: `${err.message} -  The author don't found!.`})
      } else {
        res.status(200).send(author)
      }
    })
  }

  static deleteAuthor = (req, res) => {
    const id = req.params.id;

    Author.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'The author was deleted successfully!'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  

}

export default AuthorController