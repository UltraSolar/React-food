import './App.css'
import Login from './Components/Login/login'
import Home from './Components/Home/Home'
import { Routes, Route } from 'react-router-dom'
import LoginRequired from './Components/Auth/Loginrequire'
import Cart from './Components/Cart/Cart'
function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={
        <LoginRequired>
          <Home />
        </LoginRequired>
      } />
      <Route path='/Cart' element={
        <LoginRequired>
          <Cart />
        </LoginRequired>}>
      </Route>
    </Routes>
  )
}

export default App
