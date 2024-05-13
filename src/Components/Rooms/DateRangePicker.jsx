import * as React from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useContext } from 'react';
import { AuthContext } from '../Context/Context';


export default function DateRangePicker({ people, availability,data }) {
  // State for selected start and end dates
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs());
  const [daysCount, setDaysCount] = useState(0);
  const [isRoomAvailable, setIsRoomAvailable] = useState(true); // Initially room is available
  const {user}=useContext(AuthContext);

  // Function to handle start date change
  const handleStartDateChange = (date) => {
    const currentDate = dayjs(); // Get today's date
    // Check if the selected start date is before the current end date and after or equal to today's date
    if (!endDate && (date.isBefore(endDate) || date.isSame(currentDate))) {
      // Update the start date
      setStartDate(date);
      // Calculate the number of days
      calculateDays(date, endDate);
    } else {
      // Display an error message or handle the validation as needed
      alert('Start date must be before end date and on or after today');
      setStartDate(date);
    }
  };

  // Function to handle end date change
  const handleEndDateChange = (date) => {
    const currentDate = dayjs(); // Get today's date
    // Check if the selected end date is after the current start date and after or equal to today's date
    if (!startDate || date.isAfter(startDate) || date.isAfter(currentDate)) {
      // Update the end date
      setEndDate(date);
      // Calculate the number of days
      calculateDays(startDate, date);
    } else {
      // Display an error message or handle the validation as needed
      alert('End date must be after start date and on or after today');
      setDaysCount(0);
    }
  };

  const calculateDays = (startDate, endDate) => {
    const diffDays = endDate.diff(startDate, 'day');
    setDaysCount(diffDays);
  };

  // Function to handle booking
  const handleBookNow = () => {
    // Get the current timestamp
    const currentTimestamp = dayjs().valueOf();
  
    // Get the timestamps for the start and end dates
    const startTimestamp = startDate.valueOf();
    const endTimestamp = endDate.valueOf();
  
    // Check if the room is available and the selected dates are within the valid range
    if (
      availability === 'Available' &&
      daysCount >0 && (startTimestamp && endTimestamp)
    ) {
      // Room is available for booking
      setIsRoomAvailable(false);
      const availability= "Unavailable";
       // Set room as unavailable
      const booking={
        sdate:startDate.$d,
        edate:endDate.$d,
        bookid:data._id,
        type:data['room-type'],
        bookprice:data.price,
        rating:data.rating,
        email:user.email
      }
      console.log(booking);

      const updatedRoomData = {
        ...data, // Keep the existing data
        availability: 'Unavailable' // Update the availability status as needed
      };

      fetch(`http://localhost:5000/rooms/${data._id}`,{
        method:'PUT',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(updatedRoomData)
      })
      .then(res =>res.json())
      .then(data => {
        if (data.insertedId === 1) {
          setIsRoomAvailable(false);
        }
      })
      
      //post data
      fetch('http://localhost:5000/booking',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(booking)
      })
      .then(res =>res.json())
      .then(data => console.log(data))
      alert('Room booked successfully!');
    } else {
      // Room is not available for selected dates
      alert('Room is not available for the selected dates');
    }
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
          disabled={availability === 'Unavailable'} // Disable button if room is unavailable
        >
          {availability === 'Available' ? 'Book Now' : 'Unavailable'}
        </button>
      </div>
    </div>
  );
}




