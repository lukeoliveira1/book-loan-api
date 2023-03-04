import mongoose from "mongoose";
import process from 'process'
import 'dotenv/config';

//connect db
mongoose.connect(process.env.DB_CONNECT)

let db = mongoose.connection

export default db