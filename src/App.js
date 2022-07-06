import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BASE_URL } from "./Constants";
import { ContextWebInfo } from "./contexts/context";
import Catalog from "./pages/catalog/Catalog";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
  const [webInfo, setWebInfo] = useState(null)

  const getWebInfo = async () => {
    try {
      const responseJson = await axios.get(`${BASE_URL}/web-info`)
      
      setWebInfo(responseJson.data.result)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getWebInfo()
  }, [])

  return (
    <ContextWebInfo.Provider value={{ webInfo }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ContextWebInfo.Provider>
  );
}

export default App;
