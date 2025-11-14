import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Login } from './components/Login';
import { SearchTrainer } from './components/SearchTrainer';
import { AddTrainer } from './components/AddTrainer';
import { TrainersList } from "./components/TrainersList";
import { UpdateTrainer } from "./components/UpdateTrainer";
import { Home } from "./components/Home";
import { Sidebar } from "./components/Sidebar";

function App() {
  const location = useLocation();

  // Sidebar should be hidden only on login page
  const hideSidebar = location.pathname === "/";

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      {!hideSidebar && <Sidebar />}

      {/* Main Content */}
      <div style={{ marginLeft: hideSidebar ? "0" : "230px", width: "100%", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<SearchTrainer />} />
          <Route path="/add" element={<AddTrainer />} />
          <Route path="/list" element={<TrainersList />} />
          <Route path="/update/:id" element={<UpdateTrainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
