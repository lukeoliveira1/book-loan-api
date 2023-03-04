import Reader from "../models/Reader.js";

class ReaderController {

  static listAllReaders = (req, res) => {
    Reader.find((err, reader) => {
      res.status(200).send(reader)
    })
  }

  static createReader = (req, res) => {
    let reader = new Reader(req.body)
    reader.save((err) => {
      if(err) {
        res.status(500).send({message: `${err.message} - failed!`})
      } else {
        res.status(201).send(reader.toJSON())
      }
    })
  }

  static updateReader = (req, res) => {
    const id = req.params.id

    Reader.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'The reader was updated successfully!'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static findReaderById = (req, res) => {
    const id = req.params.id

    Reader.findById(id ,(err, reader) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id's reader don't found!.`})
      } else {
        res.status(200).send(reader)
      }
    })
  }

  static deleteReader = (req, res) => {
    const id = req.params.id;

    Reader.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'The reader was deleted successfully!'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

}

export default ReaderController