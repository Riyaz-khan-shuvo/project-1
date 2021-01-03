import React, { useState } from 'react';
import fakeData from '../../../FakeData/FakeData'
import EventDetails from '../EventDetails/EventDetails';
import './Events.css'

const Event = () => {
    const [event, setEvent] = useState(fakeData)
    return (
        <div className="py-5 events" id="event">
            <h3 className="mb-5">Our Events</h3>
            <div className="container">
                <div className="row">
                    {
                        event.map(event => <EventDetails event={event}></EventDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Event;