import React, { useEffect } from 'react';
import BuyBlue from '../images/icons/buy-blue.svg'


const ProductsList = ({ onLoadProd, products, hasError, isLoading, user, onClickRedeem }) => {

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
                <div className="">
                  {product.cost}
                  <button className="" onClick={() => onClickRedeem(product.productId)}>Redimir ahora</button>
                </div>
                {user.points < product.cost ? <div>Faltan: {product.cost - user.points} Puntos</div> : <div><img alt="" src={BuyBlue} /></div>}
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
