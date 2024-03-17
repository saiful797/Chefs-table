import PropTypes from 'prop-types';

const Recipe = ({recipe}) => {
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories} = recipe;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={recipe_image} alt="Shoes" className="rounded-xl h-56 w-80" />
            </figure>
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">{recipe_name}</h2>
                <p>{short_description}</p>
                <h1><span className='text-xl font-medium'>Ingredients:</span> {ingredients.length}</h1>
                <hr></hr>
                <ul>
                    {
                        ingredients.map(item => <li key={item}><span className='text-xl font-bold'>. </span>{item}</li>)
                    }
                </ul>
                <hr></hr>
                <div className='flex gap-10'>
                    <div className='flex gap-1'>
                        <p><img src="https://i.ibb.co/DKbNDDF/Frame-1.png" alt="" /></p>
                        <div className='flex gap-1'>
                            <p className='flex'>{preparing_time} </p>
                            <p> minutes</p>
                        </div>
                    </div>
                    <div className='flex gap-1'>
                        <img src="https://i.ibb.co/Xsmg3q4/Frame.png" alt="" />
                        <p>{calories} calories</p>
                    </div>
                </div>
                <hr></hr>
                <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

Recipe.propTypes ={
    recipe: PropTypes.object.isRequired
}
export default Recipe;