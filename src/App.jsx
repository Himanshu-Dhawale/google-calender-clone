import React, { useContext, useEffect } from 'react'
import './App.css'
import {getMonth} from "./util";
import CalenderHeader from './components/CalenderHeader';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Month from './components/Month';
import GlobalContext from './context/GlobalContext';
import EventModal from './components/EventModal';

function App() {
 const[currentMonth, setCurrentMonth] = useState(getMonth());
//  console.log(currentMonth);
 const {monthIndex, showEventModal} = useContext(GlobalContext);

 useEffect(() => {
  setCurrentMonth(getMonth(monthIndex));
 },[monthIndex])
  return (
    <React.Fragment>
      {showEventModal && <EventModal/>}
      <div className='h-screen flex flex-col'>
        <CalenderHeader/>
      <div className="flex flex-1">
       <Sidebar/>
       <Month month={currentMonth}/>
      </div>
      </div>
    </React.Fragment>
  )
}

export default App
