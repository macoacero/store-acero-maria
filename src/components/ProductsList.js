import React, { useEffect, useState } from 'react';
import BuyBlue from '../images/icons/buy-blue.svg';
import Select from "react-select";
import { Pagination } from "@material-ui/lab";
import usePagination from "./Pagination";

const ProductsList = ({ onLoadProd, products, hasError, isLoading, user, onClickRedeem, errorRed, points, productId }) => {

  const customStyles = {
    container: () => ({
      width: 220,
    }),
    menu:() => ({
      width: 220,
      background: '#ffffff',
      position: 'absolute',
      zIndex: 500
    }),
  }

const [newcategory, setNewcategory] = useState(products);
const [category, setCategory] = useState("");

const unique = products.filter((cat, index, self) =>
  index === self.findIndex((t) => (
    t.category === cat.category
  ))
)

const optionsCategory = [{ label: "Todas las categorias", value: 'all'}].concat(unique.map(prod => {
  return { value: prod.category, label: prod.category }
}));

const handleChangeCategory = category => {
  setCategory(category);
};

let [page, setPage] = useState(1);
const PER_PAGE = 12;

const count = Math.ceil(
  category.value === 'all' || category === '' ?  
  products.length / PER_PAGE :  
  products.filter(cat => cat.category === category.value).length / PER_PAGE);

const _DATA = usePagination(
  category.value === 'all' || category === '' ? 
  products :  products.filter(cat => cat.category === category.value), PER_PAGE);

const handleChange = (e, p) => {
  setPage(p);
  _DATA.jump(p);
};

useEffect(() => {
  onLoadProd();
}, [onLoadProd, points]);


  return (
    <div className="container">
      <Select placeholder={category.value} styles={customStyles} options={optionsCategory} defaultValue={{ label: "Todas las categorias", value: 'all' }} onChange={handleChangeCategory}/>
      <h2>Productos</h2>
      <div className="row">
        {isLoading ? <h6>Loading…</h6> : !hasError ?
          _DATA.currentData().map((product, i) =>
            <div className="col-sm-4" key={i}>
              <div className="card">
              {user.points >= product.cost ?
                <div className={!errorRed ? product._id === productId ? "redeemed-product" : "no-redeemed-product" : "error-redeeming-product" }>
                  <span className="points-redeem">{product.cost} Puntos</span>
                  <button className="redeem-button" onClick={() => onClickRedeem(product._id)}>Redimir ahora</button>
                  {!errorRed ? product._id === productId ? "El pruducto fue redimido exitosamente" : null : "No se pudo redimir el producto. Intente más tarde"}
                </div> : null}
                {user.points < product.cost ? <div className="missing-points">Faltan: {product.cost - user.points} Puntos</div> : <div><img alt="" src={BuyBlue} className="redeemable"/></div>}
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

export default ProductsList
