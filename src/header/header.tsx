import "./header.css";
import logo from "./img/Vector.png";
export const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <img src={logo} alt="logo" />
        <p>Travlog</p>
      </div>
      <div className="headerCenter">
        <ul>
          <li>Home</li>
          <li>Discover</li>
          <li>Special Deals</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="headerRight">
        <button className="buttonLogin">Log In</button>
        <button className="buttonSignUp">Sign Up</button>
      </div>
    </div>
  );
};
