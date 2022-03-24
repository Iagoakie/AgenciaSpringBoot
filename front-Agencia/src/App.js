import { BrowserRouter, Routes, Route } from "react-router-dom";


import Destino from"./views/DestinoUser/Index";
import DestinoCreate from "./views/DestinoUser/Create.jsx";

import NovoUser from"./views/NovoUser/Index";
import NovoUserCreate from "./views/NovoUser/Create";

import Home from "./pages/Home";
import Promo from "./pages/Promo";
import Destinos from "./pages/Destinos";
import Contato from "./pages/Contato";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Cadastro from "./pages/Cadastro"
import Paris from "./pages/Paris"
import Australia from "./pages/Australia";
import BoraBora from "./pages/BoraBora";
import Gramado from "./pages/Gramado";
import Jericoacoara from "./pages/Jericoacoara";
import Porto from "./pages/Porto";
import Tulum from "./pages/Tulum";
import NovaZelandia from "./pages/NovaZelandia";



function App() {
  return (
    
    <BrowserRouter>
      
      <Menu />
     
      <Routes>
       
        <Route path="/" element={<Home/>} />

        <Route path="/DestinoUser" element={<Destino/>} />
        <Route path="/DestinoUser-Create" element={<DestinoCreate />} />
        <Route path="/DestinoUser-Update/:id" element={<DestinoCreate />} />


        <Route path="/NovoUser" element={<NovoUser/>} />
        <Route path="/NovoUser-Create" element={<NovoUserCreate />} />
        <Route path="/NovoUser-Update/:id" element={<NovoUserCreate />} />
       
        <Route path="/Promo" element={<Promo/>} />
        
        <Route path="/Destinos" element={<Destinos/>} />
       
        <Route path="/Contato" element={<Contato/>} />

        <Route path="/Cadastro" element={<Cadastro/>} />

        <Route path="/Paris" element={<Paris/>} />
        
        <Route path="/Australia" element={<Australia/>} />
        
        <Route path="/BoraBora" element={<BoraBora/>} />
        
        <Route path="/Gramado" element={<Gramado/>} />
        
        <Route path="/Jericoacoara" element={<Jericoacoara/>} />
        
        <Route path="/Tulum" element={<Tulum/>} />
        
        <Route path="/Porto" element={<Porto/>} />
        
        <Route path="/NovaZelandia" element={<NovaZelandia/>} />


      
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;