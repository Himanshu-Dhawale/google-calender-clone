import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import dayjs from 'dayjs';

const CalenderHeader = () => {
  const{monthIndex , setMonthIndex} = useContext(GlobalContext);
  console.log(monthIndex);

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  }

  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  }
  
  const handleReset = () => {
    setMonthIndex(monthIndex === dayjs().month() ? monthIndex + Math.random() : dayjs().month());
  }

  return (
    <header className='px-4 py-2 flex items-center'>
       <h1 className='mr-2 w-12 h-12'>Logo</h1>
       <h1 className='mr-10 text-xl text-gray-500 font-bold'>Calender</h1>
       <button className='border rounded py-2 px-4 mr-5'  onClick={() => handleReset()}>Today</button>
       <button>
        <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
          <FaChevronLeft onClick={() => handlePrevMonth()}/>
        </span>
       </button>
       <button>
        <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'><FaChevronRight onClick={() => handleNextMonth()}/>
        </span>
       </button>
       <h2 className='ml-4 text-xl text-gray-500 font-bold'>{dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}</h2>
    </header>
  )
}

export default CalenderHeader