import React from 'react'

const Card = (props) => {
  console.log(props.user)
  return (
    <div>
      <h1>User name is {props.user}</h1>
    </div>
  )
}

export default Card