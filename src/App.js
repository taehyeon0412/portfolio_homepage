import "./css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

//pages
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  useEffect(() => {
    const preventGoBack = () => {
      window.history.go(1);
      console.log("prevent go back!");
    };

    window.history.pushState(null, "", window.location.pathname);
    window.addEventListener("popstate", preventGoBack);

    return () => window.removeEventListener("popstate", preventGoBack);
  }, []);
  //뒤로가기 막기

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home/*" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
