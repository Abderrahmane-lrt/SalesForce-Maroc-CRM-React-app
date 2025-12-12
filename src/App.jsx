import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import HomePage from "./home/Home";
import DashboardLayout from "./publicLayout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Opportunities from "./pages/Opportunities";
import Pipeline from "./pages/Pipeline";
import NotFound from "./not-found";
import { Atom, BlinkBlur } from "react-loading-indicators";
import OpportunitiesSelector from "./opportinities";
<<<<<<< HEAD
import OpportunityDetails from "./pages/OpportunityDetails";
=======
import AddOpportunity from "./pages/addopportunity";
>>>>>>> aff0d4805f0917b675328c6ff897ed484fc36837

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
    useEffect(() => {
  if (location.pathname === "/" || location.pathname === '/dashboard') {
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
  }
    }, [location.pathname]);

  return (
    <>
      {/* Loading */}
      {loading && (
        <div className="fullpage-loader">
          <BlinkBlur
            color={["#ff6100"]}
            size="medium"
            text="Please wait..."
            textColor="#000000"
          />
        </div>
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<OpportunitiesSelector />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pipeline" element={<Pipeline />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/pipline" element={<Pipeline />} />
<<<<<<< HEAD
          <Route path="/opportunities/:id" element={<OpportunityDetails />} />
=======
          <Route path="/addOpportunity" element={<AddOpportunity />} />
>>>>>>> aff0d4805f0917b675328c6ff897ed484fc36837
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
