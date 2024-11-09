import React from 'react'

export default function Secondcarousel() {
  return (
        <>
 <div id="carouselExampleCaptions" class="carousel slide">
 <div class="carousel-indicators">
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
 </div>
 <div class="carousel-inner" >
   <div class="carousel-item active">
     <img src="https://files.oaiusercontent.com/file-bUu9YKn7ieHIMO2RFZAF0qdk?se=2024-11-08T14%3A24%3A05Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D85b59641-e5d2-43b9-adfc-237b376d70af.webp&sig=%2B05Z4mJ6XNtMQgNdEu29YMo9bxVLJImDnZ0V%2Bfcp1Po%3D" style={{height:"600px", backgroundSize:"cover"}} class="d-block w-100" alt=""/>
     <div class="carousel-caption d-none d-md-block">
       <h5>First slide label</h5>
       <p>Some representative placeholder content for the first slide.</p>
     </div>
   </div>
   <div class="carousel-item active">
     <img src="https://files.oaiusercontent.com/file-bUu9YKn7ieHIMO2RFZAF0qdk?se=2024-11-08T14%3A24%3A05Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D85b59641-e5d2-43b9-adfc-237b376d70af.webp&sig=%2B05Z4mJ6XNtMQgNdEu29YMo9bxVLJImDnZ0V%2Bfcp1Po%3D" style={{height:"600px", backgroundSize:"cover"}} class="d-block w-100" alt=""/>
     <div class="carousel-caption d-none d-md-block">
       <h5>Second slide label</h5>
       <p>Some representative placeholder content for the Second slide.</p>
     </div>
   </div>
   <div class="carousel-item active">
     <img src="https://files.oaiusercontent.com/file-bUu9YKn7ieHIMO2RFZAF0qdk?se=2024-11-08T14%3A24%3A05Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D85b59641-e5d2-43b9-adfc-237b376d70af.webp&sig=%2B05Z4mJ6XNtMQgNdEu29YMo9bxVLJImDnZ0V%2Bfcp1Po%3D" style={{height:"600px", backgroundSize:"cover"}} class="d-block w-100" alt=""/>
     <div class="carousel-caption d-none d-md-block">
       <h5>Third slide label</h5>
       <p>Some representative placeholder content for the third slide.</p>
     </div>
   </div>
 </div>
 <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
   <span class="visually-hidden">Previous</span>
 </button>
 <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
   <span class="carousel-control-next-icon" aria-hidden="true"></span>
   <span class="visually-hidden">Next</span>
 </button>
</div>
 <div
        style={{
          fontFamily: "Futura, Arial, sans-serif",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <h2>Explore Some Other things Down there</h2>
      </div>

      <div style={{display:"flex", 
      justifyContent:"center", margin:"20px 50px" }}>
        <div className='' style={{display:"flex", flexWrap:"wrap"}}>
        <div className='d-flex flex-column'>
        <img src='https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg' style={{height:"400px", width:"400px", marginTop:"10px",}} className='mx-2' alt='img'/>
        <p style={{fontSize:"20px", textAlign:"center"}} >Shoes</p>
        </div>
         
        <div className='d-flex flex-column'>
        <img src='https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg' style={{height:"400px", width:"400px", marginTop:"10px",}} className='mx-2' alt='img'/>
        <p style={{fontSize:"20px", textAlign:"center"}} >Books</p>
        </div>
        <div className='d-flex flex-column'>
        <img src='https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg' style={{height:"400px", width:"400px", marginTop:"10px",}} className='mx-2' alt='img'/>
        <p style={{fontSize:"20px", textAlign:"center",}} >Shirts</p>
        </div>
         
        </div>
      </div>
</>
  )
}
