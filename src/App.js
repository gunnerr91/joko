import React from "react";
import "./App.css";
import EventCard from "./home/components/EventCard";
import NavbarMain from "./navbar/components/NavbarMain";

const App = () => {
  return (
    <>
      <NavbarMain />
      <EventCard />
    </>
  );
};

export default App;
