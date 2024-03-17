import { useEffect } from "react";
import { useState } from "react"
import Recipe from "./Recipe/Recipe";
import PropTypes from 'prop-types';

const Recipes = ({handleRecipeCards}) => {
    const [recipes, setRecipes] = useState([])
    
    useEffect(()=>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])

    return (
        <div className="grid lg:grid-cols-2 space-y-5 lg:space-y-2">
            {
                recipes.map(recipe => <Recipe key={recipe.recipe_id} handleRecipeCards={handleRecipeCards} recipe={recipe}></Recipe>)
            }
        </div>
    );
};

Recipes.propTypes ={
    handleRecipeCards: PropTypes.func
}

export default Recipes;