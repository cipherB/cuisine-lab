import React,{useEffect, useState} from 'react';
import Recipe from '../components/Recipe';

const Recipes = () => {

    const APP_ID = "673039fb";
    const APP_KEY = "e69875f584586baddcb5c29cb71db939	";

    const[recipes, setRecipes] = useState([]);
    const[search, setSearch] = useState("");
    const [query, setQuery] = useState('chicken');


    useEffect(()=> {
        getRecipes();
    }, [query]);
    
    const getRecipes = async ()=> {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits)
    }

    const updateSearch = (e) => {
        setSearch(e.target.value);
    };

    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    
    return (
        <div>
            <form onSubmit={getSearch} className="search-form" >
                <input type="text" className="search-bar" value={search} onChange={updateSearch} />
                <button type="submit" className="search-button" >
                Search
                </button>
            </form>
            <div className="recipes">
                {recipes.map(recipe =>(
                <Recipe 
                key={recipe.recipe.label} 
                title={recipe.recipe.label} 
                calories={recipe.recipe.calories} 
                image={recipe.recipe.image} 
                ingredients={recipe.recipe.ingredients}
                />
                ))}
            </div>
        </div>
    )
}

export default Recipes
