import { Destaques } from "../components/Destaques/Destaques"; 
import { Carrossel } from "../components/Carrossel/Carrossel";
import { Offers } from "../components/Offers/Offers";

export const Inicio = () => {
  return (
    <>
      <Carrossel />
      <Destaques/>
      <Offers />
    </>
  );
  
}