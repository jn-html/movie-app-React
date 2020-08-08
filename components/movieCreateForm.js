import { useState, useEffect } from "react";

const MovieCreateForm = (props) => {

  const [ isInitialDataLoaded, setIsInitialDataLoaded] = useState(false)

  const defaultData = {
    name:'',
    description: '',
    rating: '',
    image: '',
    cover: '',
    longdesc: ''
  }

  const formData = props.initialData ? {...props.initialData} : defaultData

  const [form, setForm] = useState(formData);

  // useEffect(()=> {
  //   if (props.initialData) {
  //     setForm(props.initialData)
  //     setIsInitialDataLoaded(true)
  //   }
  //   // write this to stop from using effect everytime component re-render
  // }, [isInitialDataLoaded])

  const handleChange = (event) => {
    const target = event.target
    const name = target.name
    setForm ({
      ...form,
      [name]: target.value
    })
  }

  const handleGenreChange = (event) => {
    // const options = event.target.options
    const { options } = event.target
    const optionsLength = options.length
    let value = []

    for (let i = 0; i < optionsLength; i++) {
      if (options[i].selected) {
        value.push(options[i].value)
      }
    }
    setForm ({
      ...form,
      // to get the return of the array in string, puts ","
      genre: value.toString()
    })
  }

  const submitForm = () => {
    // call here function to create movie from props
    // destructure to prevent error on changed value
    props.handleFormSubmit({...form})
  }


  return (
    <form>
      {/* { JSON.stringify(form)} */}
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          value={form.name}
          name="name"
          type="text"
          className="form-control"
          id="name"
          aria-describedby="emailHelp"
          placeholder="Lord of the Rings"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          onChange={handleChange}
          value={form.description}
          name="description"
          type="text"
          className="form-control"
          id="description"
          placeholder="Somewhere in Middle-earth..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Rating</label>
        <input
          onChange={handleChange}
          value={form.rating}
          name="rating"
          type="number"
          max="5"
          min="0"
          className="form-control"
          id="rating"
          placeholder="3"
        />
        <small id="emailHelp" className="form-text text-muted">
          Max: 5, Min: 0{" "}
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          onChange={handleChange}
          value={form.image}
          name="image"
          type="text"
          className="form-control"
          id="image"
          placeholder="http://....."
        />
      </div>
      <div className="form-group">
        <label htmlFor="cover">Cover</label>
        <input
          onChange={handleChange}
          value={form.cover}
          name="cover"
          type="text"
          className="form-control"
          id="cover"
          placeholder="http://......"
        />
      </div>
      <div className="form-group">
        <label htmlFor="longDesc">Long Description</label>
        <textarea 
          onChange={handleChange}
          value={form.longDesc}
          name="longDesc"
          className="form-control" 
          id="longDesc" 
          rows="3"></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <select 
          onChange={handleGenreChange}
          multiple 
          className="form-control" 
          id="genre">
          <option>drama</option>
          <option>music</option>
          <option>adventure</option>
          <option>historical</option>
          <option>action</option>
        </select>
      </div>
      <button onClick={submitForm} type="button" className="btn btn-primary">Save Movie</button>
    </form>
  );
};

export default MovieCreateForm;
