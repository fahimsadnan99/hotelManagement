const mongoose = require('mongoose')
const App = require('./app')

const PORT = process.env.PORT || 3002
const DB = process.env.DB_URL; 

App.listen(PORT, () => {
    console.log("SERVER IS RUNNING ON " + PORT);
})


mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connect Successful"))
  .catch(() => console.log("Database Connection Faild"));