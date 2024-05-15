import { useLoaderData } from "react-router-dom";
import Room from "./Room";
import { useEffect, useState } from "react";
import { MdOutlineTableRows } from "react-icons/md";
import { AiOutlineTable } from "react-icons/ai";
import Roomone from "./Roomone";

const Rooms = () => {
    const [priceFilter, setPriceFilter] = useState('all');
    const [rooms, setRooms] = useState([]);
    const [showFirstLayout, setShowFirstLayout] = useState(true);
    const room = useLoaderData(); 
    const handlePriceFilterChange = (value) => {
        setPriceFilter(value);
    };

    useEffect(() => {
        if (priceFilter === 'all') {
            setRooms(room);
        } else if (priceFilter === 'lessThan100') {
            fetch("https://bookeaseclient.vercel.app/lthundred")
                .then(res => res.json())
                .then(data => setRooms(data));
        } else if (priceFilter === '100to200') {
            fetch("https://bookeaseclient.vercel.app/gthundred")
                .then(res => res.json())
                .then(data => setRooms(data));
        } else if (priceFilter === '200orAbove') {
            fetch("https://bookeaseclient.vercel.app/twohundred")
                .then(res => res.json())
                .then(data => setRooms(data));
        }
    }, [priceFilter]);

    const switchToFirstLayout = () => {
        setShowFirstLayout(true);
    };

    const switchToSecondLayout = () => {
        setShowFirstLayout(false);
    };
    
    return (
        <div className="container mx-auto">
            <div>
                <div className="text-center mb-8 flex items-center justify-center gap-6">
                    <select
                        className="bg-gray-200 p-2 rounded"
                        value={priceFilter}
                        onChange={(e) => handlePriceFilterChange(e.target.value)}
                    >
                        <option value="all">All rooms</option>
                        <option value="lessThan100">Less than 100</option>
                        <option value="100to200">100 to 200</option>
                        <option value="200orAbove">200 or above</option>
                    </select>
                    <AiOutlineTable
                    className={`text-5xl cursor-pointer ${
                        showFirstLayout ? "text-blue-500" : ""
                    }`}
                    onClick={switchToFirstLayout}
                />
                <MdOutlineTableRows
                    className={`text-5xl cursor-pointer ${
                        !showFirstLayout ? "text-blue-500" : ""
                    }`}
                    onClick={switchToSecondLayout}
                />
                </div>
                {showFirstLayout ? (
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {rooms.map((room) => (
                        <Room key={room._id} room={room}></Room>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6">
                    {rooms.map((room) => (
                        <Roomone key={room._id} room={room}></Roomone>
                    ))}
                </div>
            )}
            </div>
        </div>
    );
};

export default Rooms;
