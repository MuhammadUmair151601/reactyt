import React from "react";

const App = () => {
  const user = "umair"
  const age = 30

const changeUser = () =>{
    console.log(user)
    const newuser = "ahmed"
    console.log(newuser)
  }

  
  return <div>
  <h1>hello {user} your age is {age}</h1>
  <button onClick={changeUser}>change user</button>
  </div>
}

export default App;