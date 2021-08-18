import React from "react";

import { useProtectedPage } from "../TripDetails/index";

const AdminHome = () => {
  const { isLogged } = useProtectedPage();

  if (!isLogged) return null;

  return <div>Admin Homepage</div>;
};

export default AdminHome;
