import { Card } from './Card';
import './Destaques.css'

export const Destaques = ({ children }) => {
  return (
    <Card>
      <div className='camisa'>
        <p>Novo drop Supreme</p>
        <button>Enviar</button>
      </div>

      <div className='tênis'>
        <p>Coleção Adidas</p>
        <button>Enviar</button>
      </div>

      <div className='fone'>
        <p>Novo Beats Bass</p>
        <button>Enviar</button>
      </div>
    </Card>
  )
};