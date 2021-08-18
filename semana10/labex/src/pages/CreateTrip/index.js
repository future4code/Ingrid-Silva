import React from "react";
import { useProtectedPage } from "../TripDetails";

export default function CreateTrip() {
  const { isLogged } = useProtectedPage();

  if (!isLogged) return null;
  return <div>CreateTrip</div>;
}
