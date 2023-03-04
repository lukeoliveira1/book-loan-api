import mongoose from "mongoose";

const readerSchema = new mongoose.Schema(
  {
    id: {type: String},
    name: {type: String, required: true},
    cpf: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
  }
)

const readers = mongoose.model('readers', readerSchema)

export default readers