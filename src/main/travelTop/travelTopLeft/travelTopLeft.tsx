import "./travelTopLeft.css";
import Vector1 from "./img/Vector (1).png";
import PlayCircl from "./img/play-circle.5 1.png";
export const TravelTopLeft = () => {
  return (
    <div className="travelTopLeft">
      <div className="explore">
        <p>Explore the world!</p>
        <img src={Vector1} alt="Vector1" />
      </div>
      <div className="destination">
        <span>Travel </span>
        <span className="destinationActive">top destination </span>
        <span>of the world</span>
      </div>
      <div className="text">
        <p>We always make our customer happy by</p>
        <p>providing</p>
        <p>as many choices as possible</p>
      </div>
      <div className="startButton">
        <button className="start">Get Started</button>
        <button className="watch">
          <img src={PlayCircl} alt="PlayCircl" />
          Watch Demo
        </button>
      </div>
    </div>
  );
};
