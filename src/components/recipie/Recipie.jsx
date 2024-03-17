import PropTypes from 'prop-types';

const Recipie = ({recipie}) => {
    //console.log(recipie);
    const {calories,recipe_name,recipe_image,short_description,ingredients,preparing_time}= recipie

    return (
        <div className="mt-10">
            <div className="card w-96 bg-base-100 shadow-2xl space-y-2">
                <div className='flex justify-center items-center mt-4'>
                    <img src={recipe_image} alt="recipies image.." className="rounded-xl h-56 w-80" />  
                </div> 

                <div className="p-4">
                    <h2 className='text-xl font-bold text-center'>{recipe_name}</h2>
                    <p className='text-center'>{short_description}</p>
                    <p className='text-xl font-medium'>Ingredients: {ingredients.length}</p>
                    <hr></hr>
                    <ul className='space-y-0 mb-2'>
                        {
                            ingredients.map(item => <li key={item}> <span className='text-4xl'>.</span> {item}</li>)
                        }
                    </ul>
                    <hr></hr>
                    <div className='flex justify-items-start mt-3'>
                        <div className='flex mr-10 g-5'>
                            <p><img src="https://i.ibb.co/DKbNDDF/Frame-1.png" alt=""/></p>
                            <div className='flex gap-1 ml-1'>
                                <p>{preparing_time}</p>
                                <p>minutes</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <p><img src="https://i.ibb.co/Xsmg3q4/Frame.png" alt="" /></p>
                            <p>{calories} calories</p>
                        </div>
                    </div>
                    <div className="ml-20 mt-2">
                        <button className="btn bg-[#0BE58A] rounded-full">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Recipie.propTypes ={
    recipie: PropTypes.object.isRequired
}
export default Recipie;