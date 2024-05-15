import { FaRegStar, FaStar } from "react-icons/fa";
import PropTypes from 'prop-types';
const RatingStars = ({ rate }) => {
    const filledStars = Math.floor(rate); // Number of filled stars
    const hasHalfStar = rate - filledStars >= 0.5; // Check if there's a half-filled star

    // Generate an array to map through the stars
    const starsArray = new Array(5).fill(null).map((_, index) => {
        if (index < filledStars) {
            return <FaStar key={index} className="text-yellow-500" />;
        } else if (index === filledStars && hasHalfStar) {
            return <FaStar key={index} className="text-yellow-500" />;
        } else {
            return <FaRegStar key={index} className="text-black" />;
        }
    });
    return <div className='flex justify-center gap-3 my-5 text-4xl'>{starsArray}</div>;

}
RatingStars.propTypes = {
    rate:PropTypes.number
}

export default RatingStars;