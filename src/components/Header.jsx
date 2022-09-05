import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  let navigate = useNavigate();

  return <div className="header" onClick={() => navigate("/")}>Movies</div>;
}
