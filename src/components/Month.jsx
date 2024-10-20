// import React from 'react'
// import Day from './Day'
// const Month = ({month}) => {
// // console.log(month);
//   return (
//     <div className='flex-1 grid grid-cols-7 grid-rows-5'>
//         {month.map((row, i) =>(
//             <React.Fragment key={i}>
//                 {row.map((day) => (
//                     <Day day={day} rowIdx={i} key={i}/>
//                 ))}
//              </React.Fragment>
//         ))}
//     </div>  
//   )
// }

// export default Month


import React from "react";
import Day from "./Day";
export default function Month({ month }) {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}