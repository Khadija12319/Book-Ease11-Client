import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../App.css';

// import required modules
import { Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const [rooms,setRooms]=useState([]);
    useEffect(()=>{
        fetch('https://bookeaseclient.vercel.app/rooms')
        .then(res => res.json())
        .then(data => setRooms(data))
    },[])

  return (
    <div className="container mx-auto mb-20">
      <div className="h-[700px] bg-cover bg-center"
      style={{ backgroundImage: `url('https://i.ibb.co/fYf2Cx2/pexels-ron-lach-8937756.jpg')` }}>
        <div className="bg-black h-full bg-opacity-30 flex flex-col items-center justify-center">
            <h1 className="text-white text-8xl text-center font-forum font-bold">EXCITING PROMOTIONS AND OFFERS</h1>
            <p className="lg:w-[900px] md:w-[600px] text-white text-2xl text-center font-sarabun font-medium py-5">Take advantage of our exclusive offer and receive a complimentary spa treatment during your stay, where our expert therapists will pamper you with rejuvenating massages and revitalizing treatments.

Unwind by our sparkling poolside oasis, sipping on handcrafted cocktails and soaking up the sun. Explore the vibrant local area with our complimentary guided tours, showcasing the best attractions and hidden gems.</p>
        <button onClick={openPopup} className="bg-white text-black px-5 py-3 text-2xl font-sarabun font-semibold">See Offers</button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto ">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">
            <div className="fixed inset-0 transition-opacity " aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75 "></div>
            </div>
            <span className="hidden h-full sm:inline-block sm:align-middle sm:h-screen " aria-hidden="true">&#8203;</span>
            <div className="h-[100%] inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full bg-gray-600" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <Swiper spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 2000 }}
            pagination={{ clickable: true }}
            className='mySwiper h-[100%]'
            navigation={true}
            modules={[Navigation]}
            >
                {rooms.map((room) => (
                    <SwiperSlide key={room._id} className="h-full">
    
                        <div className='mx-auto p-8 h-full flex-grow bg-gray-600'>
                            <p className="room-description text-5xl font-forum font-semibold leading-[50px] h-full text-white">{room['special-offer']}</p>
                        </div>
                        <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse bg-gray-600">
                <button type="button" onClick={closePopup} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Close
                </button>
                <Link to={`/rooms/${room._id}`}><button type="button" onClick={closePopup} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                  open room details
                </button></Link>
              </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupModal;

