import { Route } from "wouter";
// import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import AboutSection from "./pages/About";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import ServiceSection from "./pages/Service";

function App() {
  return (
    <div className="p-0">
      <Navbar />
      {/* <Route path="/" component={Home} /> */}
      <Route path="/login" component={() => <Login />} />
      <Route path="/" component={() => <LandingPage />} />
      {/* <Route path="/signup" component={() => <Signup />} /> */}
      <Route path="About" component={() => <AboutSection />} />
      <Route path="/services" component={() => <ServiceSection />} />
    </div>
  );
}

export default App;
