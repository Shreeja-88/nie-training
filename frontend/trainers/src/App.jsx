import './App.css';
import { Route, Routes, Link } from 'react-router-dom';   
import { Login } from './components/Login'; 
import { SearchTrainer } from './components/SearchTrainer'; 
import { AddTrainer } from './components/AddTrainer'; 
import { TrainersList } from "./components/TrainersList";
import { UpdateTrainer } from "./components/UpdateTrainer"; 

function App() {
  return (
    <>
      <div className="p-3 fw-bold d-flex align-items-center justify-content-center rounded"
     style={{ backgroundColor: "#C9F4C4", color: "#1b4a2bff" }}>
        <ul className="nav" style={{ backgroundColor: "#C9F4C4" }}>
          <li className="nav-item">
            <Link className="nav-link" to="/search" style={{ color: "#1E5631", fontWeight: "600" }}>
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add" style={{ color: "#1E5631", fontWeight: "600" }}>
              Add Trainer
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/list" style={{ color: "#1E5631", fontWeight: "600" }}>
              Trainer List
            </Link>
          </li>
        </ul>

      </div>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/search" element={<SearchTrainer />} />
        <Route path="/add" element={<AddTrainer />} />
        <Route path="/list" element={<TrainersList />} />
        <Route path="/update" element={<UpdateTrainer />} />
      </Routes>
    </>
  );
}

export default App;

