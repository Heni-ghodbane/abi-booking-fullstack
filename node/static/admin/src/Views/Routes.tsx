import UsersView from "./Dashboard/Views/UsersViews/UsersView";
import VehicleFormView from "./Dashboard/Views/VehiclesView/VehicleFormView";
import VehiclesView from "./Dashboard/Views/VehiclesView/VehiclesView";

export default {
    Dashboard: {
        path: '/',
        exact: true,
        component: UsersView,
    },
    ListUsers: {
        path: '/users',
        exact: true,
        component: UsersView,
    },
    NewVehicles: {
        path: '/vehicles/create',
        exact: true,
        component: VehicleFormView,
    },
    ListVehicles: {
        path: '/vehicles',
        exact: true,
        component: VehiclesView,
    },
};
