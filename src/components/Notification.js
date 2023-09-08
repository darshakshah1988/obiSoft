import React from 'react'
import "./Notification.css"

const Notification = ({ type, message, onClose }) => {
  return (
    <div className={`notification ${type}`}>
      <span>{message}</span>
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default Notification