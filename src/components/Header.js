import React, { useEffect } from 'react'


const Header = ({ onLoadUser, hasError, user }) => {

useEffect(() => {
  onLoadUser();
    }, [onLoadUser]);

  if (hasError) {
    return (
      <div className="container">
        <h6>Error cargando los pooductos. Por favor intente más tarde.</h6>
      </div>
    )
  }

  return (
    <React.Fragment>
      <div className="top-bar">
        <div>{user.name}</div>
        <div>{user.points}</div>
      </div>
      <div className="header">
        <div className="row">
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header
