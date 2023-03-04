import express from "express"
import PublisherController from "../controllers/publishersController.js"

const router = express.Router()

router
  .get("/publishers", PublisherController.listAllPublisher)
  .get("/publishers/:id", PublisherController.findPublisherById)
  .post("/publishers", PublisherController.createPublisher)
  .put("/publishers/:id", PublisherController.updatePublisher)
  .delete("/publishers/:id", PublisherController.deletePublisher)

export default router
