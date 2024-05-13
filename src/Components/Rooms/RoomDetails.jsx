import { useLoaderData } from "react-router-dom";
import detailsimg from "../../assets/images/hotel-description.jpg"
import ImageSlide from "./ImageSlide";
import icon1 from "../../assets/icons/icon-user-grey.svg"
import icon2 from "../../assets/icons/icon-plan-grey.svg"
import icon3 from "../../assets/icons/icon-bed-grey.svg"
import icon4 from "../../assets/icons/icon-calendar-grey.svg"

import image1 from "../../assets/images/lounge.jpeg"
import image2 from "../../assets/images/restraunt.jpeg"
import image3 from "../../assets/images/wellness.jpeg"

import { FaSwimmingPool } from "react-icons/fa";
import { PiTelevisionSimpleDuotone } from "react-icons/pi";
import { TbSmokingNo } from "react-icons/tb";
import { TbWashPress } from "react-icons/tb";
import DataPicker from "./DateRangePicker";
import { light } from "@mui/material/styles/createPalette";


const RoomDetails = () => {
    const room = useLoaderData();
    return (
        <div>
            <div>
            <div className="relative">
                <img src={detailsimg} alt="" className="h-[60vh] w-full"/>
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="container mx-auto h-full flex flex-col justify-between">
                        <div className="flex items-center justify-center h-full">
                            <div className="bg-[#0b6354] h-[220px] w-[220px] flex items-center justify-center rounded-full mt-14">
                                <p className="text-white font-forum text-2xl md:text-3xl lg:text-5xl text-center font-bold p-8">{room['room-type']}</p>
                            </div>
                        </div>
                        <div className="flex justify-start">
                            <h2 className="text-white font-forum font-extrabold text-xl md:text-2xl lg:text-4xl flex flex-col mb-4 pl-10">{room.price}$ <span>Per Night</span></h2>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
            <div className="container mx-auto">
            <h1 className="text-4xl font-sarabun pb-2 pt-5 font-bold">{room['room-type']}</h1>
            <p className="text-2xl font-forum font-medium text-[#5c5c5c] pb-5">{room['hotel-name']}</p>
            </div>
            <div className="flex container mx-auto">
                <div className="w-[60%] overflow-hidden">
                    <ImageSlide roomData={room}></ImageSlide>
                    <div className="grid grid-cols-4 py-10">
                        <div className="flex flex-col justify-between items-center space-y-2">
                            <img src={icon1} alt="" className="h-20 w-20"/>
                            <p className="text-[#5c5c5c] font-sarabun font-semibold">{room.guests} GUEST</p>
                        </div>
                        <div className="flex flex-col justify-between items-center space-y-2">
                            <img src={icon2} alt="" className="h-20 w-20"/>
                            <p className="text-[#5c5c5c] font-sarabun font-semibold">{room.size}</p>
                        </div>
                        <div className="flex flex-col justify-between items-center space-y-2">
                            <img src={icon3} alt="" className="h-20 w-20"/>
                            <p className="text-[#5c5c5c] font-sarabun font-semibold">{room.price}$ / PER NIGHT</p>
                        </div>
                        <div className="flex flex-col justify-between items-center space-y-2">
                            <img src={icon4} alt="" className="h-20 w-20"/>
                            <p className="text-[#5c5c5c] font-sarabun font-semibold">WEEK PRICE</p>
                        </div>
                    </div>
                    <hr className="mb-10 border-[1px]"/>
                    <div className="mb-10">
                        <p className="px-4 text-lg font-normal font-forum">{room.description}</p>
                    </div>
                    <hr className="mb-10 border-[1px]"/>
                    <div className="mb-10">
                        <h1 className="text-2xl font-forum font-semibold mb-3">Room Services</h1>
                        <div className="grid grid-cols-3 gap-5">
                            <div className="flex items-center gap-2">
                                <FaSwimmingPool className="text-4xl text-[#5c5c5c]"/>
                                <p>Swimming Pool</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <PiTelevisionSimpleDuotone className="text-4xl text-[#5c5c5c]"/>
                                <p>Television</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <TbSmokingNo className="text-4xl text-[#5c5c5c]"/>
                                <p>No Smoking</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <TbWashPress className="text-4xl text-[#5c5c5c]"/>
                                <p>Private Bathroom</p>
                            </div>
                        </div>
                    </div>
                    <hr className="mb-8 border-[1px]"/>
                    <div>
                        <p className="text-2xl font-forum font-semibold mb-3">Package Including</p>
                        {
                            room['room-service'].map((service, index) => <li key={index} className="list-disc text-lg">{service}</li>)
                        }
                    </div>
                </div>
                <div className="ml-5 w-[40%]">
                    <DataPicker people={room.guests} availability={room.availability} data={room}></DataPicker>
                    <hr  className="mt-6"/>
                    <h2 className="font-forum text-3xl pt-4">Around the Hotel</h2>
                    <div className="grid grid-cols-2 gap-7 mt-6">
                    <div className="relative">
                        <img src={image1} alt="" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <p className="font-forum font-bold text-center text-white text-2xl">Lounge Bar</p>
                        </div>
                    </div>
                    <div className="relative">
                            <img src={image2} alt="" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                            <p className="text-2xl font-forum font-bold text-center text-white">Restaurants</p>
                            </div>
                        </div>
                        <div className="relative">
                            <img src={image3} alt="" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                            <p className="text-2xl font-forum font-bold text-center text-white">Wellness</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;