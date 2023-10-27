import "./css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:menuName/contact-me" element={<Home />} />
        <Route path="/:menuName/:Img_id" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
