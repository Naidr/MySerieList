import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Login from "./pages/login/Login";
import Singup from "./pages/singup/Singup";
import Inicial from "./pages/inicial/Inicial";
import Mylist from "./pages/mylist/Mylist";
import Viewitem from "./pages/viewitem/Viewitem";
import Settinguser from "./pages/settinguser/Settinguser";
import Additem from "./pages/additem/Additem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/inicial" element={<Inicial />} />
        <Route path="/mylist" element={<Mylist />} />
        <Route path="/viewitem" element={<Viewitem />} />
        <Route path="/settinguser" element={<Settinguser />} />
        <Route path="/additem" element={<Additem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
