import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { TransactionsProvider } from "./contexts/TransactionsContext";
import NewEntry from "./pages/NewEntry";
import NewExit from "./pages/NewExit";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Wallet from "./pages/Wallet";

function App()  {
  return (
    <AuthProvider>
      <TransactionsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/register" element={<SignUp/>}/>
            <Route path="/wallet" element={<Wallet/>}/>
            <Route path="/new-entry" element={<NewEntry/>}/>
            <Route path="/new-exit" element={<NewExit/>}/>
          </Routes>
        </BrowserRouter>
      </TransactionsProvider>
    </AuthProvider>
  )
}

export default App;