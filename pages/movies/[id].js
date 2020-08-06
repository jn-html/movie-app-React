// Next offer bracket so id is dynamique (Detail page)
import { useRouter } from 'next/router';
import { getMoviesById } from '../../actions';

const Movie = (props) => {
  const router = useRouter()
   // id here is named after the file's name
	const { id } = router.query
	const { movie } = props

  return (
      <div className="container">
        <div className="jumbotron">
					<h1 className="display-4">{ movie.name }</h1>
					<p className="lead">{ movie.description }</p>
					<hr className="my-4"/>
					<p>{ movie.genre }</p>
					<p className="lead">
    			<a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  				</p>
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
	const movie = await getMoviesById(query.id)
	
	return { movie }
}

export default Movie;
