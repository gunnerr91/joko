import React, { useState } from "react";
import "./App.css";
import EventCard from "./home/components/EventCard";
import SearchTextBox from "./home/components/SearchTextBox";
import NavbarMain from "./navbar/components/NavbarMain";

const App = () => {
  const [currentSearchText, setCurrentSearchText] = useState("");
  return (
    <>
      <NavbarMain />
      <SearchTextBox
        currentSearchText={currentSearchText}
        setCurrentSearchText={setCurrentSearchText}
      />
      <EventCard currentSearchText={currentSearchText} />
    </>
  );
};

export default App;
