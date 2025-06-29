import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignupPage from "./pages/Signup";
import LoginZint from "./pages/LogZint";
import Profile from "./pages/Profile";


export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginZint />} />
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
