import logo from "./logo.svg";
import "./App.css";
import { styled } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import Companies from "./pages/Companies";
import WhatSetUsApartPage from "./pages/WhatSetUsApartPage";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import Fotter from "./pages/Fotter";
import SplashScreen from "./pages/SplashScreen";
import Decor from "./components/Decor";
import WhatWeDo from "./pages/WhatWeDoPage";

function App() {
  return (
    <Router>
      <Container>
        <SplashScreen />
        <LandingPage />
        <Decor/>
        <AboutUs />
        <Companies />
        <WhatSetUsApartPage />
        <Services />
        <Solutions />
        <Fotter />
      </Container>
    </Router>
  );
}

const Container = styled.div``;

export default App;
