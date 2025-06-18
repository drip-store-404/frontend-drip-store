
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {Header} from '../components/Header/Header.jsx'
import {Inicio} from '../pages/Inicio'
import { Produtos } from '../pages/Produtos';
import { Pedidos } from '../pages/Pedidos';
import { Ofertas } from '../pages/Ofertas';
import { NaoEncontrado } from '../pages/NaoEncontrado';
import {Footer} from '../components/Footer/Footer.jsx'
import { Conta } from '../components/Conta/conta.jsx';

export const Router = () =>{
  return (
    <>
    <BrowserRouter>
    <Header/>
     <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='produtos' element={<Produtos/>}/>
      <Route path='pedidos' element={<Pedidos/>}/>
      <Route path='ofertas' element={<Ofertas/>}/>
      <Route path='*' element={<NaoEncontrado/>}/>
      <Route path='cadastro' element={<Conta/>}/>
     </Routes>
     <Footer/>
    
    </BrowserRouter>
    </>
  );
}