import {  Route, Routes } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AccountInfo from "./components/AccountInfo"

function App() {
   return(
      <Routes>
         <Route path="/" element={<LoadingScreen />}/>
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/account" element={<AccountInfo />} />
      </Routes>
   )
}

export default App;