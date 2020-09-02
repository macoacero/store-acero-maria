import React, { useEffect, useState } from 'react';
import Select from "react-select";

const options = [
  { value: 1000, label: "1000" },
  { value: 5000, label: "5000" },
  { value: 7500, label: "7500" }
];

const Header = ({ onLoadUser, user, loadPoints }) => {

const [points, setPoints] = useState("");
  
useEffect(() => {
  onLoadUser();
    }, [onLoadUser]);

  const handleChange = points => {
    setPoints(points);
    loadPoints(points.value)
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
            <Select options={options} value={points.value} onChange={handleChange} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header
