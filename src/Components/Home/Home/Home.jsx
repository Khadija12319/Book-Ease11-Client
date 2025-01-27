import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import HouseMap from "../HouseMap/HouseMap";
import Map from "../Map/Map";
import NewsLetter from "../Newsletter/NewsLetter";
import PopupModal from "../PopupModal/PopupModal";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <PopupModal></PopupModal>
            <NewsLetter></NewsLetter>
            <HouseMap></HouseMap>
            <Testimonial></Testimonial>
            <Map></Map>
        </div>
    );
};

export default Home;