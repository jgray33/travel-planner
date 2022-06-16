import React from "react";
import { Link } from "react-router-dom";
import EditTrip from "./EditTrip";
import DeleteTrip from "./DeleteTrip";
const styles = {
  card: {
    width: "18rem",
  },
};

const UserTripCards = ({ trips }) => {

  return (
    <div className="row">
      {trips.map((trip) => (
        <div className="col" key={trip._id}>
          <div className="card" styles={styles.card}>
            <div className="card-body">
              <Link className="text-decoration-none" to={`/trips/${trip._id}`}>
                <h5 className="card-title link-secondary stretched-link text-decoration-none">
                  {trip.tripName}
                </h5>
              </Link>
              <h6 className="card-subtitle mb-2 text-muted">
                {trip.description}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                Start: {trip.startDate}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                End: {trip.endDate}
              </h6>
            </div>
          </div>
          <EditTrip
            tripId={trip._id}
            tripName={trip.tripName}
            description={trip.description}
            location={trip.location}
            startDate={trip.startDate}
            endDate={trip.endDate}
          />

          <DeleteTrip tripId={trip._id} />
        </div>
      ))}
    </div>
  );
};

export default UserTripCards;
