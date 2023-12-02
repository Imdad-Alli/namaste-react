import {CDN_URL} from "../utils/constants";

const ResturantCard = (props) => {
    const{resData}=props;
    // optional chaining
    const{cloudinaryImageId, name, avgRating, cuisines, costForTwo}=resData?.info;
  return (
    <div className="card">
        {/* we cant add two string using + in jsx , but we can do in js , so we need to perform within  {} */}
      <img src={CDN_URL+cloudinaryImageId} />
      <h2>{name}</h2>
      <p>{cuisines.join(", ")}</p>  {/* we can perform .join operation to separate two elements in an array */}
      <h3>{avgRating} stars</h3>
      <h3>{costForTwo}</h3>
    </div>
  );
};

export default ResturantCard;