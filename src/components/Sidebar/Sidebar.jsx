import PropTypes from 'prop-types';
import Wanttocook from '../WantToCook/Wanttocook';

const Sidebar = ({cook,handleCurrentlyCookingItems}) => {
    console.log(cook);
    return (
        <div className="w-[400px] md:w-[700px] lg:w-[500px] h-3/4 mb-10 md:ml-24 lg:m-2 bg-white pt-5 pb-5 rounded-lg mt-2 shadow-sm shadow-black text-center">
            <div className="text-center">
                <h1 className="text-xl font-medium">Want to cook: {cook.length}</h1>
                <hr></hr>
                <hr></hr>
                <div className="flex gap-16">
                    <p className='pl-5 md:pl-12'>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                </div>
                <hr></hr>
                <div className='space-y-2'>
                    {
                        cook.map((cookCard,idx) => 
                        <Wanttocook 

                        key={cookCard.recipe_id} 
                        cookCard={cookCard} 
                        idx={idx} 
                        handleCurrentlyCookingItems={handleCurrentlyCookingItems}>

                        </Wanttocook> )
                    }
                </div>
                <hr></hr>
                <div>
                    <p></p>
                </div>
            </div>
            
            <hr></hr>

            <div className="text-center mt-5">
                <h1 className="text-xl font-medium">Currently cooking: 0</h1>
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
    cook: PropTypes.object.isRequired,
    handleCurrentlyCookingItems: PropTypes.func
}
export default Sidebar;