import React from "react";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import CalendarMain from "./components/Layout/CalendarMain";
import "./App.css";

function App() {

  return (
    <>
      <div className="py-10 px-4 relative">
        <Header />
        <div className="flex flex-row">
        <Sidebar />
        <CalendarMain/>
        </div>
      </div>
    </>
  );
}

export default App;
