import React, { useEffect } from 'react'


const ProductsList = ({ onLoadProd, products, hasError, isLoading }) => {

useEffect(() => {
  onLoadProd();
    }, [onLoadProd]);

  if (hasError) {
    return (
      <div className="container">
        <h6>Error cargando los productos. Pro favor intente más tarde.</h6>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="container">
        <h6>Loading…</h6>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="row">
        {
          products.map((product, i) =>
            <div className="col-sm-4">
              <div className="card" key={i}>
                  <img alt="product" src={product.img.url}/>
                  <div className="txt">
                  <span className="category" >
                    {product.category}
                  </span>
                  <span className="name" >
                    {product.name}
                  </span>
                </div>
              </div>
          </div>)
        }
      </div>
    </div>
  )
}

export default ProductsList
