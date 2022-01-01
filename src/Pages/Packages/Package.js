import React from "react";
import "./Package.css";
import { useNavigate } from "react-router-dom";
const Package = ({ singlepPackage }) => {
  const { _id, name, price, Description, Img } = singlepPackage;
  const navigate = useNavigate();
  const handlePackageBtn = () => {
    navigate(`/placeorder/${_id}`);
  };
  return (
    <div className="col mb-4 " id="packages">
      <div className="card h-100 ">
        <img
          src={Img}
          className="card-img-top p-3 rounded"
          alt="..."
          height="450"
        />
        <div className="card-body">
          <h2 className="card-title text-danger">{name}</h2>
          <p className="card-text text-justify ">{Description}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">
            <h4 className="text-primary mt-1 mb-5">Price: {price}</h4>

            <button onClick={handlePackageBtn} className="btn btn-danger mb-3">
              {" "}
              <i className="fas fa-shopping-cart"></i> Book Package{" "}
            </button>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Package;
