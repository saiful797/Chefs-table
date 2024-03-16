
const Banner = () => {
    return (
        <div className="m-2">
            <div className="carousel w-full h-[500px] rounded-3xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/9bT9zN5/banner-2.jpg" className="w-full" />
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-56 md:top-1/2">
                        <div className="text-white w-4/5 md:w-1/2 text-center space-y-3">
                            <div className="text-3xl font-bold ">
                                <h1>Discover an exceptional cooking</h1>
                                <p>class tailored for you!</p>
                            </div>
                            <p className="text-balance">Cooking is both an art and a science, requiring a balance of creativity and precision. It begins with selecting fresh, high-quality ingredients and understanding how to prepare them with finesse. Knife skills are fundamental, enabling efficient and safe chopping, slicing, and dicing. </p>

                            <div className="space-x-5">
                                <button className="btn bg-[#0BE58A] rounded-full text-lg font-semibold border-[#0BE58A]">Explore Now</button>
                                <button className="btn glass rounded-full text-white">Our Feedback</button>
                            </div>
                        </div> 
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Banner;