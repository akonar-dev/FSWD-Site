<<<<<<< HEAD
function App() {

  return (
    <>
    <h1>Bengal Coding Academy</h1>
    </>
=======
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from "./components/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home/>} />
        {/* Add more routes here as needed */}
      </Routes>
    </BrowserRouter>
>>>>>>> e5808d8 (login-page)
  )
}

export default App
