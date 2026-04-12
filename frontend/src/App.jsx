import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import BookRide from "./pages/BookRide";
import RideHistory from "./pages/RideHistory";

function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rides" element={<RideHistory />} />
        <Route path="/book" element={<BookRide />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;