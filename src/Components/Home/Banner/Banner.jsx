import videoBG from "../../../assets/video/banner-back.mp4"
import "../../../App.css"
const Banner = () => {
    return (
        <div className="container mx-auto relative">
    <div className="main relative rounded-3xl">
        <video src={videoBG} autoPlay loop muted className="w-full object-cover z-0 rounded-3xl"></video>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 carousel z-10 rounded-3xl">
            <div className="carousel w-full h-full">

            <div id="slide1" className="carousel-item relative w-full h-full">
                <div className="flex flex-col my-auto justify-center items-center w-full space-y-4">
                    <h1 className="text-white text-5xl font-sarabun font-bold text-center">LUXURY HOTEL & BEST RESORT</h1>
                    <p className="text-white text-xl font-sarabun font-normal text-center">ENJOY A LUXURY EXPERIENCE</p>
                    <button className="bg-[#5c5c5c] hover:bg-[#302f2f] text-white text-lg p-3 rounded-md font-semibold">BOOK NOW</button>
                </div>
                <div className="absolute flex transform -translate-y-1/2 gap-8 right-10 bottom-1">
                    <a href="#slide3" className="text-gray-500 text-3xl bg-[#ccc1bd] py-[10px] px-5 rounded-full">❮</a> 
                    <a href="#slide2" className="text-gray-500 text-3xl bg-[#ccc1bd] py-[10px] px-5 rounded-full">❯</a>
                </div>
            </div> 

            <div id="slide2" className="carousel-item relative w-full h-full">
            <div className="flex flex-col my-auto justify-center items-center w-full space-y-4">
                    <h1 className="text-white text-5xl font-sarabun font-bold text-center">SUITS & APARTMENTS</h1>
                    <p className="text-white text-xl font-sarabun font-normal text-center">CHECK OUR SEASONAL PROMOTION</p>
                    <button className="bg-[#5c5c5c] hover:bg-[#302f2f] text-white text-lg p-3 rounded-md font-semibold">CHECK ALL ROOMS</button>
                </div>
                <div className="absolute flex transform -translate-y-1/2 gap-8 right-10 bottom-1">
                    <a href="#slide1" className="text-gray-500 text-3xl bg-[#ccc1bd] py-[10px] px-5 rounded-full">❮</a> 
                    <a href="#slide3" className="text-gray-500 text-3xl bg-[#ccc1bd] py-[10px] px-5 rounded-full">❯</a>
                </div>
            </div> 

            <div id="slide3" className="carousel-item relative w-full h-full">
            <div className="flex flex-col my-auto justify-center items-center w-full space-y-4">
                    <h1 className="text-white text-5xl font-sarabun font-bold text-center">BEAUTIFUL INTERIOR DECORATED ROOMS</h1>
                    <p className="text-white text-xl font-sarabun font-normal text-center">CHECK ROOM DETAILS AND GET EXCITING DEALS</p>
                    <button className="bg-[#5c5c5c] hover:bg-[#302f2f] text-white text-lg p-3 rounded-md font-semibold">ROOM DETAILS</button>
                </div>
                <div className="absolute flex transform -translate-y-1/2 gap-8 right-10 bottom-1">
                    <a href="#slide2" className="text-gray-500 text-3xl bg-[#ccc1bd] py-[10px] px-5 rounded-full">❮</a> 
                    <a href="#slide1" className="text-gray-500 text-3xl bg-[#ccc1bd] py-[10px] px-5 rounded-full">❯</a>
                </div>
            </div> 
            </div>
        </div>
    </div>
</div>

    );
};

export default Banner;