import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../App.css';

// import required modules
import { Navigation } from 'swiper/modules';
import RatingStars from './RatingStars';



const Testimonial = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch("https://bookeaseclient.vercel.app/ratings")
            .then(res => res.json())
            .then(data => setRooms(data));
    }, []);

    return (
        <div className='container mx-auto mb-10'>
            <Swiper spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 2000 }}
            pagination={{ clickable: true }}
            className='mySwiper'
            navigation={true}
            modules={[Navigation]}
            >
                {rooms.map((rating, ratingIndex) => (
                    <SwiperSlide key={ratingIndex}>
                        <div className='w-[80%] mx-auto p-8'>
                            <RatingStars rate={rating?.rate}></RatingStars>
                            <blockquote className="room-description italic text-5xl font-forum font-semibold leading-[50px]">"{rating?.comment}"</blockquote>
                            <p className="pt-8 text-2xl font-sarabun">{rating?.username}</p>
                            <p className="pt-1 text-2xl font-sarabun">{rating?.time}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
    </div>
)}


export default Testimonial;


