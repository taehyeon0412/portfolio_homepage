import "./css/App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

//pages
import Home from "./Pages/Home";
import About from "./Pages/About";

//component
import Background from "./components/Background";
import Loading from "./components/Loading";

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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2800);
  }, []);

  console.log(isLoading);

  return (
    <BrowserRouter>
      <Background />
      {isLoading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/home/*" element={<Home />} />
          <Route path="/home/project/:Img_id" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
