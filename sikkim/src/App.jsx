import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Login from "./pages/Login";
import Calendar from "./pages/Calendar";
import FestivalDetail from "./pages/FestivalDetail";
import Booking from "./pages/Booking";
import HotelDetails from "./pages/HotelDetails";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/login" element={<Login />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/calendar/:id" element={<FestivalDetail />} />
            <Route path="/bookingpage" element={<Booking />} />
            <Route path="/bookingpage/:id" element={<HotelDetails />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
