import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Compoents/Navbar'
import Dashbords from './Compoents/Dashbord'
import 'bootstrap/dist/css/bootstrap.min.css'
import Adduser from './Compoents/Adduser'
import Edituser from './Compoents/Edituser'
import Viewuser from './Compoents/Viewuser'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashbords />} />
          <Route path="/adduser" element={<Adduser />} />
          <Route path="/Edituser/:id" element={<Edituser />} />
          <Route path="/viewuser/:id" element={<Viewuser />} />
          <Route path="*" element={<Viewuser />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
