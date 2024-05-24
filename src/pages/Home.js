import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import '../App.css';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(storedRecipes);
  }, []);

  const handleDelete = (id) => {
    const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
    setRecipes(updatedRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#d3d3d3" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-12 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <nav>
                      <button onClick={() => navigate('/add-recipe')} className="btn btn-primary me-2">Add Recipe</button>
                    </nav>
                    <h1>Recipes</h1>
                    <div className="recipe-list">
                      {recipes.map(recipe => (
                        <RecipeCard key={recipe.id} recipe={recipe} onDelete={handleDelete} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
