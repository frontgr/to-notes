import "./Header.css";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import { daysOfWeek, months } from "./dates.js";

export default function Header({ updateCurrentService }) {
  const [service, setService] = useState("to-do list");
  function handleServiceChange() {
    service === "to-do list" ? setService("notes") : setService("to-do list");
    updateCurrentService(service === "to-do list" ? "notes" : "to-do list");
  }
  const currentDate = new Date();
  const date = currentDate.getDate();
  const monthName = months[currentDate.getMonth()];
  const dayName = daysOfWeek[currentDate.getDay()];
  const year = currentDate.getFullYear();
  return (
    <>
      <header className="header">
        <div className="date">
          <span className="date__nth">{date}</span>
          <div className="date__details">
            <p className="date__month">{monthName}</p>
            <p className="date__year">{year}</p>
          </div>
          <span className="date__day">{dayName}</span>
        </div>
        <div className="menu">
          <div className="service">{service}</div>
          <Switch color="secondary" onChange={handleServiceChange} />
        </div>
      </header>
    </>
  );
}
