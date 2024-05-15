import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Featured = () => {
    const [rooms,setRooms]=useState([]);
    useEffect(()=>{
        fetch('https://bookeaseclient.vercel.app/rooms')
        .then(res => res.json())
        .then(data => setRooms(data))
    },[])
    return (
        <div className="container mx-auto mb-20">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-5xl font-forum font-bold pb-6">Featured Rooms</h1>
                <p className="text-xl font-sarabun pb-6 text-center leading-8">Discover the epitome of comfort and elegance with our carefully curated collection of featured hotel rooms. Indulge in unparalleled<br/> luxury and make your stay unforgettable.</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
            {rooms.map(room => (
                <div key={room._id} className="border p-6 rounded-t-2xl flex flex-col">
                    <img src={room.image2} alt="" className="rounded-t-2xl"/>
                    <h2 className="text-3xl font-forum font-bold mb-2 pt-3">{room['room-type']}</h2>
                    <p className="text-gray-700 mb-4 text-lg font-sarabun flex-grow">{room.description.slice(0, room.description.length / 2)}</p>
                    <div>
                    <Link to={`/rooms/${room._id}`} className="bg-[#5c5c5c] text-white text-2xl font-forum hover:text-black px-4 py-2 rounded-md inline-block"><button>Book Now</button></Link>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Featured;