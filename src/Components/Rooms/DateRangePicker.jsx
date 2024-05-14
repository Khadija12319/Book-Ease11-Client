import { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Modal } from '@mui/material'; // Import Modal and Button from Material-UI
import { useContext } from 'react';
import { AuthContext } from '../Context/Context';
import PropTypes from 'prop-types'; 
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export default function DateRangePicker({ people, availability, data }) {
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs());
  const [daysCount, setDaysCount] = useState(0);
  const [isRoomAvailable, setIsRoomAvailable] = useState(availability);
  const [showModal, setShowModal] = useState(false);
  const [confirmBooking, setConfirmBooking] = useState(false);
  const { user } = useContext(AuthContext);

  const handleStartDateChange = (date) => {
    const currentDate = dayjs();
    if (!endDate && (date.isBefore(endDate) || date.isSame(currentDate))) {
      setStartDate(date);
      calculateDays(date, endDate);
    } else {
      alert('Start date must be before end date and on or after today');
      setStartDate(date);
    }
  };

  const handleEndDateChange = (date) => {
    const currentDate = dayjs();
    if (!startDate || date.isAfter(startDate) || date.isAfter(currentDate)) {
      setEndDate(date);
      calculateDays(startDate, date);
    } else {
      alert('End date must be after start date and on or after today');
      setDaysCount(0);
    }
  };

  const calculateDays = (startDate, endDate) => {
    const diffDays = endDate.diff(startDate, 'day');
    setDaysCount(diffDays);
  };

  const handleBookNow = () => {
    const startTimestamp = startDate.format('DD/MM/YYYY');
    const endTimestamp = endDate.format('DD/MM/YYYY');
  
    if (
      isRoomAvailable === 'Available' &&
      daysCount > 0 &&
      (startTimestamp && endTimestamp)
    ) {
      setIsRoomAvailable('Unavailable');
      setShowModal(true);
    } else {
      alert('Room is not available for the selected dates');
    }
  };

  const handleConfirmBooking = () => {
    setShowModal(false);
    setConfirmBooking(true);

    const booking = {
      sdate: startDate.format('DD/MM/YYYY'),
      edate: endDate.format('DD/MM/YYYY'),
      bookid: data._id,
      type: data['room-type'],
      bookprice: data.price,
      rating: data.rating,
      email: user.email
    };

    const updatedRoomData = {
      ...data,
      availability: 'Unavailable'
    };

    fetch(`http://localhost:5000/rooms/${data._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedRoomData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount === 1) {
          // setIsRoomAvailable('Unavailable');
        }
      });

    fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            icon: 'success',
            title: 'Room booked successfully!',
            showConfirmButton: true
          });
          setIsRoomAvailable('Unavailable');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setIsRoomAvailable('Available'); // Reset room availability if there's an error
      });


  };

  return (
    <div className='bg-[#c19b76] p-5'>
      <div className='flex gap-5'>
        <div className='border p-3'>
          <p className='text-black text-4xl font-semibold font-forum py-2 text-center'>CHECK-IN</p>
          <div className='flex gap-4 pb-3'>
            <div className='flex-1 bg-[#81684e] flex items-center justify-center text-white font-bold py-7 text-3xl rounded-3xl'>{startDate.format('D')}</div>
            <div className='flex-1 bg-[#81684e] flex items-center justify-center text-white font-bold py-7 text-3xl rounded-3xl'>{startDate.format('MMMM')}</div>
          </div>
          <LocalizationProvider dateAdapter={AdapterDayjs} className="text-[#c19b76] placeholder:text-[#c19b76]">
            <DemoContainer components={['DatePicker']} className="text-[#c19b76] placeholder:text-[#c19b76]">
              <DatePicker
                className="bg-[#c19b76]"
                selected={startDate}
                onChange={handleStartDateChange}
                minDate={dayjs()}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div className='border p-3'>
          <p className='text-black text-4xl font-semibold font-forum py-2 text-center'>CHECK-OUT</p>
          <div className='flex gap-4 pb-3'>
            <div className='flex-1 bg-[#81684e] flex items-center justify-center text-white font-bold py-7 text-3xl rounded-3xl'>{endDate.format('D')}</div>
            <div className='flex-1 bg-[#81684e] flex items-center justify-center text-white font-bold py-7 text-3xl rounded-3xl'>{endDate.format('MMMM')}</div>
          </div>
          <LocalizationProvider dateAdapter={AdapterDayjs} className="text-[#c19b76] placeholder:text-[#c19b76]">
            <DemoContainer components={['DatePicker']} className="text-[#c19b76] placeholder:text-[#c19b76]">
              <DatePicker
                className="bg-[#c19b76]"
                selected={endDate}
                onChange={handleEndDateChange}
                minDate={dayjs()}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>
      </div>
      <div className='flex mt-4 gap-6'>
        <div className='flex-1 border p-4'>
          <p className='bg-[#81684e] flex flex-col items-center justify-center text-white font-bold py-7 text-2xl rounded-3xl p-4'><span>Number of days</span><span>{daysCount}</span></p>
        </div>
        <div className='flex-1 border p-4'>
          <p className='bg-[#81684e] flex flex-col items-center justify-center text-white font-bold py-7 text-2xl rounded-3xl p-4'><span>Guests</span><span>{people}</span></p>
        </div>
      </div>
      <div className='bg-[#c19b76] pt-5'>
        <button
          className='bg-[#81684e] w-full py-4 text-3xl text-white font-forum font-extrabold rounded'
          onClick={handleBookNow}
          disabled={availability === 'Unavailable'}
        >
          {isRoomAvailable === 'Available' ? 'Book Now' : 'Unavailable'}
        </button>
      </div>
      {/* Modal for room summary and confirm button */}
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div className="modal-container flex items-center justify-center h-full">
          <div className='bg-white w-[340px] p-10'>
          <h2 className='text-2xl font-forum font-extrabold pb-4'>Room Summary</h2>
          <p className='text-xl font-semibold font-sarabun pb-3'><span>Check In:</span> {startDate.format('DD/MM/YYYY')}</p>
          <p className='text-xl font-semibold font-sarabun pb-3'><span>Check Out:</span> {endDate.format('DD/MM/YYYY')}</p>
          <p className='text-xl font-semibold font-sarabun pb-3'>Price: {data.price}$</p>
          <p className='text-justify pb-4'><span className='font-bold text-xl'>Description:</span> {data.description}</p>
          {/* Additional room summary information can be displayed here */}
          <button onClick={handleConfirmBooking} className='font-bold text-xl bg-gray-700 text-white p-2 text-center'>Confirm Booking</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

DateRangePicker.propTypes = {
  people: PropTypes.number,
  availability: PropTypes.string,
  data: PropTypes.object
}


