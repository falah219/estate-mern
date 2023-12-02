import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Profile, SignIn, SignOut, About } from './pages'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignOut" element={<SignOut />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
