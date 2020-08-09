import axios from 'axios';


export default async (req, res) => {
  const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts')
  const posts = postsResponse.data

  // slice to pick 20 data (outta 100, 4exemple)
  return res.json(posts.slice(0, 20))
}
