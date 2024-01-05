import express  from "express";
const app = express()


// middleware that is specific to this router
app.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
app.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the about route
app.get('/about', (req, res) => {
  res.send('About birds')
})


app.listen(3001)