import React from "react";
import Calendar from "./components/Calendar";
import EventButton from "./components/EventButton";
// import EventButton from ".components/EventButton";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
              calendar<b>challenge</b>
            </span>
          </div>
        </header>
        <main>
          <Calendar />
          <EventButton />
        </main>
      </div>
    );
  }
}

export default App;
