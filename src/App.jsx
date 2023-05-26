import { useRef } from "react";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="container mx-auto">
        <Navbar />
        <MainContent />
        <Footer />
    </div>
  )
}


export default App;