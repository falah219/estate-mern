import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Profile, SignIn, SignOut, SignUp, About } from './pages'
import { Header } from "./components";



export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
