import React from 'react'

export default function Cart() {
  return (
    <div className="container my-4" style={{ flex: "1 1 auto" }}>
      <div className="row" >
        <div className="col-lg-8 col-md-12" >
          <div className="cart-items border rounded p-3" >
            <h1 className="text-center">Shopping Cart</h1>
            <hr />
           
              
                <div
                  
                  className="d-flex flex-column flex-md-row align-items-center mb-4 border-bottom pb-3"
                >
                  <input
                    type="checkbox"
                    className="me-3"
                    
                  />
                  <img
                    src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg"
                    className="img-fluid mb-3 mb-md-0"
                    style={{ maxWidth: "200px" }}
                    alt="img"
                  />
                  <div className="flex-grow-1 ms-3">
                    <h4>T-shirts</h4>
                    <p>hello i am shirt</p>
                    <div className="d-flex align-items-center mb-2">
                      <label className="me-2">Quantity:</label>
                      <select
                        className="form-select"
                        id="selectedItem"
                        
                      >
                        
                      </select>
                    </div>
                  </div>
                  <div className="text-end">
                    <h4>$ 100</h4>
                    <button
                      className="btn btn-danger mt-2"
                      
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                </div>
              
            
          </div>
        </div>
        <div className="col-lg-4 col-md-12 mt-4 mt-lg-0">
          <div className="summary border rounded p-3">
            <p className="h4">
             
            </p>
            <p className="h3 text-end">
             
            </p>
            {/* <button
              className="btn btn-primary w-100"
              onClick={result}
            >
              Proceed to buy
            </button> */}
           
              <div style={{ textAlign: "end" }}>
                <button
                  type="button"
                  className="btn btn-primary w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  
                >
                  Buy Item
                 
                </button>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
