import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import OceanFreightPage from "./pages/OceanFreightPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/shipment/ocean-freight" element={<OceanFreightPage />} />
        <Route
          path="/"
          element={<Navigate to="/shipment/ocean-freight" replace />}
        />
        <Route
          path="*"
          element={<Navigate to="/shipment/ocean-freight" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
