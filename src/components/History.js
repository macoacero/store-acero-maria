import React, { useEffect, useState } from 'react';
import { Pagination } from "@material-ui/lab";
import usePagination from "./Pagination";

const History = ({ onLoadHistory, history, hasError, isLoading }) => {

  let [page, setPage] = useState(1);
  const PER_PAGE = 12;
  
  const count = Math.ceil( history.length / PER_PAGE);
  
  const _DATA = usePagination(history, PER_PAGE);
  
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

useEffect(() => {
  onLoadHistory();
    }, [onLoadHistory]);

  return (
    <div className="container">
      <h2>Historial</h2>
      <div className="row">
      {isLoading ? <h6>Loading…</h6> : !hasError ?
          _DATA.currentData().map((product, i) =>
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
      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </div>
  )
}

export default History
