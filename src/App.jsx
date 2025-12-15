import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import Header from "./components/Header";
import Contacts from "./pages/Contacts";
import { refreshThunk } from "./redux/auth/operations";
import { selectLoggedIn, selectRefresh } from "./redux/auth/selectors";

export default function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectLoggedIn);
  const isRefreshing = useSelector(selectRefresh);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  if (isRefreshing) {
    return null;
  }

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contacts" element={isLoggedIn && <Contacts />} />
      </Routes>
    </>
  );
}
