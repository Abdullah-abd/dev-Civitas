import { Route } from "wouter";
// import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";

function App() {
  return (
    <div className="p-0">
      <Navbar />
      {/* <Route path="/" component={Home} /> */}
      <Route path="/login" component={() => <Login />} />
      <Route path="/" component={() => <LandingPage />} />
    </div>
  );
}

export default App;
