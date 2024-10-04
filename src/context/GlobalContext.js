import { createContext } from 'react';


const GlobalContext = createContext({
    monthIndex : 0,
    setMonthIndex : (idx) => {},
    smallCalendarMonth: 0,
    setSmallCalendarMonth: (idx) => {},
    daySelected : null,
    setDaySelected : (day) =>  {},
    showEventModal : false,
    setShowEventModal : () => {},
    dispatchCalEvent : ({type, payload}) => {},
    savedEvents : [],
    selectedEvent: null,
    setSelectedEvent : () => {},
    labels : [],
    setLabels : () => {}
});


export default GlobalContext;