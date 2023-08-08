import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import { AuthContextProvider } from "./context/AuthContext.js";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
