import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const RecipeForm = ({ onSubmit, initialData = { name: '', description: '', ingredients: '' } }) => {
  const [recipe, setRecipe] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { ...recipe, id: recipe.id || uuidv4() };
    onSubmit(newRecipe);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={recipe.name}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={recipe.description}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Ingredients</label>
        <input
          type="text"
          name="ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">Save Recipe</button>
    </form>
  );
};

export default RecipeForm;
