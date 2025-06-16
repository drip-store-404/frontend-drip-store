import { Card } from './Card.jsx';
import './Destaques.css'

export const Destaques = ({children}) => {
  return (
    <Card>
      <div class='cards-wraper'>
        <div className='card-box'>
          <p>Novo drop Supreme</p>
          <span class='discount'>30% OFF</span>
          <button>Comprar</button>
          <img
          src='../../../public/star-wars-shirt.svg'> 
          </img>
        </div>

        <div className='card-box'>
          <p>Coleção Adidas</p>
          <span class='discount'>30% OFF</span>
          <button>Comprar</button>
          <img 
          src='../../../public/tenis.svg'> 
          </img>
        </div>

        <div className='card-box'>
          <p>Novo Beats Bass</p>
          <span class='discount'>30% OFF</span>
          <button>Comprar</button>
          <img 
          src='../../../public/fone.svg'> 
          </img>
        </div>
      </div>
    </Card>
  )
};