import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Contect from "./components/Contect";
import Services from "./components/Services";

import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contect.scss";
import "./styles/services.scss";
import "./styles/mediaquery.scss"


function App() {
  return (
   <Router>

    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contect />} />
      <Route path="/Services" element={<Services />} />
    </Routes>

    <Footer />
   </Router>
  );
}

export default App;
