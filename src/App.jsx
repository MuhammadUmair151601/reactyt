// import React, { useState } from "react";

// import { useState } from "react";

// ************ changing value through number**************
// const App = () => {

//   const [a, setA] = useState(30)
//   const changea = () => {
//     console.log("chal gaya:")
//     setA(45);
//   }

//   return <div>
//   <h1>Hello your marks are {a}</h1>
//   <button onClick={changea}>change user</button>
//   </div>
// }
// export default App;
// ***************************************

// import React  from 'react'
// import { useState } from "react";
// const App = () => {

//   const [num, setnum]= useState(0)

//   return (
//     <div>
//       <h1>Current number is {num}</h1>
//       <button onClick={() => setnum + 1}>increment</button>
//       <button onClick={() => setnum - 1}>decrement</button>
//     </div>
//   )
// }

// export default App
// *********************creating counter**********************

// import React, { useState } from "react";

// const App = () => {
//   const [num, setNum] = useState(0);

//   return (
//     <div>
//       <h1>Current number is {num}</h1>
//       <button onClick={() => setNum(num + 1)}>increment</button>
//       <button onClick={() => setNum(num - 1)}>decrement</button>
//     </div>
//   );
// };

// export default App;

// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <h1 className= "text-3xl text-blue-500 font-bold">Hello everyone!</h1>
//       <h2 className= "text-3xl text-blue-500 font-bold">I am Good!</h2>
//       <button className="px-[10px] py-[10px] border-2 border-white rounded-[5px] text-[20px] bg-gray-300 text-black">Click me</button>
//       <button className="px-[10px] py-[10px] border-2 border-white rounded-[5px] text-[20px] bg-gray-300 text-black">Back</button>
//     </div>
//   )
// }

// export default App

// ********************form handling in react**********************

// import React, { useState } from "react";

// const App = () => {
//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:");
//     e.target.reset();
//   };
//   return (
//     <form
//       onSubmit={(e) => {
//         submitHandler(e);
//       }}
//     >
//       <input
//         className="px-5 py-5 border-white rounded-[5px] bg-white m-5 text-black text-2xl font-bold"
//         type="text"
//         placeholder="Enter your name"
//       />
//       <button className="px-7 py-5 border-white rounded-[5px] bg-orange-400 m-5 text-white text-2xl font-bold ">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default App;

// **************************Two way binding in react**************************

// import React, { useState } from "react";

// const App = () => {
//   const [username, setusername] = useState("")
//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log(`${username} your Form has been submitted:`);
//     setusername('')
//    };
//   return (
//     <form
//       onSubmit={(e) => {
//         submitHandler(e);
//       }}
//     >
//       <input
//         value={username}
//          onChange={(e)=> {
//           setusername(e.target.value)
//         }}
//         className="px-5 py-5 border-white rounded-[5px] bg-white m-5 text-black text-2xl font-bold"
//         type="text"
//         placeholder="Enter something"
//       />
//       <button className="px-7 py-5 border-white rounded-[5px] bg-orange-400 m-5 text-white text-2xl font-bold ">
//         Submit
//       </button>
//     </form>
//   );
// };
// export default App;