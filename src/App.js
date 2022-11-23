import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./estilos.css"
import NavBar from "./components/NavBar"
import Home from "./views/Home";
import Contacto from "./views/Contacto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/Contacto" element={ <Contacto /> } />
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
