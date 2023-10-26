import "./css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contact" element={<Home />} />
        <Route path="/project/:id" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
