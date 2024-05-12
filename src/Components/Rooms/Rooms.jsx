import { useLoaderData } from "react-router-dom";
import Room from "./Room";
import { useEffect, useState } from "react";

const Rooms = () => {
    const [priceFilter, setPriceFilter] = useState('all');
    const [rooms, setRooms] = useState([]);
    const room = useLoaderData(); 
    const handlePriceFilterChange = (value) => {
        setPriceFilter(value);
    };

    useEffect(() => {
        if (priceFilter === 'all') {
            setRooms(room);
        } else if (priceFilter === 'lessThan100') {
            fetch("http://localhost:5000/lthundred")
                .then(res => res.json())
                .then(data => setRooms(data));
        } else if (priceFilter === '100to200') {
            // Handle fetching rooms within price range 100 to 200
        } else if (priceFilter === '200orAbove') {
            // Handle fetching rooms with price above 200
        }
    }, [priceFilter]);
    
    return (
        <div className="container mx-auto">
            <div>
                <div className="text-center mb-8">
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
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {rooms.map(room => <Room key={room._id} room={room}></Room>)}
                </div>
            </div>
        </div>
    );
};

export default Rooms;
