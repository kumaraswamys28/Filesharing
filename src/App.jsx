import { Route, Routes } from "react-router-dom"
import Hero from "./componets/Hero"
import ThemeShowcase from "./componets/ThemeShowcase"
import Login from "./componets/login"

function App() {
   const currentYear = new Date().getFullYear();


  return (
    <>
    <Hero/>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/t" element={<ThemeShowcase />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>

     <footer className="bg-secondary text-primary p-4 w-full sticky bottom-0 text-center border-t border-primary">
      <p>&copy; {currentYear} Your Company. All rights reserved.</p>
    </footer></>
  )
}

export default App
