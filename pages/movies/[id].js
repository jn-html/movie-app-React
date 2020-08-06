// Next offer bracket so id is dynamique
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
					<h1 className="display-4">{movie.name}</h1>
					<p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
					<hr className="my-4"/>
					<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
					<p className="lead">
    			<a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  				</p>
      	</div>
				<p>
					Some description about the movie
				</p>
			</div>
  )
}

// Call getMovieById ("2")
Movie.getInitialProps = async () => {
	const movie = await getMoviesById("2")
	
	return { movie }
}

export default Movie;
