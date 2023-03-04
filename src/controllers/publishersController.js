import Publisher from "../models/Publisher.js";

class PublisherController {

  static listAllPublisher = (req, res) => {
    Publisher.find((err, publisher) => {
      res.status(200).send(publisher)
    })
  }

  static createPublisher = (req, res) => {
    let publisher = new Publisher(req.body)
    publisher.save((err) => {
      if(err) {
        res.status(500).send({message: `${err.message} - failed!`})
      } else {
        res.status(201).send(publisher.toJSON())
      }
    })
  }

  static updatePublisher = (req, res) => {
    const id = req.params.id

    Publisher.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'The publisher was updated successfully!'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static findPublisherById = (req, res) => {
    const id = req.params.id

    Publisher.findById(id, (err, publisher) => {
      if(err) {
        res.status(400).send({message: `${err.message} - The publisher don't found!.`})
      } else {
        res.status(200).send(publisher)
      }
    })
  }

  static deletePublisher = (req, res) => {
    const id = req.params.id;

    Publisher.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'The publisher was deleted successfully!'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

}

export default PublisherController