import express from "express"
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"

//connect db

//handle-connection-error
db.on("error", console.log.bind(console, "Connection error!")) 
//open connection
db.once("open", () => {
  console.log("Connection successfully!")
}) 

//create server
const app = express()

app.use(express.json())

routes(app)

export default app 