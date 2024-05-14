import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import moment from "moment";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "./Modal";
import { useLoaderData } from "react-router-dom";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const dataroom=useLoaderData();
    const presentTime = moment();
    const url=`http://localhost:5000/booking?email=${user.email}`
    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data))
    },[url])
    const handleUpdateSpot= e =>{
        e.preventDefault();
        //const form = e.target;
        // const countryname= form.countryname.value;
        // const location=form.location.value;
        // const season=form.season.value;
        // const spotname=form.spotname.value;
        // const description=form.description.value;
        // const cost=form.cost.value;
        // const time= form.time.value;
        // const visitor= form.visitor.value;
        // const photo= form.photo.value;

        // const formdata={countryname,location,season,spotname,description,cost,time,visitor,photo};

        // console.log(formdata);
    }

    const handleUpdateDate = (booking) => {
        setSelectedBooking(booking);
        setModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedBooking(null);
      };
    
      const handleSaveDate = (newStartDate, newEndDate) => {
        if (!newStartDate || !newEndDate) {
          Swal.fire({
            icon: "error",
            title: "Invalid Dates",
            text: "Please enter both start and end dates.",
          });
          return;
        }
      
        const { _id } = selectedBooking;
        const updatedBookingData = {
          ...selectedBooking,
          sdate: newStartDate,
          edate: newEndDate
        };
      
        fetch(`http://localhost:5000/booking/${_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedBookingData)
        })
        .then(res => res.json())
        .then(data => {
          // Handle response data as needed
          console.log(data); // Log the response for debugging
      
          // Update the bookings state with the updated data
          const updatedBookings = bookings.map(booking => {
            if (booking._id === _id) {
              return {
                ...booking,
                sdate: newStartDate,
                edate: newEndDate
              };
            }
            return booking;
          });
          setBookings(updatedBookings);
      
          handleCloseModal();
          
          if (data.modifiedCount > 0) {
            Swal.fire({
              title: 'Success!',
              text: 'Dates Updated Successfully',
              icon: 'success',
              confirmButtonText: 'Ok'
            });
          }
        })
        .catch(error => {
          // Handle any errors
          console.error('Error updating booking:', error);
          Swal.fire({
            icon: "error",
            title: "Failed to Update Booking",
            text: "An error occurred while updating the booking. Please try again later.",
          });
        });
      };

const handleDelete = (_id,sdate,bookid) => {
  // Calculate the difference in days between the current date and the start date of the booking
    const bookingStartDate = moment(sdate,'DD/MM/YYYY');
    const currentDate = moment();
    const daysDifference = bookingStartDate.diff(currentDate, 'days');
  // Check if there's at least one day gap between cancel date and start date of booking
  if (daysDifference < 2) {
    Swal.fire({
      icon: 'error',
      title: 'Cannot Cancel Booking',
      text: 'Booking can only be canceled at least 1 day before the start date.',
    });
    return;
  }

  // Prompt the user for confirmation
  Swal.fire({
    title: 'Are you sure to cancel the booking?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#DD6B20',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, cancel it!'
  }).then((result) => {
    if (result.isConfirmed) {
      // Proceed with cancellation
      fetch(`http://localhost:5000/booking/${_id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(response => {
        if (response.deletedCount > 0) {
          // Deletion successful
          Swal.fire(
            'Canceled!',
            'The booking has been canceled.',
            'success'
          );
          // Remove the deleted booking from state
          const remaining = bookings.filter(booking => booking._id !== _id);
          setBookings(remaining);

          // Update the room's availability status to 'Available'
          dataroom.map(room => {
            if (room._id === bookid) {
              const updatedRoomData = {
                ...room,
                availability: 'Available'
              };

              fetch(`http://localhost:5000/rooms/${room._id}`, {
                method: 'PUT',
                headers: {
                  'content-type': 'application/json'
                },
                body: JSON.stringify(updatedRoomData)
              })
              .then(res => res.json())
              .then(data => {
                if (data.modifiedCount > 0) {
                  // Update successful
                  console.log("modified successfully");
                }
              })
              .catch(error => {
                console.error('Error updating room availability:', error);
                Swal.fire(
                  'Error!',
                  'An error occurred while updating room availability.',
                  'error'
                );
              });
            }
          });
        } 
      })
      .catch(error => {
        console.error('Error canceling the booking:', error);
        Swal.fire(
          'Error!',
          'An error occurred while canceling the booking.',
          'error'
        );
      });
    }
  });
};

      
      
      
      
      

  return (
    <div className="container mx-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-gray-300">
            <td className="text-center py-4 text-lg font-semibold font-forum text-gray-700 font-montserrat">
              Room
            </td>
            <td className="text-center py-4 text-lg font-semibold font-forum text-gray-700 font-montserrat">
              User Email
            </td>
            <td className="text-center py-4 text-lg font-semibold font-forum text-gray-700 font-montserrat">
              Price
            </td>
            <td className="text-center py-4 text-lg font-semibold font-forum text-gray-700 font-montserrat">
              Booking From
            </td>
            <td className="text-center py-4 text-lg font-semibold font-forum text-gray-700 font-montserrat">
              Booking To
            </td>
            <td className="text-center py-4 text-lg font-semibold font-forum text-gray-700 font-montserrat space-x-5 items-center flex justify-center">
              Update/Delete
            </td>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id} className="border-b-2 border-gray-300">
              <td className="text-center py-4 text-sm font-medium text-gray-700 font-montserrat">
                {booking.type}
              </td>
              <td className="text-center py-4 text-sm font-medium text-gray-700 font-montserrat">
                {booking.email}
              </td>
              <td className="text-center py-4 text-sm font-medium text-gray-700 font-montserrat">
                {booking.bookprice}$
              </td>
              <td className="text-center py-4 text-sm font-medium text-gray-700 font-montserrat">
                {booking.sdate}
              </td>
              <td className="text-center py-4 text-sm font-medium text-gray-700 font-montserrat">
                {booking.edate}
              </td>
              <td className="text-center py-4 text-sm font-medium text-gray-700 font-montserrat space-x-5 items-center flex justify-center">
                <button
                  className="bg-orange-600 px-3 py-2 text-white rounded-md"
                  onClick={() => handleUpdateDate(booking)}
                >
                  Update Date
                </button>
                <button onClick={() => handleDelete(booking._id,booking.sdate,booking.bookid)} className="bg-orange-600 px-3 py-2 text-white rounded-md">
                  Cancle Booking
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
            <form className="space-y-6 border p-6 mt-10" onSubmit={handleUpdateSpot}>

