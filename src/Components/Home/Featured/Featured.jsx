import { useEffect, useState } from "react";

const Featured = () => {
    const [rooms,setRooms]=useState([]);
    useEffect(()=>{
        fetch('https://bookeaseclient.vercel.app/rooms')
        .then(res => res.json())
        .then(data => setRooms(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Featured;