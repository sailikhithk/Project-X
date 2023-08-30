import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import { routes } from "./routes";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const Login = React.lazy(() => import("./components/Login"));
const Registration = React.lazy(() => import("./components/Registration"));

const App = () => {
  return (
    <>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="/" name="Login Page" element={<Login />} />
          <Route
            path="/registration"
            name="Registration Page"
            element={<Registration />}
          />
          <Route path="/" element={<MainLayout />}>
            {routes}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
