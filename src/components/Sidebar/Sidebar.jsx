const Sidebar = () => {
    return (
        <div className="w-96 h-1/2 bg-white p-5 rounded-lg mt-2 shadow-sm shadow-black">
            <div className="text-center">
                <h1 className="text-xl font-medium">Want to cook: 01</h1>
                <hr></hr>
                <hr></hr>
                <div className="flex gap-16">
                    <p>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                </div>
                <hr></hr>
            </div>
            
            <hr></hr>

            <div className="text-center mt-5">
                <h1 className="text-xl font-medium">Currently cooking: 02</h1>
                <hr></hr>
                <hr></hr>
                <div className="flex gap-16">
                    <p>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                </div>
                <hr></hr>
                <hr></hr>
            </div>

        </div>
    );
};

export default Sidebar;