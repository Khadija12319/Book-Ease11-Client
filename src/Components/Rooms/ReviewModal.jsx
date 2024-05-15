import moment from "moment";

const ReviewModal = ({ user, roomId, onClose, onSubmit }) => {
    const presentTime = moment().format('DD/MM/YYYY  hh:mm a');
    
    return (
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
  
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
          &#8203;
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <form className="space-y-6 p-6 mt-10" onSubmit={onSubmit}>
                    <div className="flex md:flex-row flex-col gap-6 w-full">
                        <div className="flex flex-col gap-4 w-full">
                            <label className="text-[#1B1A1A80] font-sarabun font-semibold leading-8 text-xl">Give Stars</label>
                            <select className="p-3 rounded-md border" name="rating" id="" required >
                                <option>--Please select a rating--</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-4 w-full">
                            <label className="text-[#1B1A1A80] font-sarabun font-semibold leading-8 text-xl">User Name</label>
                            <input
                              className="p-3 placeholder:text-[#1B1A1A80] placeholder:text-base placeholder:font-normal placeholder:leading-7 rounded-md border"
                              type="text"
                              name="username"
                              id=""
                              value={user.displayName}
                              readOnly 
                            />
                        </div>
                    </div>

                        <div className="flex flex-col gap-4">
                        <label className="text-[#1B1A1A80] font-sarabun font-semibold leading-8 text-xl">Write Your Comment</label>
                        <textarea placeholder="write your message" className="border rounded-md p-3" name="message" rows={5} required/>
                        </div>

                        <div className="flex flex-col gap-4">
                        <label className="text-[#1B1A1A80] font-sarabun font-semibold leading-8 text-xl">Room Id</label>
                        <input className="border rounded-md p-3" value={roomId._id} readOnly name="id"/>
                        </div>

                        <div>
                        <div className="flex flex-col gap-4 w-full">
                          <label className="text-[#1B1A1A80] font-sarabun font-semibold leading-8 text-xl">Time</label>
                          <input 
                            className="border p-3 placeholder:text-[#1B1A1A80] placeholder:text-base placeholder:font-normal placeholder:leading-7 rounded-md" 
                            type="text" 
                            name="time" 
                            value={presentTime} 
                            readOnly
                          />
                        </div>
                        </div>

                    <button className="w-full border-[2px] border-[#331A15] bg-[#D2B48C] py-3 text-[#331A15] font-forum text-2xl font-normal rounded-lg">Add Review</button>
                    <div className="mt-2">
                  <button
                    onClick={onClose}
                    type="button"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Close
                  </button>
                </div>
                    </form>
                </div>
        </div>
      </div>
    );
  };
  
  export default ReviewModal;
  