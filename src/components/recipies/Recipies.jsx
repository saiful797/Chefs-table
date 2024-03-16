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
        <div className="mt-10">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" class="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipies;