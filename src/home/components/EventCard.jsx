import React from "react";
import { GetEvents } from "../services/Events";

const EventCard = ({ currentSearchText }) => {
  var events = GetEvents();
  var filteredEvents = [];
  if (currentSearchText) {
    filteredEvents = events.filter(
      (event) =>
        event.artist.toLowerCase().includes(currentSearchText) ||
        event.title.toLowerCase().includes(currentSearchText) ||
        event.location.toLowerCase().includes(currentSearchText)
    );
  }

  if (filteredEvents.length > 0) {
    return filteredEvents.map((event) => (
      <>
        <h2>event name: {event.title}</h2>
        <p>
          Artist: {event.artist}
          <br />
          Location: {event.location}
        </p>
      </>
    ));
  } else {
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
  }
};

export default EventCard;
