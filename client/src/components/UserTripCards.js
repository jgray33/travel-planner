import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
const styles = {
  card: {
    width: "18rem",
  },
};

const UserTripCards = ({ trips }) => {
  trips.map((trip) => console.log(trip.tripName));

  return (
    <div>
      
      {trips.map((trip) => (
        <div className="card" styles={styles.card}>
          <div className="card-body">
            <Link
              className="btn btn-block btn-squared btn-light text-dark"
              to={`/trips/${trip._id}`}
            >
              <h5 className="card-title">{trip.tripName}</h5>
            </Link>
            <h6 className="card-subtitle mb-2 text-muted">
              {trip.description}
            </h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserTripCards;
