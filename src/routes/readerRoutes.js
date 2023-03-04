import express from "express"
import ReaderController from "../controllers/readerController.js"

const router = express.Router()

router
  .get("/readers", ReaderController.listAllReaders)
  .get("/readers/:id", ReaderController.findReaderById)
  .post("/readers", ReaderController.createReader)
  .put("/readers/:id", ReaderController.updateReader)
  .delete("/readers/:id", ReaderController.deleteReader)

export default router
