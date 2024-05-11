import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import { FaRegAddressBook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

// Custom component to handle zoom on button click
const ZoomControl = () => {
  const map = useMapEvents({
    click: () => {
      map.zoomIn(); // Zoom in when clicked
    },
  });

  return null; // No visible component
};

const Map = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '400px' }} className='mb-24'>
      <MapContainer center={[51.505, -0.09]} zoom={10} style={{ height: "100%", zIndex: 0 }} scrollWheelZoom={false}>
      <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl /> {/* Add ZoomControl component */}
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust transparency here
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1, // Ensure the overlay div appears above the map
        pointerEvents: 'none', // Allow pointer events to pass through the overlay div
      }}>
        {/* Content of the overlay div */}
        <div className='bg-[#0c0c0c] p-10 space-y-4'>
        <h1 className='font-forum text-4xl text-white font-bold'>Hotel Info</h1>
        <p className='flex items-center gap-4 text-white font-sarabun'><FaRegAddressBook className='text-2xl'/>House #123, Road #45, Gulshan Avenue</p>
        <p className='flex items-center gap-4 text-white font-sarabun'><FaPhone className='text-2xl'/><span>Ph +1-202-555-0153</span></p>
        <p className='flex items-center gap-4 text-white font-sarabun'><MdEmail className='text-2xl'/><span>info@hotel.com</span></p>
        <button className='bg-white flex justify-center w-full py-2 rounded-sm font-bold text-lg'>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Map;



