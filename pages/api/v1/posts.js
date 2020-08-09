
import axios from 'axios'


export default async (req, res) => {

  if (req.method === 'POST') {
    // parse stop 1caracter/ line
    const postData = JSON.parse(req.body)
    console.log(postData)

    return res.json({
      status: 'Saving Post to DB!',
      ...postData
    })
  } else {
    const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const posts = postsResponse.data

    // slice to pick 20 first data (outta 100, 4exemple)
    return res.json(posts.slice(0, 20))
  }
}

// Can get if/else statement or switch etc...

