import React from 'react';
import MovieCreateForm from '../../../components/movieCreateForm';
import { getMoviesById } from '../../../actions';


class EditMovie extends React.Component {

  // static getInitialProps({query}) {
  //   return {query}
  // }

  static async getInitialProps({query}) {
    const movie = await getMoviesById(query.id)

    return {movie}
  }

  // state ={
  //   movie: {
  //     name:'',
  //     description: '',
  //     rating: '',
  //     image: '',
  //     cover: '',
  //     longdesc: ''
  //   }
  // }

  // componentDidMount() {
  //   const { id } = this.props.query
  //   getMoviesById(id).then(movie =>{
  //     this.setState({movie})
  //   })
  // }

  render(){
    const { movie } = this.props
    return (
      <div className="container">
        <h1>Edit Movie</h1>
        <MovieCreateForm initialData={movie} />
      </div>
    )
  }
}

export default EditMovie;
