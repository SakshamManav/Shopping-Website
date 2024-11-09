import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
    <img src='./vw2.png' alt='img' style={{position:"fixed", height:"100vh", width:"100%", zIndex:"-1"}} />
    <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
    
    <div className='' style={{maxWidth:"450px" ,minWidth:"350px",minHeight:"400px", border:"2px solid black", padding:"20px", borderRadius:"20px",backgroundColor:"white", color:"black" }}>
    <div style={{textAlign:"center"}}>
      <img src='./vw2.png' style={{width:"140px", height:"70px", }} alt='img'/>
    </div>
    <h1 className='text-center text-dark' >Login to your account</h1>
    <form className='mt-4' >
   <div className="mb-3">
     <label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
     <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" style={{backgroundColor:"lightgrey", border:"2px solid black"}}/>
     <div id="emailHelp" className="form-text text-danger" >We'll never share your email with anyone else.</div>
   </div>
   <div className="mb-3">
     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
     <input type="password" className="form-control" id="password"  name='password'  style={{backgroundColor:"lightgrey"}}/>
   </div>
   <button type="submit" className="btn btn-primary">Submit</button>
 </form>
     <div id="emailHelp" className="form-text text-dark">don't have a account, please <Link to="/signup">Signup</Link> </div>
    </div>
     </div>
     </>
  )
}
