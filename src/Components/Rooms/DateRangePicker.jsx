import * as React from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DateRangePicker({people}) {
  // State for selected start and end dates
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs());
  const [daysCount, setDaysCount] = useState(0);

  // Function to handle start date change
  const handleStartDateChange = (date) => {
    const currentDate = dayjs(); // Get today's date
    // Check if the selected start date is before the current end date and after or equal to today's date
    if (!endDate || (date.isBefore(endDate) || (date.isSame(currentDate)))
    ) {
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
    if (!startDate || (date.isAfter(startDate) || date.isAfter(currentDate)
    )){
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
    console.log(setDaysCount)
  };
  

  return (
    <div className='bg-[#c19b76] ml-5 p-5'>
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
        </div>
  );
}




