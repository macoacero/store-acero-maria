import React, { useEffect } from 'react';
import BuyBlue from '../images/icons/buy-blue.svg'


const ProductsList = ({ onLoadProd, products, hasError, isLoading, user, onClickRedeem, errorRed }) => {

useEffect(() => {
  onLoadProd();
    }, [onLoadProd]);

  if (hasError) {
    return (
      <div className="container">
        <h6>Error cargando los productos. Por favor intente más tarde.</h6>
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
      <h2>Lista de productos</h2>
      <div className="row">
        {
          products.map((product, i) =>
            <div className="col-sm-4">
              <div className="card" key={i}>
              {user.points >= product.cost ?
                <div className="redeem-product">
                  {product.cost}
                  <button className="" onClick={() => onClickRedeem(product._id)}>Redimir ahora</button>
                  {errorRed ? "No se pudo redimir el producto. Intente más tarde" : null}
                </div> : null}
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
