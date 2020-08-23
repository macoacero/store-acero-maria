import React, { useEffect } from 'react'
import PropTypes from 'prop-types'


const RepoList = ({ onLoad, products, hasError, isLoading }) => {

useEffect(() => {
    onLoad();
    }, []);

  if (hasError) {
    return (
      <div className="container">
        <h6>Sorry! There was an error loading the products.</h6>
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
      {
        products.map((repo, i) =>
          <div className="card"key={i}>
            <div className="">
                <img src={repo.img.url}/>
              <span className="" >
                {repo.category}
              </span>
              <span className="" >
                {repo.name}
              </span>
            </div>
          </div>)
      }
    </div>
  )
}

RepoList.propTypes = {
  products: PropTypes.array,
  hasError: PropTypes.bool,
  isLoading: PropTypes.bool
}

export default RepoList
