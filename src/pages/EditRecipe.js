import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css';

const EditRecipe = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const recipeToEdit = recipes.find(recipe => recipe.id === parseInt(id));
    if (recipeToEdit) {
      setName(recipeToEdit.name);
      setDescription(recipeToEdit.description);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecipe = {
      id: parseInt(id),
      name,
      description,
    };
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const updatedRecipes = recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
    navigate('/');
  };

  return (
    <section className="container">
      <div className="card">
        <div className="card-header">
          <h2>Edit Recipe</h2>
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
            <button type="submit" className="btn-primary">Update Recipe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditRecipe;
