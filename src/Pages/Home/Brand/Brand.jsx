// import React from "react";
// import ReactDOM from "react-dom";
// import "./brand.css";
import { BsArrowRightSquare } from "react-icons/bs";
const Brand = ({ brand }) => {
  console.log(brand);

  const { brand_name, id, price, rating, description, image_url } = brand;

  return (
    <div>
      <div className="card  card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-[300px] rounded-2xl"
            src={image_url}
            alt="Brand image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Brand: {brand_name}</h2>
          <p>Rating: {rating}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              Show More
              {/* <span className="text-3xl"><BsArrowRightSquare
               className="bg-purple-300"
               ></BsArrowRightSquare></span> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
