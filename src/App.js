import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import CoinPage from "./pages/CoinPage";
import Box from "@mui/material/Box";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "black", color: "white", height: "100vh" }}>
        <Navbar />

        <Routes>
          <Route path="/coin" element={<CoinPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
