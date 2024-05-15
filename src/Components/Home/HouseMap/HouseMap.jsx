import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';



const HouseMap = () => {
  return (
    <div className='container mx-auto mb-20'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className="text-5xl font-forum font-bold pb-6">LOCATION</h1>
            <p className="text-xl font-sarabun pb-6 text-center leading-8">Explore our hotel's prime location with our interactive map feature. Discover nearby attractions, dining options, and more.<br /> Plan your stay with ease by visualizing your surroundings before you arrive</p>
        </div>
<MapContainer
      center={[23.7855, 90.4036]}
      zoom={40}
      style={{ height: '450px', width: '100%' }}
      zoomControl={false}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[23.7855, 90.4036]}> 
        <Popup>
          House 123, Road 45, Gulshan Avenue <br />
          Dhaka, Bangladesh
        </Popup>
      </Marker>
      <ZoomControl position="bottomright" />
    </MapContainer>
    </div>
  );
};

export default HouseMap;
