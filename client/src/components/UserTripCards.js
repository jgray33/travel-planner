import React from "react";
import { Link } from "react-router-dom";

const styles = {
  card: {
    width: "7rem",
  },
};

const UserTripCards = ({ trips }) => {
  trips.map((trip) => console.log(trip.tripName));

  return (
    <div>
      <h1>Your trips</h1>
      {trips.map((trip) => (
        <div
          className="card m-4 border border-danger"
          style={{ width: "18rem", height: "9rem" }}
        >
          <div className="card-body">
            <Link
              className="btn btn-primary btn-block btn-squared btn-light text-dark"
              to={`/trips/${trip._id}`}
            >
              <h5 className="card-title">{trip.tripName}</h5>
            </Link>
            <h6 className="card-subtitle mb-2 p-3 text-muted">
              {trip.description}
            </h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserTripCards;
