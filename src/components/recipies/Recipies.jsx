import { useEffect } from "react";
import { useState } from "react";

const Recipies = () => {
    const [recipes, setRecips] = useState([]);

    useEffect(() => {
        fetch('/public/recipes.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])

    return (
        <div>
            
        </div>
    );
};

export default Recipies;