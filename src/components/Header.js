import React, { useEffect, useState } from 'react';
import Select from "react-select";

const Header = ({ onLoadUser, user, loadPoints, products }) => {

  const customStyles = {
    container: () => ({
      width: 200,
    }),
    menu:() => ({
      width: 200,
      background: '#ffffff',
      position: 'absolute'
    }),
  }

  const pointsOptions = [
    { value: 1000, label: "1000" },
    { value: 5000, label: "5000" },
    { value: 7500, label: "7500" }
  ];
 

  const [points, setPoints] = useState("");
    
  useEffect(() => {
    onLoadUser();
    setPoints(points);
      }, [onLoadUser, points]);

  const handleChangePoints = points => {
    setPoints(points);
    loadPoints(points.value);
  };

  return (
    <React.Fragment>
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="user-name">{user.name}</div>
            <div className="points">{user.points} <span>puntos</span></div>
          </div>
        </div>
        <Select styles={customStyles} placeholder=" Agregar puntos" options={pointsOptions} onChange={handleChangePoints} />
      </div>
      <div className="header">
        <div className="container">
          <div className="row">
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header
