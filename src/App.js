import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddRecipe from './pages/AddRecipe';
import EditRecipe from './pages/EditRecipe';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/add-recipe' element={<AddRecipe />} />
        <Route path='/edit-recipe/:id' element={<EditRecipe />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
