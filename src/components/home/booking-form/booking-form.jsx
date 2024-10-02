import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './index.module.css';

const BookingForm = ({
  startDate,
  endDate,
  onSearch,
  setEndDate,
  setStartDate,
}) => {
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [time, setTime] = useState('');
  const handleSearch = () => {
    onSearch();
  };

  return (
    <div className='flex flex-col items-center p-6'>
      <div className={styles.textContainer}>
        <h1 className='text-4xl font-bold mb-4'>Enjoy in the best way!</h1>
        <p className='text-lg mb-6'>Enjoy our services for your trip anytime</p>
      </div>

      <div
        className={`grid grid-cols-1 md:grid-cols-4 gap-4 w-full ${styles.selectorContainer}`}
      >
        <div className='relative'>
          <label className='block text-sm font-medium text-gray-700'>
            Number of people
          </label>
          <select
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(Number(e.target.value))}
            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2'
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        {/* Date Range Picker */}
        <div>
          <label className='block text-sm w-full font-medium text-gray-700'>
            Date Range
          </label>
          <DatePicker
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setStartDate(update[0]);
              setEndDate(update[1]);
            }}
            className={`mt-1 border border-gray-300 rounded-md shadow-sm p-2 ${styles.dateRangeContainer}`}
            dateFormat='MMM d, yyyy'
          />
        </div>

        {/* Time Selector */}
        <div className='relative'>
          <label className='block text-sm font-medium text-gray-700'>
            Time
          </label>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2'
          >
            <option value=''>Choose Time</option>
            <option value='10:00 AM'>10:00 AM</option>
            <option value='11:00 AM'>11:00 AM</option>
            <option value='12:00 PM'>12:00 PM</option>
          </select>
        </div>
        <button
          className='mt-6 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600'
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
