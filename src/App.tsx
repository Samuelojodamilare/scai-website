import { Helmet, HelmetProvider } from "react-helmet-async";

import Navbar from "./components/Header";
import HeroSection from "./components/HeroSection";
import Offer from "./components/Offer";
import CustomerNeed from "./components/CustomerNeed";
import Devices from "./components/Devices";
import Education from "./components/Education";
import StudentsGain from "./components/StudentsGain";
import Instructors from "./components/Instructors";
import Testimonies from "./components/Testimonies";
import Footer from "./components/Footer";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>SatelliteCAI - Smart Satellite Campus Management</title>
        <meta
          name="description"
          content="SatelliteCAI helps universities manage multiple campuses seamlessly with smart enrollment, analytics, and control systems."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <Navbar />
      <main>
        <HeroSection />
        <Offer />
        <CustomerNeed />
        <Devices />
        <Education />
        <StudentsGain />
        <Instructors />
        <Testimonies />
      </main>
      <Footer />
    </HelmetProvider>
  );
}

export default App;
