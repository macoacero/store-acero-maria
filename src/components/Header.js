import React, { useEffect, useState } from 'react';
import Select from "react-select";

const options = [
  { value: 1000, label: "1000" },
  { value: 5000, label: "5000" },
  { value: 7500, label: "7500" }
];

const Header = ({ onLoadUser, hasError, user, loadPoints }) => {

const [points, setPoint] = useState("");
  
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

  const handleChangePoints = points => {
    setPoint(points);
    loadPoints(points)
  };

  return (
    <React.Fragment>
      <div className="top-bar">
        <div>{user.name}</div>
        <div>{user.points}</div>
      </div>
      <div className="header">
        <div className="container">
          <div className="row">
            <Select options={options} value={points} onChange={() => handleChangePoints(points.value)} />
            {console.log(points.value)}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header
