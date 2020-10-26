import React from "react";
import { GetEvents } from "../services/Events";

const EventCard = () => {
  var events = GetEvents();

  return events.map((event) => (
    <>
      <h2>event name: {event.title}</h2>
      <p>
        Artist: {event.artist}
        <br />
        Location: {event.location}
      </p>
    </>
  ));
};

export default EventCard;
