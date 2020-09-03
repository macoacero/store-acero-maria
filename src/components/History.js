import React, { useEffect } from 'react';

const History = ({ onLoadHistory, history, hasError, isLoading }) => {

useEffect(() => {
  onLoadHistory();
    }, [onLoadHistory]);

  return (
    <div className="container">
      <h2>Historial</h2>
      <div className="row">
      {isLoading ? <h6>Loading…</h6> : !hasError ?
          history.map((product, i) =>
            <div className="col-sm-4">
              <div className="card" key={i}>
                <img alt="product" src={product.img.url} className="image-prod"/>
                <div className="txt">
                  <span className="category" >
                    {product.category}
                  </span>
                  <span className="name" >
                    {product.name}
                  </span>
                </div>
              </div>
          </div>) : <div>Error cargando los productos. Por favor intente más tarde.</div>
        }
      </div>
    </div>
  )
}

export default History
