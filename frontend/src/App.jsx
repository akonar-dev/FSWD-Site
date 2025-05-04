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
  )
}

export default App
