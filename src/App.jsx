import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
// import { AllUsers } from "./pages/AllUsers";
import { UserProfile, AdminProfile } from "./pages/Profile";
import "./App.css";

const IndexLandingPage = () => (
  <div>
    <LandingPage />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<IndexLandingPage />} />
        {/* <Route path="users" element={<AllUsers />} /> */}
        <Route path="/user_profile" element={<UserProfile />} />
        <Route path="/admin_profile" element={<AdminProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
