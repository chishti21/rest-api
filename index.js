const express = require('express')
const app = express()
const port = 3000
require('./db/connection');
const Student=require('./models/student');
const StudetRouter=require('./routers/student');
app.use(express.json());
app.use(StudetRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})