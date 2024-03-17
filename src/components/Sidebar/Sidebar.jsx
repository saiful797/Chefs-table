import PropTypes from 'prop-types';
import Wanttocook from '../WantToCook/Wanttocook';

const Sidebar = ({cook}) => {
    console.log(cook);
    return (
        <div className="w-[500px] m-2 h-1/2 bg-white p-5 rounded-lg mt-2 shadow-sm shadow-black">
            <div className="text-center">
                <h1 className="text-xl font-medium">Want to cook: {cook.length}</h1>
                <hr></hr>
                <hr></hr>
                <div className="flex gap-16">
                    <p className='pl-12'>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                </div>
                <hr></hr>
                <div className='space-y-2'>
                    {
                        cook.map((cookCard,idx) => <Wanttocook key={cookCard.recipe_id} cookCard={cookCard} idx={idx}></Wanttocook> )
                    }
                </div>
                <hr></hr>
                <div>
                    <p></p>
                </div>
            </div>
            
            <hr></hr>

            <div className="text-center mt-5">
                <h1 className="text-xl font-medium">Currently cooking: 02</h1>
                <hr></hr>
                <hr></hr>
                <div className="flex gap-16">
                    <p className='pl-12'>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                </div>
                <hr></hr>
                <hr></hr>
            </div>

        </div>
    );
};

Sidebar.propTypes ={
    cook: PropTypes.object.isRequired
}
export default Sidebar;