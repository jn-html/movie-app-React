

const next = require('next')
const express = require('express');
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const filePath = './data.json'
const fs = require('fs')
const path = require('path')
const moviesData = require(filePath);

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
    moviesData.push(movie)

    const pathToFile = path.join(__dirname, filePath)
    const stringifiedData = JSON.stringify(moviesData, null, 2)

    fs.writeFile(pathToFile, stringifiedData, (err) => {
      if (err) {
        return res.status(422), send(err)
      }
      return res.json('Movie has been succesfuly added!')
    })
  })

  // server.patch('/api/v1/movies/:id', (req, res) => {
  //   const { id } = req.params
  //   return res.json({message:`Updating post of id: ${id}`})
  // })

  // server.patch('/api/v1/movies/:slug', (req, res) => {
  //   return res.json({message:'HEllo there'})
  // })

  server.delete('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params
    // find movie in array
    const movieIndex = moviesData.findIndex(movie => movie.id === id)
    moviesData.splice(movieIndex, 1)

    const pathToFile = path.join(__dirname, filePath)
    const stringifiedData = JSON.stringify(moviesData, null, 2)

    fs.writeFile(pathToFile, stringifiedData, (err) => {
      if (err) {
        return res.status(422), send(err)
      }
      return res.json('Movie has been succesfuly deleted!')
    })
  })

  server.patch('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params
    const movie = req.body
    const movieIndex = moviesData.findIndex(movie => movie.id === id)
    
    moviesData[movieIndex] = movie

    const pathToFile = path.join(__dirname, filePath)
    const stringifiedData = JSON.stringify(moviesData, null, 2)

    fs.writeFile(pathToFile, stringifiedData, (err) => {
      if (err) {
        return res.status(422), send(err)
      }
      // return res.json('Movie has been succesfuly update!')
      return res.json(movie)
    })
  })

  

  // // We are handling all requests comming to our server
  // server.get('*', (req, res) => {
  //   // next.js is handling requests and providing pages we are navigating to
  //   return handle(req, res)
  // })

  // server.post('*', (req, res) => {
  //   // next.js is handling requests and providing pages we are navigating to
  //   return handle(req, res)
  // })


  const PORT = process.env.PORT || 3001;

  // handle from the handler handle *
  server.use(handle).listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on port ' + PORT)
  })
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