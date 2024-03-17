import { useEffect } from "react";
import { useState } from "react";
import Recipie from "../recipie/Recipie";

const Recipies = () => {
    const [recipies, setRecipies] = useState([]);

    useEffect(() => {
        fetch('/public/recipes.json')
        .then(res => res.json())
        .then(data => setRecipies(data))
    },[])

    return (
        
        <div className="grid md:grid-cols-2 gap-10 ml-10">
            {
                recipies.map(recipie => <Recipie key={recipie.recipe_id} recipie={recipie}></Recipie>)
            }
        </div>
    );
};

export default Recipies;