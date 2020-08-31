import React, { useEffect } from 'react';

const History = ({ onLoadHistory, history, hasError, isLoading }) => {

useEffect(() => {
  onLoadHistory();
    }, [onLoadHistory]);

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
      <h2>Historial</h2>
      <div className="row">
        {
          history.map((product, i) =>
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

export default History
