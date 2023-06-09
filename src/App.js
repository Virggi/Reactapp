import { Route, Routes } from 'react-router-dom';

import "./css/App.css"

import Header from './componentes/Header';
import Footer from "./componentes/Footer";
import Home from "./secciones/Home";
import Formulario from "./secciones/Formulario";
import Sobrenosotras from './secciones/Sobrenosotras';
import Clima from './secciones/Clima';



function App() {
  return (
    <>
      <Header />
        <Routes>
            <Route 
              path="/" 
              element={<Home/>} >
            </Route>
            <Route 
              path="/contacto" 
              element={<Formulario/>} >
            </Route>
            <Route 
              path="/Sobrenosotras" 
              element={<Sobrenosotras />} >
            </Route>  
            <Route 
              path="/Clima" 
              element={<Clima />} >
            </Route>  
        </Routes>
      <Footer></Footer>  

    </>
  );
}

export default App;
