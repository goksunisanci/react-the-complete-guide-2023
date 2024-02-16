import { Outlet } from "react-router-dom"

import EventsNavigation from "../components/EventsNavigation"

const EventsLayoutPage = () => {
    return (
        <>
            <EventsNavigation />
            <Outlet />
        </>
    )
}

export default EventsLayoutPage