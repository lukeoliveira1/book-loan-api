import mongoose from "mongoose";

const bookLoanSchema = new mongoose.Schema(
  {
    id: {type: String},
    idReader: {type: mongoose.Schema.Types.ObjectId, ref: 'readers', required: true},
    idBook: {type: mongoose.Schema.Types.ObjectId, ref: 'books', required: true},
    borrowDate: {type: String, required: true},
    returnDate: {type: String, required: true},
  }
)

const bookLoans = mongoose.model('bookLoans', bookLoanSchema)

export default bookLoans