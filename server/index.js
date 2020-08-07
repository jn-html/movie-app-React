

const next = require('next')
const express = require('express');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {

  const server = express();
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