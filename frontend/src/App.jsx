import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import About from './Pages/About'
import SingIn from './Pages/SingIn'
import SingUp from './Pages/SingUp'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SingIn/>} />
          <Route path="/sign-up" element={<SingUp/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
