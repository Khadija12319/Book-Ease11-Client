import { useLoaderData } from "react-router-dom";
import Room from "./Room";

const Rooms = () => {
    const rooms=useLoaderData();
    console.log(rooms);
    return (
        <div className="container mx-auto">
            <div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {
                        rooms.map(room => <Room key={room._id} room={room}></Room>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Rooms;