import React from 'react'
// import { Link, useLocation } from 'react-router-dom'

export default function ProfileModal() {
    
    
  return (

<div 
  style={{
     
    position: "fixed", 
    top: "80px", 
    left: "87%", 
    transform: "translateX(-50%)"
  }} 
  className="modal fade mymodal" 
  id="profileModal" 
  data-bs-backdrop="static" 
  data-bs-keyboard="false" 
  tabIndex="-1" 
  aria-labelledby="staticBackdropLabel" 
  aria-hidden="true"
>
  <div className="modal-dialog"> 
    <div className="modal-content"
    style={{
    width: "300px", 
    height: "200px",
    }}
    >
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">User Profile</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <h3>Please Login First</h3>
      </div>

      <div className="modal-footer" style={{display: "flex", justifyContent: "center"}}>
        
      </div>
    </div>
  </div>
</div>

  )
}
