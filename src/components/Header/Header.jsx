import "./Header.css";
import Switch from "@mui/material/Switch";

export default function Header(props) {
  return (
    <>
      <div className="date">
        <span className="date__nth">4</span>
        <div className="date__details">
          <p className="date__month">JAN</p>
          <p className="date__year">2024</p>
        </div>
        <span className="date__day">Thursday</span>
      </div>
      <div className="service">to-do list</div>
      <Switch />
    </>
  );
}
