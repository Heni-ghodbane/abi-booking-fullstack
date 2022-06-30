import React from "react";
import { Routes, Route } from "react-router-dom";

import UsersView from "../Views/UsersViews/UsersView";
import VehiclesView from "../Views/VehiclesView/VehiclesView";
import VehicleFormView from "../Views/VehiclesView/VehicleFormView";

const DashboardBody = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<UsersView />} />
        <Route path='/users' element={<UsersView />} />
        <Route path='/vehicles' element={<VehiclesView />} />
        <Route path='/vehicles/create' element={<VehicleFormView />} />
    </Routes>
    </>
  );
};

export default DashboardBody;
