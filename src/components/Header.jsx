import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header(props) {
  let navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  return (
    <div className="header">
      {location.pathname !== "/movie" && (
        <div className="header__sort">Sort</div>
      )}
      <div className="header__title" onClick={() => navigate("/")}>
        Movies
      </div>
      {location.pathname !== "/movie" && (
        <input
          className="header__input"
          type="search"
          placeholder="Search Movies"
          onChange={props.handleChange}
        />
      )}
    </div>
  );
}
