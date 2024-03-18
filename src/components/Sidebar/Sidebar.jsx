import PropTypes from 'prop-types';
import Wanttocook from '../WantToCook/Wanttocook';
import CurrentlyCooking from '../currentlycooking/CurrentlyCooking'


const Sidebar = ({currentlyCoking,cook,handleCurrentlyCookingItems}) => {
    return (
        <div className="w-[400px] md:w-[700px] lg:w-[500px] h-3/4 mb-10 md:ml-24 lg:m-2 bg-white pt-5 pb-5 rounded-lg mt-2 shadow-sm shadow-black text-center ml-2">
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

                        key={idx} 
                        cookCard={cookCard} 
                        idx={idx} 
                        handleCurrentlyCookingItems={handleCurrentlyCookingItems}>

                        </Wanttocook>)
                    }
                </div>
                <hr></hr>
            </div>
            <hr></hr>

            <div className="text-center mt-5">
            <h1 className="text-xl font-medium">Currently cooking: {currentlyCoking.length}</h1>
                <hr></hr>
                <hr></hr>
                <div className="flex gap-28">
                    <p className='pl-24'>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                </div>
                <hr></hr>
                <div className='space-y-2'>
                    {
                        currentlyCoking.map((cookingItem,idx)=> <CurrentlyCooking key={idx} idx={idx} cookingItem={cookingItem}></CurrentlyCooking>)
                    } 
                </div>
                <hr></hr>
                <div className='flex justify-end items-center gap-10 mt-5 bg-green-100 p-5'>
                
                    <div>
                        <p>Total Time=</p>
                        <p>{0} minutes</p>
                    </div>
                
                    <div>
                        <p>Total Calories=</p>
                        <p>{0} calories</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

Sidebar.propTypes ={
    cook: PropTypes.object.isRequired,
    handleCurrentlyCookingItems: PropTypes.func,
    currentlyCoking: PropTypes.object.isRequired,
    time: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired

}
export default Sidebar;