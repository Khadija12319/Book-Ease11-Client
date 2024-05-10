import { Link } from "react-router-dom";
import gif from "../../assets/video/6333074.jpg"
const ErrorPage = () => {
    return (
        <div className="h-[100vh] container mx-auto">
            <div className="h-full">
                <div className="h-full my-auto flex flex-row-reverse justify-center items-center">
                    <div className="flex-1">
                    <img src={gif} alt="" />
                    </div>
                    <div className="flex-1 space-y-4 lg:pl-10">
                        <h1 className="text-[#5c5c5c] font-sarabun text-6xl font-semibold pb-4">So sorry!</h1>
                        <h1 className="text-[#5c5c5c] font-sarabun text-6xl font-semibold pb-4 leading-[70px]">The page you are<br /> looking for cannot<br /> be found</h1>
                        <h4 className="text-[#5c5c5c] font-sarabun text-2xl font-semibold pb-4">Possible Reasons</h4>
                        <li className="text-[#5c5c5c] font-sarabun text-xl">The address may have been typed incorrectly.</li>
                        <li className="text-[#5c5c5c] font-sarabun text-xl pb-10">It may be a broken or outdated link.</li>
                        <Link to="/" className="bg-[#5c5c5c] text-white px-4 py-3 rounded-md"><button>Return to home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;