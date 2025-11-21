import React from 'react'
import './Card.css'
import Header from './Header'

const Card = (props) => {


  return (
    <div>
        <div className="user">
            <h1>{props.user}</h1>
            <h2>{props.role}</h2>
        </div>
    </div>

    
  )
}

export default Card