const express = require('express')
const app = express()
const port = process.env.PORT || 80

app.get('/', (req, res) => {
  res.send('Hello from nishchal!')
})

app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})