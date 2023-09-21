import React from "react";
import Experience from './components/Experience';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Recommend from './components/Recommend';
import Slider from './components/Slider';
import Campaign from './components/Campaign';
function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Experience />
      <Cards />
      <Campaign/>
      <Recommend />
      <Footer />
    </div>
  );
}
export default App;
