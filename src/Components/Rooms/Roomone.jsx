import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { FaRegCircleUser } from "react-icons/fa6";
import { BiArea } from "react-icons/bi";
import { CiBadgeDollar } from "react-icons/ci";


const Roomone = ({room}) => {
    return (
        <div className="border">
            <div className="flex p-10 gap-5">
            <Link to={`/rooms/${room._id}`} className="h-full flex-1">
                <img src={room.image1} alt="" className="h-full w-full"/>
            </Link>
            <div className="flex-1 my-auto">
            <p className="transform -translate-y-10 pl-3 text-white font-bold text-xl">{room['hotel-name']}</p>
            <div className="px-6 pb-6">
            <h2 className="text-4xl font-bold font-forum pb-4">{room['room-type']}</h2>
            <div className="flex gap-10">
                <div className="flex items-center gap-3">
                    <FaRegCircleUser className="text-4xl"/>
                    <p className="text-xl">{room.guests} GUESTS</p>
                </div>
                <div className="flex items-center gap-3">
                    <BiArea className="text-4xl"/>
                    <p className="text-xl">{room.size}</p>
                </div>
            </div>
            <div className="flex items-center gap-3 py-4">
                <CiBadgeDollar className="text-4xl"/>
                <p className=" text-xl">{room.price}$ Per Night</p>
            </div>
            <p className="text-gray-700 leading-7 text-lg text-justify pb-4">{room.description}</p>
            <p className="text-2xl"><span className="font-bold">Reviews :</span> {room.rating.length}</p>
            </div>
            </div>
        </div>
        </div>
    );
};

Roomone.propTypes = {
    room:PropTypes.object
}

export default Roomone;