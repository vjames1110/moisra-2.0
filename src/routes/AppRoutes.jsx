import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import ServicePage from "../pages/services/ServicePage";

function AppRoutes() {

  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route
        path="/services/:serviceSlug"
        element={<ServicePage />}
      />

    </Routes>
  );

}

export default AppRoutes;