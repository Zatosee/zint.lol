import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignupPage from "./pages/Signup";
import LoginZint from "./pages/LogZint";


export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginZint />} />
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}
