import { Destaques } from "../components/Destaques/destaques";
import { Carrossel } from "../components/Carrossel/Carrossel";
import { Offers } from "../components/Offers/Offers";

export const Inicio = () => {
  return (
    <>
      <Carrossel />
      <Offers />
      <Destaques/>
    </>
  );
  
}