const NewsLetter = () => {
    return (
        <div className="newsletter mb-20">
            <div className="flex flex-col bg-gray-300 bg-opacity-30 justify-center h-full items-center">
                <h3 className="text-black text-5xl font-bold font-sarabun pb-4">STAY UP TO DATE</h3>
                <p className="text-2xl text-black font-sarabun text-center pb-5">Subscribe to our newsletter to receive exclusive offers and the Latest news of<br /> our products and services.</p>
            <div className="join mx-auto">
              <input className="input input-bordered join-item placeholder:text-[#5c5c5c]" placeholder="Email"/>
              <button className="btn join-item rounded-r-full bg-[#5c5c5c] text-white text-2xl font-forum hover:text-black">Subscribe</button>
            </div>
            </div>
        </div>
    );
};

export default NewsLetter;