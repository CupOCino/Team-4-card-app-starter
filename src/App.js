import { BrowserRouter, Routes, Route } from "react-router-dom"; // Removed Navigate if unused
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AssignmentList from "./pages/AssignmentList";
import AddCard from "./pages/AddAssignment";
import EditCard from "./pages/EditCard";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allassignments" element={<AssignmentList />} />
        {/* TODO: Complete the routes */}
        <Route path="/AddCard" element={<AddCard />}/>
        <Route path="/EditCard/:id" element={<EditCard />} />
      </Routes>
    </BrowserRouter>
  );
}
