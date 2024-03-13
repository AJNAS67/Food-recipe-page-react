import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Favorites from "./pages/favorate";
import Details from "./pages/details";

function App() {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/recipe-item/:id" element={<Details />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
