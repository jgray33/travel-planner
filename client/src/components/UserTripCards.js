import React from "react";
import { Link } from "react-router-dom";
import EditTrip from "./EditTrip";
import DeleteTrip from "./DeleteTrip";
const dayjs = require("dayjs");

const UserTripCards = ({ trips }) => {
  return (
    <div>
      {trips.map((trip) => (
        <div className="row my-3" key={trip._id}>
          <div className="col">
            <div className="card">
              <Link className="text-decoration-none" to={`/trips/${trip._id}`}>
                <div className="card-body">
                  <h4 className="card-title text-decoration-none card-headings">
                    {trip.tripName}
                  </h4>

                  <h6 className="card-subtitle mb-2 text-muted">
                    {trip.description}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Start: {dayjs(trip.startDate).format("dddd, MMMM D, YYYY")}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    End: {dayjs(trip.endDate).format("dddd, MMMM D, YYYY")}
                  </h6>
                </div>
              </Link>
              <div className="card-footer">
                <div className="row">
                  <div className="col">
                    <DeleteTrip tripId={trip._id} />
                  </div>
                  <div className="col text-end">
                    <EditTrip
                      tripId={trip._id}
                      tripName={trip.tripName}
                      description={trip.description}
                      location={trip.location}
                      startDate={trip.startDate}
                      endDate={trip.endDate}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserTripCards;
