import { useState } from 'react';
import Modal from './modal';
import MovieCreateForm from './movieCreateForm';
import { createMovie } from '../actions';


const SideMenu = (props) => {
	const { categories } = props

	const handleCreateMovie = (movie) => {
		createMovie(movie).then((movies) => {
			//  CLose modal after create
			console.log(JSON.stringify(movies))
		})
	}

  return (
		<div>
			{/* Containment */}
			<Modal hasSubmit={false}>
				<MovieCreateForm handleFormSubmit={handleCreateMovie} />
			</Modal>
			<h1 className="my-4">{props.appName}</h1>
			<div className="list-group">
				{ categories.map(c => <a key={c.id}	href="#" className="list-group-item">{c.name}</a>)}
			</div>
		</div>
	);
}

export default SideMenu;
