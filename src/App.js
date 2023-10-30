import "./css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import Home from "./Pages/Home";
import { useEffect } from "react";

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
        <Route path="/:menuName/contact-me" element={<Home />} />
        <Route path="/:menuName/:Img_id" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
