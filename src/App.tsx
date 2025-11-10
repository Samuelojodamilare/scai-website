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
    <>
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
    </>
  );
}

export default App;
