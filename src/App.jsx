import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import Header from "./components/Header";
import Contacts from "./pages/Contacts";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}
