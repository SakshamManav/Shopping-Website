import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <hr></hr>
     <div>
<div className="text-light" style={{backgroundColor:""}}>

  <footer className="py-3 mt-5 text-dark " >
  <div className='d-flex' style={{with:"100%", justifyContent:"space-evenly"}} >
  <div className='help d-flex' style={{  flexDirection:"column", fontSize:"12px", fontWeight:"700"}}>
  <label style={{fontSize:"14px", fontWeight:"600"}}  className='mb-3'>Help</label>
  <p  className='my-2' style={{fontWeight:"700"}}>FAQs</p>
    <p className='my-2'>Product Care</p>
    <p className='my-2'>Stores</p>
    <p className='my-2'>You can call</p>
  </div>
<div className='services d-flex' style={{ flexDirection:"column", fontSize:"12px", fontWeight:"700"}}>
<label style={{fontSize:"14px", fontWeight:"600"}} className='mb-3'>Services</label>
    <p className='my-2' >Reports</p>
    <p className='my-2'>Personalisation</p>
    <p className='my-2'>Art of grilling</p>
    <p className='my-2'>Download</p>
</div>
<div className='About d-flex' style={{  flexDirection:"column", fontSize:"12px", fontWeight:"700"}}>
<label style={{fontSize:"14px", fontWeight:"600"}} className='mb-3'>About</label>
<p className='my-2' >Reports</p>
    <p className='my-2'>Personalisation</p>
    <p className='my-2'>Art of grilling</p>
    <p className='my-2'>Download</p>
    <p className='my-2'>Stores</p>
    <p className='my-2'>You can call</p>
</div>
<div className='Something d-flex' style={{  flexDirection:"column", fontSize:"12px", fontWeight:"700"}}>
<label style={{fontSize:"14px", fontWeight:"600"}} className='mb-3'>Email</label>
<p className='my-2' >Reports</p>
    <p className='my-2'>Personalisation</p>
    <p className='my-2'>Art of grilling</p>
    <p className='my-2'>Download</p>
</div>
  </div>
  <hr></hr>
    <div className='d-flex mx-5' style={{justifyContent:"space-between"}}>
        <div className='d-flex align-items-center'>
        <i class="fa-solid fa-globe mx-2"></i>
        <b>English</b>
        </div>
        <div className='d-flex align-items-center' style={{fontSize:"14px"}}>
            <p className='mx-2'>Cookies</p>
            <p className='mx-2'>Sitemap</p>
            <p className='mx-2'>Legal & privacy</p>
        </div>
    </div>
    <div className="my-2" style={{ textAlign: "center" }}>
              <img
                style={{
                  height: "90px",
                  width: "180px",
                  backgroundSize: "cover",
                }}
                src="./vw2.png"
                alt="img"
              />
            </div>
  </footer>
</div>


    </div>
    </>
  )
}
