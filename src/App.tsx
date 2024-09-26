import { Navigate, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Signup } from "./pages/Signup/Signup";
import { useAuthContext } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

export function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="app-container">
      <ScrollToTop />
      <main className="main-container">
        <Routes>
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to={"/"} /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to={"/"} /> : <Signup />}
          />
        </Routes>
      </main>
      <Toaster />
    </div>
  );
}
