import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop"; // Path correct ah check pannikonga
import Navbar from "./components/common/navbar/Navbar";
// ... matha imports

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* <-- Kandippa Router-ku ulla, Routes-ku mela irukkanum */}
      <Navbar />
      <Routes>
        {/* Unga routes ellam inga varum */}
      </Routes>
    </Router>
  );
}

export default App;