import React, { useEffect, useState } from 'react';
import BuyBlue from '../images/icons/buy-blue.svg';
import Select from "react-select";


const ProductsList = ({ onLoadProd, products, hasError, isLoading, user, onClickRedeem, errorRed, points }) => {

  const customStyles = {
    container: () => ({
      width: 200,
    }),
    menu:() => ({
      width: 200,
      background: '#ffffff'
    }),
  }

const [newcategory, setNewcategory] = useState(products);
const [category, setCategory] = useState("");

const unique = products.filter((cat, index, self) =>
  index === self.findIndex((t) => (
    t.category === cat.category
  ))
)

const optionsCategory = unique.map(prod => {
  return { value: prod.category, label: prod.category }
});

const handleChangeCategory = category => {
  setCategory(category);
};

useEffect(() => {
  onLoadProd();
}, [onLoadProd, points]);

useEffect(() => {
  setNewcategory(
    category === '' ? products : products = products.filter(cat => cat.category === category.value)
  )
}, [category, products]);

  return (
    <div className="container">
      <Select placeholder="Categoría" styles={customStyles} options={optionsCategory} value={category.value} onChange={handleChangeCategory}/>
      <h2>Productos</h2>
      <div className="row">
        {isLoading ? <h6>Loading…</h6> : !hasError ?
          newcategory && newcategory.map((product, i) =>
            <div className="col-sm-4" key={i}>
              <div className="card">
              {user.points >= product.cost ?
                <div className="redeem-product">
                  <span className="points-redeem">{product.cost} Puntos</span>
                  <button className="redeem-button" onClick={() => onClickRedeem(product._id)}>Redimir ahora</button>
                  {/* {errorRed ? "No se pudo redimir el producto. Intente más tarde" : null} */}
                </div> : null}
                {console.log('errorRed', errorRed)}
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
    </div>
  )
}

export default ProductsList
