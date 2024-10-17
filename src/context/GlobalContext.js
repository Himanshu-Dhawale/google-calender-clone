// import { createContext } from 'react';


// const GlobalContext = createContext({
//     monthIndex : 0,
//     setMonthIndex : (idx) => {},
//     smallCalendarMonth: 0,
//     setSmallCalendarMonth: (idx) => {},
//     daySelected : null,
//     setDaySelected : (day) =>  {},
//     showEventModal : false,
//     setShowEventModal : () => {},
//     dispatchCalEvent : ({type, payload}) => {},
//     savedEvents : [],
//     selectedEvent: null,
//     setSelectedEvent : () => {},
//     labels : [],
//     setLabels : () => {}
// });


// export default GlobalContext;

import React from "react";

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index) => {},
  daySelected: null,
  setDaySelected: (day) => {},
  showEventModal: false,
  setShowEventModal: () => {},
  dispatchCalEvent: ({ type, payload }) => {},
  savedEvents: [],
  selectedEvent: null,
  setSelectedEvent: () => {},
  setLabels: () => {},
  labels: [],
  updateLabel: () => {},
  filteredEvents: [],
});

export default GlobalContext;