import React, { useEffect, useState } from 'react';
import BuyBlue from '../images/icons/buy-blue.svg';
import Select from "react-select";


const ProductsList = ({ onLoadProd, products, hasError, isLoading, user, onClickRedeem, errorRed }) => {

  const customStyles = {
    container: () => ({
      width: 200,
    }),
    menu:() => ({
      width: 200,
      background: '#ffffff'
    }),
  }

useEffect(() => {
  onLoadProd();
    }, [onLoadProd]);

const [newcategory, setNewcategory] = useState(products);
const [category, setCategory] = useState("");

const unique = products.filter((thing, index, self) =>
  index === self.findIndex((t) => (
    t.category === thing.category
  ))
)

const optionsCategory = unique.map(prod => {
  return { value: prod.category, label: prod.category }
});

let newProducts = [...products];

const handleChangeCategory = category => {
  setCategory(category);
  if (category.value) {
    newProducts = newProducts.filter(cat => cat.category === category.value);
  }
  setNewcategory(newProducts);
};

  return (
    <div className="container">
      <Select styles={customStyles} options={optionsCategory} value={category.value} onChange={handleChangeCategory}/>
      <h2>Lista de productos</h2>
      <div className="row">
        {isLoading ? <h6>Loading…</h6> : !hasError ?
          newcategory && newcategory.map((product, i) =>
            <div className="col-sm-4" key={i}>
              <div className="card">
              {user.points >= product.cost ?
                <div className="redeem-product">
                  {product.cost}
                  <button className="" onClick={() => onClickRedeem(product._id)}>Redimir ahora</button>
                  {errorRed ? "No se pudo redimir el producto. Intente más tarde" : null}
                </div> : null}
                {console.log('errorRed', errorRed)}
                {user.points < product.cost ? <div>Faltan: {product.cost - user.points} Puntos</div> : <div><img alt="" src={BuyBlue} /></div>}
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
