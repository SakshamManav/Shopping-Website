import React from 'react'

export default function LikePage() {
  return (
    <div>
         <div style={{display:"flex", 
      justifyContent:"center", margin:"20px 50px" }}>
        <div className='' style={{display:"flex", flexWrap:"wrap"}}>
        <div className='d-flex flex-column'>
        <img src='https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg' style={{height:"400px", width:"400px", marginTop:"10px",}} className='mx-2' alt='img'/>
        <p style={{fontSize:"20px", textAlign:"center"}} >Shoes</p>
        </div>
         
        <div className='d-flex flex-column'>
        <img src='https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg' style={{height:"400px", width:"400px", marginTop:"10px",}} className='mx-2' alt='img'/>
        <p style={{fontSize:"20px", textAlign:"center"}} >Remove</p>
        </div>
        <div className='d-flex flex-column'>
        <img src='https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg' style={{height:"400px", width:"400px", marginTop:"10px",}} className='mx-2' alt='img'/>
        <p style={{fontSize:"20px", textAlign:"center",}} >Shirts</p>
        </div>
         
        </div>
      </div>
    </div>
  )
}
