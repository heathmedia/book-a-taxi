import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import BookRide from "./pages/BookRide";
import RideHistory from "./pages/RideHistory";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>

        <Navbar />

        <main className="flex flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rides" element={<RideHistory />} />
            <Route path="/book" element={<BookRide />} />
          </Routes>
        </main>

        <Footer></Footer>

      </BrowserRouter>
    </div>
  );
}

export default App;