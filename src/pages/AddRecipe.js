import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const AddRecipe = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: Date.now(),
      name,
      description,
    };
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    localStorage.setItem('recipes', JSON.stringify([...recipes, newRecipe]));
    navigate('/');
  };

  return (
    <section className="container">
      <div className="card">
        <div className="card-header">
          <h2>Add Recipe</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary">Add Recipe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddRecipe;
