import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Provider } from "react-redux";
import store from "./store";
import AdminDashboard from "./components/AdminDashboard";
import ControllerDashboard from "./components/ControllerDashboard";
import HeadCoachDashboard from "./components/HeadCoachDashboard";
import CoachDashboard from "./components/CoachDashboard";
import Login from "./components/Login";

const App = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h1>Task Management App</h1>
      {user.isAuthenticated ? (
        renderDashboard(user.role)
      ) : (
        <Login />
      )}
    </div>
  );
};

const renderDashboard = (role) => {
  switch (role) {
    case "Admin":
      return <AdminDashboard />;
    case "Controller":
      return <ControllerDashboard />;
    case "Head Coach":
      return <HeadCoachDashboard />;
    case "Coach":
      return <CoachDashboard />;
    default:
      return null;
  }
};


const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWithStore;


