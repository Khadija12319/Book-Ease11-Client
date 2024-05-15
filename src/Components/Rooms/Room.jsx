import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { FaRegCircleUser } from "react-icons/fa6";
import { BiArea } from "react-icons/bi";
import { CiBadgeDollar } from "react-icons/ci";


const Room = ({room}) => {
    return (
        <div className="border">
            <div className="">
            <Link to={`/rooms/${room._id}`}>
                <img src={room.image1} alt="" className=""/>
            </Link>
            <p className="transform -translate-y-10 pl-3 text-white font-bold text-xl">{room['hotel-name']}</p>
            <div className="px-6 pb-6">
            <h2 className="text-2xl font-bold font-forum pb-4">{room['room-type']}</h2>
            <div className="flex gap-6">
                <div className="flex items-center gap-3">
                    <FaRegCircleUser className="text-3xl"/>
                    <p className="text-lg">{room.guests} GUESTS</p>
                </div>
                <div className="flex items-center gap-3">
                    <BiArea className="text-3xl"/>
                    <p className="text-lg">{room.size}</p>
                </div>
            </div>
            <div className="flex items-center gap-3 pt-4">
                <CiBadgeDollar className="text-3xl"/>
                <p className=" text-lg">{room.price}$ Per Night</p>
            </div>
            <p className="text-2xl pt-4"><span className="font-bold">Reviews :</span> {room.rating.length}</p>
            </div>
        </div>
        </div>
    );
};

Room.propTypes = {
    room:PropTypes.object
}

export default Room;