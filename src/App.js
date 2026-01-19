import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CardList from "./pages/CardList";
import AddCard from "./pages/AddCard";
import EditCard from "./pages/EditCard";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<CardList />} />
        {/* TODO: Complete the routes */}
        <Route path="/AddCard" element={<AddCard />}/>
        <Route path="/EditCard/:id" element={<EditCard />} />
      </Routes>
    </BrowserRouter>
  );
}
