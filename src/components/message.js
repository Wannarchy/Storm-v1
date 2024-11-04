import React from 'react'
const Message = ({ message }) => {
return (

        <div >      
          <p className="bg-danger">City not found</p>
          <p>{message} </p>
        
        </div>
)

}

export default Message;