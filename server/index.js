

const next = require('next')
const express = require('express');
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const moviesData = require('./data.json');

app.prepare().then(() => {

  const server = express();
  server.use(bodyParser.json())

  // arrow function
  server.get('/api/v1/movies', (req, res) => {
    return res.json(moviesData)
  })

  server.get('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params

    // const movieIndex = moviesData.find(movie => movie.id === id)
    // const movie = moviesData[movieIndex]
    const movie = moviesData.find(movie => movie.id === id)

    return res.json(movie)
  })

  server.post('/api/v1/movies', (req, res) => {
    const movie = req.body
    return res.json({...movie, createdTime: 'today', author: 'JN'})
  })

  server.patch('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params
    return res.json({message:`Updating post of id: ${id}`})
  })

  // server.patch('/api/v1/movies/:slug', (req, res) => {
  //   return res.json({message:'HEllo there'})
  // })

  server.delete('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params
    return res.json({message:`Deleting post of id: ${id}`})
  })

  // server.get('/faq', (req, res) => {
  //   res.send(`
  //     <html>
  //       <head></head>
  //       <body>
  //         <h1>HEllo WOrld!!</h1>
  //       </body>
  //     </html>
  //   `)
  // })

  // We are handling all requests comming to our server
  server.get('*', (req, res) => {
    // next.js is handling requests and providing pages we are navigating to
    return handle(req, res)
  })

  const PORT = process.env.PORT || 3000;

  server.use(handle).listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on port ' + PORT)
  })
})