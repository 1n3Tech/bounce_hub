import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { AuthProvider } from "./context/auth";
import PublicRoute from "./routes/PublicRoute";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";
import PrivateRoute from "./routes/PrivateRoute";
import Login from "./pages/Login";

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path="/signup" element={<PublicRoute>
          <SignUp />
        </PublicRoute>} />
        
        <Route path="/welcome" element={<PublicRoute>
          <Landing />
        </PublicRoute>} />
        
        <Route path="/login" element={<PublicRoute>
          <Login />
        </PublicRoute>} />
      </Routes>
    </AuthProvider>
    );
}

export default App
