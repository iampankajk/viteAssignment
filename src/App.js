import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import Header from "./components/Header/Header";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";


function App() {

  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<RegistrationForm/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<RegistrationForm/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
