import { Link, Route } from "wouter";
// import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="p-4">
      <Navbar />
      <nav className="flex gap-4 mb-4">
        {/* <Link href="/">Home</Link> */}
        <Link href="/login">Login</Link>
      </nav>

      {/* <Route path="/" component={Home} /> */}
      <Route path="/login" component={() => <Login />} />
    </div>
  );
}

export default App;
