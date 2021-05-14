import React, { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./components/Recipe";

  const APP_ID = "";
  const API_KEY = "";

  const App = () => {
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('chicken')

    useEffect(() => {
      getRecipes()
    }, [query])


    const getRecipes = async () => {
      const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`);
      const data = await res.json();
      console.log(data.hits);
      setRecipes(data.hits)
    }

    const updateSearch = e => {
      setSearch(e.target.value)
    }

    const getSearch = e => {
      e.preventDefault();
      setQuery(search)
    }

  return (
    <div>
      <h1>Food Recipe Search</h1>
        <form className="form" onSubmit={getSearch}>
          <input type="text" value={search} onChange={updateSearch} />
          <button type="submit">Search</button>
        </form>

        {recipes.map((recipe) => (
          <Recipe key={recipe.label} label={recipe.recipe.label} type={recipe.recipe.dishType} img={recipe.recipe.image} />
        ))}
    </div>
  );
};

export default App;
