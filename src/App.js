import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navabr/Navbar";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Tasker from "./pages/Tasker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="flex">
          <Sidebar />
          <Navbar />
        </div>
      </Router>
    </>
  );
}

export default App;
