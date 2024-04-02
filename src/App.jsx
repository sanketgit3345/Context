import Login from "./Components/Login"
import Profile from "./Components/Profile"
import UserContextProvider from "./context/UserContextProvider"
import './App.css'

function App() {
  

  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
