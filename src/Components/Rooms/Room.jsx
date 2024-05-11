import { Link } from "react-router-dom";
const Room = ({room}) => {
    return (
        <div className="rounded-lg">
            <Link to={`/rooms/${room._id}`}>
                <img src={room.image1} alt="" className="rounded-lg"/>
            </Link>
        </div>
    );
};

export default Room;