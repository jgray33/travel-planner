import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";

const styles= {
  card: {
    width: "18rem",
  }
}

const UserTripCards = ({trips}) => {
  
console.log(trips)
{trips.map((trip)=>(
  console.log(trip.tripName)
) )}

  return (
    <div>
      <h1>Your trips</h1> 
    {trips.map((trip) => (
      <div className="card" styles={styles.card}>
  <div className="card-body">
    <h5 className="card-title">{trip.tripName}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{trip.description}</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
  </div>
    ))}
    </div>
  )
 
};

export default UserTripCards;
