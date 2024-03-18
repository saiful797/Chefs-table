import PropTypes from 'prop-types';

const CurrentlyCooking = ({cookingItem,idx}) => {
    const {recipe_name,preparing_time,calories}= cookingItem;
    return (
        <div className='flex gap-3 bg-slate-50 justify-between p-2 rounded-xl w-auto'>
            <p>{idx + 1}</p>
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
        </div>
    );
};
CurrentlyCooking.propTypes ={
    cookingItem: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
}
export default CurrentlyCooking;