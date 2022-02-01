import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Wallet from "./pages/Wallet";

function App()  {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/wallet" element={<Wallet/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;