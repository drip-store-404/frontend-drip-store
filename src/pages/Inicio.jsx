import { Destaques } from "../components/Destaques/Destaques"; 
import { Carrossel } from "../components/Carrossel/Carrossel";
import { Offers } from "../components/Offers/Offers";
import { SectionCollection } from "../components/SectionCollection/SectionCollection";

export const Inicio = () => {
  return (
    <>
      <Carrossel />
      <SectionCollection/>
      <Destaques/>
      <Offers />
    </>
  );
  
}