import React from "react";
import {togglePanel} from "/actions/createActions";

class EventButton extends React.Component {
  state = {
    // currentMonth: new Date(),
    // selectedDate: new Date(),
  };

  renderEventButton({selectedDay, dispatch}) {
    return (
      <div>
        <div className="button">
          <button onClick={() => toggleEventPanel(selectedDay, dispatch)}>Add Event</button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="event-button">
        {this.renderEventButton()}
      </div>
    );
  }
}

export default EventButton;
