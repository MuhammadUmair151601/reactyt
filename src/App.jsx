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


// ************************Components of react***********************
 

// ************************Props drilling in react**************
// we can pass data inside the tags.


// import React from 'react'
// import Header from './components/Header'
// import Footer from './components/Footer'

// const App = () => {
//   return (
//     <div>
//       <h1>I am using components below just to check!</h1>
//       <Header/>
//       <Footer/>
//     </div>
//   )
// }

// export default App

// *********************props and props drilling in react***********************
// import React from 'react'
// import Card from './components/Card';
// const App = () => {
  
//   return (
//     <div className='font-medius text-3xl'>
//       <Card user = "M.umair"/> 
//       <Card user ="Hamid ullah"/>
//     </div>
//   )
// }

// export default App;

// import React from 'react'
// import Card from './components/Card'

// const App = () => {
//   return (
//     <div>
//       <div className='p-10'>
//       <Card user ="m.umair" age ='55' city = "Peshawar"/>
//       </div>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import Card from './components/Card'
// const App = () => {

//   const users = [
//   {
//     "name": "Ali Khan",
//     "fName": "Ahmed Khan",
//     "age": 28,
//     "city": "Lahore",
//     "profession": "Software Engineer"
//   },
//   {
//     "name": "Sara Ahmed",
//     "fName": "Imran Ahmed",
//     "age": 24,
//     "city": "Karachi",
//     "profession": "Doctor"
//   },
//   {
//     "name": "Bilal Hussain",
//     "fName": "Tariq Hussain",
//     "age": 32,
//     "city": "Islamabad",
//     "profession": "Teacher"
//   },
//   {
//     "name": "Ayesha Malik",
//     "fName": "Rashname Malik",
//     "age": 27,
//     "city": "Faisalabad",
//     "profession": "Graphic D Designer"
//   },
//   {
//     "name": "Usman Raza",
//     "fName": "Nadeem Raza",
//     "age": 30,
//     "city": "Peshawar",
//     "profession": "Business Analyst"
//   }
// ]


//   return (
//     <div>
//       {users.map(function(elem,idx){
//         return <Card
//         key = {idx}
//          username = {elem.name}
//          prof = {elem.profession}
//          Father = {elem.fName}
//          city = {elem.city}
//          age = {elem.age}
//          />
//       })}
//     </div>
//   )
// }

// export default App;

// ********************Context API (axios)*******************************

import axios from 'axios'
import React from 'react'
import { useState } from 'react'
const App = () => {

  const [data, setData] = useState([])

  const getData = async ()=>{
  const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=100")
  // const data = response.data  

  setData(response.data)
  // jo response hay uske andar ka data:
  console.log(data)
  }
  return (
    <div className='m-10'>
      <button onClick={getData} className='px-4 py-3 bg-gray-400 text-white text-2xl font-bold rounded active:scale-90 '>Get data</button>
      <div className='bg-white text-black text-2xl'>
      {data.map(function(elem, idx){
        return <div key={idx} className='bg-white h-40 w-40 '>
          <img src={elem.download_url} alt="" />
          <h1>{elem.author}</h1>
        </div>
      })}
      </div>
    </div>
  )
}

export default App