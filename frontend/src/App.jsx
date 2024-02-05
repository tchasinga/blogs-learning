import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import About from './Pages/About'
import SingIn from './Pages/SingIn'
import SingUp from './Pages/SingUp'
import Projects from './Pages/Projects'
import Header from './Components/Header'
import FooterCom from './Components/Footer'
import PrivateRoom from './Components/PrivateRoom'
import PrivateRoomAdmins from './Components/PrivateRoomAdmins'
import CreatePost from './Pages/CreatePost'

function App() {

  return (
    <div>
      <BrowserRouter>
         <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SingIn/>} />
          <Route path="/sign-up" element={<SingUp/>} />
          <Route path="/projects" element={<Projects/>} />

          <Route element={<PrivateRoom />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/signout" element={<SingIn />} />
        </Route>

        <Route  element={<PrivateRoomAdmins />} >
            <Route path="/create-post" element={<CreatePost />} />
        </Route>
        </Routes>
        <FooterCom />
      </BrowserRouter>
    </div>
  )
}

export default App
