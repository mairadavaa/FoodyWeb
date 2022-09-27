
import './App.css';

import Navbar from './Components/Header/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import {Menu }from "./nav/menu";
import {Order} from "./nav/order";
import Dashboard from "./nav/dashboard";
import { CustomTheme } from "./Context/theme";
import { CssBaseline } from '@mui/material/';

function App() {
  return (
    <CustomTheme>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/order" element={<Order />} >
          </Route>
          <Route path="/dashboard" element={<Dashboard />} >
          </Route>
          <Route path="/menu" element={<Menu />} >
          </Route>
        </Routes>
      </Router>
    </CustomTheme>
  );
}

export default App;
