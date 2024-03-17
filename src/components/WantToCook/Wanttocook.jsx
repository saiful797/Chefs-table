import PropTypes from 'prop-types'

const Wanttocook = ({idx, cookCard,handleCurrentlyCookingItems}) => {
    const {id,recipe_name,preparing_time,calories} = cookCard;
    return (
        <div className='flex gap-3 bg-slate-50 justify-between p-2 rounded-xl w-auto'>
            <p>{idx+1}</p>
            <div className='flex gap-1'>
                <p>{recipe_name}</p>
            </div>
            <div className='flex gap-1'>
                <p className='flex'>{preparing_time} </p>
                <p> minutes</p>
            </div>
            <div>
            <p>{calories} calories</p>
            </div>
            <button onClick={() => handleCurrentlyCookingItems(id,cookCard)} className='btn bg-[#0BE58A] rounded-full text-sm'>Preparing</button>
        </div>
    );
};

Wanttocook.propTypes ={
    cookCard: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
    handleCurrentlyCookingItems: PropTypes.func
}
export default Wanttocook;