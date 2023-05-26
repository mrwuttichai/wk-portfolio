import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <div className="container mx-auto">
      <AnimatedCursor 
        innerSize={8}
        outerSize={8}
        color='0, 0, 0'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  )
}


export default App;