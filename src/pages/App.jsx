import { Route, Routes } from "react-router-dom";
import ForgotPasswordPage from "./forgot-password";
import Home from "./home";
import LoginPage from "./login";
import RegisterPage from "./register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>
    </div>
  );
}

export default App;