{/* rating and username */}
        <div className="flex md:flex-row flex-col gap-6 w-full">
            <div className="flex flex-col gap-4 w-full">
                <label className="text-[#1B1A1A80] font-sarabun font-semibold leading-8 text-xl">Give Stars</label>
                <select className="p-3 rounded-md border" name="rating" id="" >
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
                <input  className="p-3 placeholder:text-[#1B1A1A80] placeholder:text-base placeholder:font-normal placeholder:leading-7 rounded-md border" type="text" name="location" id="" defaultValue={user.displayName}/>
            </div>
        </div>

            <div className="flex flex-col gap-4">
            <label className="text-[#1B1A1A80] font-sarabun font-semibold leading-8 text-xl">Write Your Comment</label>
            <textarea placeholder="write your message" className="border rounded-md p-3" rows={5}/>
            </div>

            <div>
            <div className="flex flex-col gap-4 w-full">
              <label className="text-[#1B1A1A80] font-sarabun font-semibold leading-8 text-xl">Time</label>
              <input 
                className="border p-3 placeholder:text-[#1B1A1A80] placeholder:text-base placeholder:font-normal placeholder:leading-7 rounded-md" 
                type="text" 
                name="location" 
                defaultValue={presentTime} 
              />
            </div>
            </div>
 
        <button className="w-full border-[2px] border-[#331A15] bg-[#D2B48C] py-3 text-[#331A15] font-forum text-2xl font-normal rounded-lg">Add Review</button>
        </form>
    </div>
    <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveDate}
      />
    </div>
  );
};

export default Booking;

