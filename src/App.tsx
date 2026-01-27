import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { Routes, Route, useLocation } from "react-router-dom";
import { FaArrowAltCircleUp } from "react-icons/fa";

import Navigation from "./component/Navbar/Navigation";
import Footer from "./component/Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import Loader from "./component/Loader/Loader"; // 👈 adjust path if needed

import Home from "./pages/Home/Home";
import MoreServices from "./pages/MoreServices/MoreServices";
import MoreServices2 from "./pages/MoreServices/MoreServices2";
import MoreServices3 from "./pages/MoreServices/MoreServices3";
import MoreServices4 from "./pages/MoreServices/MoreServices4";
import MoreServices5 from "./pages/MoreServices/MoreServices5";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Initial load + AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // loader duration

    return () => clearTimeout(timer);
  }, []);

  // Loader on route change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [location.pathname]);


  const transparentFooter =
    location.pathname !== "/" &&
    location.pathname !== "/more-services/Marketers";

  return (
    <>
      {/* ===== Global Loader ===== */}
      {loading && <Loader />}

      {/* Scroll to top on route change */}
      <ScrollToTop />

      {/* Back to top button */}
      <a href="#" className="Up_btn">
        <FaArrowAltCircleUp />
      </a>

      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more-services/Designers" element={<MoreServices />} />
        <Route path="/more-services/Marketers" element={<MoreServices2 />} />
        <Route path="/more-services/Video" element={<MoreServices3 />} />
        <Route path="/more-services/Web" element={<MoreServices4 />} />
        <Route path="/more-services/Customer" element={<MoreServices5 />} />
      </Routes>

      <Footer transparent={transparentFooter}/>
    </>
  );
}

export default App;
