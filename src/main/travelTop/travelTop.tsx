import { TravelTopLeft } from "./travelTopLeft/travelTopLeft";
import { TravelTopRight } from "./travelTopRight/travelTopRight";

export const TravelTop = () => {
  return (
    <div style={{ display: "flex" }}>
      <TravelTopLeft />
      <TravelTopRight />
    </div>
  );
};
