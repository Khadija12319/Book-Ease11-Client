import Banner from "../Banner/Banner";
import Map from "../Map/Map";
import NewsLetter from "../Newsletter/NewsLetter";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NewsLetter></NewsLetter>
            <Testimonial></Testimonial>
            <Map></Map>
        </div>
    );
};

export default Home;