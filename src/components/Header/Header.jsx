import "./Header.css";
import Switch from "@mui/material/Switch";
import { useState } from "react";
export default function Header(props) {
  const [service, setService] = useState("to-do list");
  function handleServiceChange() {
    service === "to-do list" ? setService("notes") : setService("to-do list");
  }
  return (
    <>
      <header className="header">
        <div className="date">
          <span className="date__nth">4</span>
          <div className="date__details">
            <p className="date__month">JAN</p>
            <p className="date__year">2024</p>
          </div>
          <span className="date__day">Thursday</span>
        </div>
        <div className="menu">
          <div className="service">{service}</div>
          <Switch color="secondary" onChange={handleServiceChange} />
        </div>
      </header>
    </>
  );
}
