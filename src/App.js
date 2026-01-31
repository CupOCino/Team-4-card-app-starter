import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AssignmentList from "./pages/AssignmentList";
import AddAssignment from "./pages/AddAssignment";
import EditCard from "./pages/EditCard";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/allassignments" element={<AssignmentList />} />
        <Route path="/addassignment" element={<AddAssignment />}/>
        <Route path="/assignments/:id/edit" element={<EditCard />} />
      </Routes>
    </BrowserRouter>
  );
}
