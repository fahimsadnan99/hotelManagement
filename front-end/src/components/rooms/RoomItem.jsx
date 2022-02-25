import React from "react";
import {Link} from "react-router-dom"

const roomItem = ({ room }) => {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-3 my-3">
        <div className="card p-2">
          <img
            className="card-img-top mx-auto"
            src={room.images[0].url}
            height={175}
            width="100%"
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">
              <Link to={`/room/${room._id}`}>
                <a>{room.name}</a>
              </Link>
            </h5>

            <div className="ratings mt-auto mb-3">
              <p className="card-text">
                <b>${room.pricePerNight}</b> / night
              </p>

              <div className="rating-outer">
                <div
                  className="rating-inner"
                  style={{ width: `${(room.rating / 5) * 100}%` }}
                ></div>
              </div>
              <span id="no_of_reviews">({room.numOfReviews})</span>
            </div>

            <button className="btn btn-block view-btn">
              <Link to={`/room/${room._id}`}>View Details</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default roomItem;
