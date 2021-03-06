// Next offer bracket so id is dynamique (Detail page)
import { useRouter } from 'next/router';
import { getMovieById, deleteMovie } from '../../../actions';
import Link from 'next/link';

const Movie = (props) => {
  const router = useRouter()
   // id here is named after the file's name
	const { id } = router.query
	const { movie } = props

	const handleDeleteMovie = () => {
		deleteMovie(id).then(()=> {
			router.push('/')
		})
	}

  return (
      <div className="container">
        <div className="jumbotron">
					<h1 className="display-4">{ movie.name }</h1>
					<p className="lead">{ movie.description }</p>
					<hr className="my-4"/>
					<p>{ movie.genre }</p>
					<p className="lead"></p>
    			<button className="btn btn-primary btn-lg mr-2" href="#" role="button">Learn more</button>
					<button onClick={() => handleDeleteMovie(id)} className="btn btn-danger btn-lg mr-2" href="#" role="button">Delete</button>
					<Link href='/movies/[id]/edit' as={`/movies/${id}/edit`}>
						<button  className="btn btn-warning btn-lg" href="#" role="button">Edit</button>
						{/* onClick={() => router.push(`/movies/${id}/edit`)} */}
					</Link>
      	</div>
				<p className="desc-text">
					{ movie.longDesc }
				</p>
				<style jsx>{`
					.desc-text {
						font-size: 19px;
					}
				`}
				</style>
			</div>
  )
}

// Call getMovieById ("2")
Movie.getInitialProps = async ({ query }) => {
	// const {id} = context.query
	const movie = await getMovieById(query.id)
	
	return { movie }
}

export default Movie;
