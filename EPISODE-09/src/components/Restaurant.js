import {CDN_URL} from "../utils/constants";

const ResturantCard = (props) => {
    const{resData}=props;
    const{cloudinaryImageId, name, avgRating, cuisines, costForTwo}=resData?.info;

  return (
    <div className="card">
      <img src={CDN_URL+cloudinaryImageId} />
      <h2>{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <h3>{avgRating} stars</h3>
      <h3>{costForTwo}</h3>
    </div>
  );
};
export default ResturantCard;