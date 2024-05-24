import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecipeCard = ({ recipe, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit-recipe/${recipe.id}`);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{recipe.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{recipe.description}</h6>
        <p className="card-text">{recipe.ingredients}</p>
        <button onClick={handleEdit} className="btn btn-primary">Edit</button>
        <button onClick={() => onDelete(recipe.id)} className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default RecipeCard;
