import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./components/topbar/topbar";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Setting from "./pages/settings/setting";
import Single from "./pages/single/single";
import Write from "./pages/write/write";
import { useContext } from "react";
import { Context } from "./context/context";

function App(){
  const {user}=useContext(Context)
  return(<div basename='blog-app'>
    <BrowserRouter>
    <Topbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='login' element={user?<Home/>:<Login/>}></Route>
      <Route path='register' element={user?<Home/>:<Register/>}></Route>
      <Route path='write' element={user?<Write/>:<Login/>}></Route>
      <Route path='setting' element={user?<Setting/>:<Login/>}></Route>
      <Route path='post/:postid' element={<Single/>}></Route>
      
    </Routes>
    
    </BrowserRouter>

  </div>)
}


export default App;
