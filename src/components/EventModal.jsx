// import React, { useContext, useState } from 'react'
// import { MdDragHandle } from "react-icons/md";
// import { IoIosClose } from "react-icons/io";
// import { MdOutlineSchedule } from "react-icons/md";
// import { MdOutlineSegment } from "react-icons/md";  
// import { MdBookmarkBorder } from "react-icons/md";
// import { CiTrash } from "react-icons/ci";
// import { FaCheck } from "react-icons/fa";

// import GlobalContext from '../context/GlobalContext';
// const labelsClasses  = ["indigo", "gray", "green", "blue", "red", "purple"];
// const EventModal = () => {
//   const{setShowEventModal, daySelected, dispatchCalEvent, selectedEvent} = useContext(GlobalContext);
//   const[title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
//   const[description, setDescription] = useState(selectedEvent ? selectedEvent.description : "");
//   const[selectedLabel, setSelectedLabel] = useState( selectedEvent ? labelsClasses.find((lbl) => lbl === selectedEvent.label) : labelsClasses[0]);
  

//    function handleSubmit (e) {
//     e.preventDefault();
//     const calendarEvent = {
//       title,
//       description,
//       label: selectedLabel,
//       day: daySelected.valueOf(),
//       id: selectedEvent ? selectedEvent.id :  Date.now()
//     };
//     if(selectedEvent){
//       dispatchCalEvent({type: "update", payload: calendarEvent});
//     }else{
//       dispatchCalEvent({type: "push", payload: calendarEvent});
//     }
//     setShowEventModal(false);
//    }
//   return (
//     <div className='h-screen w-full fixed left-0 top-0 flex justify-center items-center'>
//       <form className='bg-white rounded-lg shadow-2xl w-1/4'>
//           <header className='bg-gray-100 px-4 py-2 flex justify-between items-center'>
//            <span className='text-gray-400'>
//            <MdDragHandle />
//            </span>
//            <div className='flex'>
//             {selectedEvent && (
//               <span className='text-gray-400 cursor-pointer' onClick={() =>{ dispatchCalEvent({type: "delete", payload: selectedEvent});
//               setShowEventModal(false);  
//             }
//               }>
//               <CiTrash />
//               </span>
//             )}
//            <button onClick={() => setShowEventModal(false)}>
//             <span className='text-gray-400' >
//             <IoIosClose />
//             </span>
//            </button>
//            </div>
           
//           </header>
//           <div className="p-3">
//             <div className="grid grid-cols-1/5 items-end gap-y-7">
//               <div className=""></div>
//               <input type="text" name='title' placeholder='Add Title' value={title} required onChange={(e) => setTitle(e.target.value)} className='pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-500'/>
//               <span className='text-gray-400'>
//               <MdOutlineSchedule />
//              </span>
//              <p>{daySelected.format("dddd, MMMM DD")}</p>
//              <span className='text-gray-400'>
//              <MdOutlineSegment />
//              </span>
//              <input type="text" name='title' placeholder='Add Description' value={description} required onChange={(e) => setDescription(e.target.value)} className='pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-500'/>
//              <span className='text-gray-400'>
//              <MdBookmarkBorder />
//              </span>
//               <div className="flex gap-x-2">
//                 {labelsClasses.map((lblClass, i) => (
//                   <span key={i} className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`} onClick={() => setSelectedLabel(lblClass)}>
//                     {selectedLabel === lblClass && (<span className='text-white text-sm'>
//                     <FaCheck />
//                    </span>)}
//                   </span>
//                 ) )}
//               </div>
//             </div>
//           </div>
//           <footer className="flex justify-end border-t p-3 mt-5">
//             <button type='submit' className='bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white' onClick={handleSubmit}>
//                Save
//             </button>
//           </footer>
//       </form>
//     </div>
//   )
// }

// export default EventModal


import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import { MdDragHandle } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { MdOutlineSchedule } from "react-icons/md";
import { MdOutlineSegment } from "react-icons/md";  
import { MdBookmarkBorder } from "react-icons/md";
import { CiTrash } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";

const labelsClasses = [ 
  "indigo",
  "gray",
  "green",
  "blue",
  "red",
  "purple",
];

export default function EventModal() {
  const {
    setShowEventModal,
    daySelected,
    dispatchCalEvent,
    selectedEvent,
  } = useContext(GlobalContext);

  const [title, setTitle] = useState(
    selectedEvent ? selectedEvent.title : ""
  );
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }

    setShowEventModal(false);
  }
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
          <MdDragHandle />
          </span>
          <div className="flex">
            {selectedEvent && (
              <span
                onClick={() => {
                  dispatchCalEvent({
                    type: "delete",
                    payload: selectedEvent,
                  });
                  setShowEventModal(false);
                }}
                className="material-icons-outlined text-gray-400 cursor-pointer"
              >
                <CiTrash />
              </span>
            )}
            <button onClick={() => setShowEventModal(false)}>
              <span className="material-icons-outlined text-gray-400">
              <IoIosClose />
              </span>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setTitle(e.target.value)}
            />
            <span className="material-icons-outlined text-gray-400">
            <MdOutlineSchedule />
            </span>
            <p>{daySelected.format("dddd, MMMM DD")}</p>
            <span className="material-icons-outlined text-gray-400">
            <MdOutlineSegment />
            </span>
            <input
              type="text"
              name="description"
              placeholder="Add a description"
              value={description}
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setDescription(e.target.value)}
            />
            <span className="material-icons-outlined text-gray-400">
            <MdBookmarkBorder />
            </span>
            <div className="flex gap-x-2">
              {labelsClasses.map((lblClass, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(lblClass)}
                  className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedLabel === lblClass && (
                    <span className="material-icons-outlined text-white text-sm">
                                          <FaCheck />
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}