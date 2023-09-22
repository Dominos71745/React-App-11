import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

function EvenetsRootLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}

export default EvenetsRootLayout;
