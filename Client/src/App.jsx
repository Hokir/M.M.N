import "@Assets/CSS/App.css";
import { Router } from "./Router/index";

import { Navbar } from "@Components/Navbar/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}
