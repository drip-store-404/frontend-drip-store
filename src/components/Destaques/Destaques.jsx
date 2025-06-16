import './Destaques.css'
import { Produtos } from '../Produtos/Produtos';
import { Link } from 'react-router-dom';

export const Destaques = () => {

  const produtos = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    categoria: "Tênis",
    nome: `K-Swiss V8 - Masculino`,
    precoOriginal: 200,
    precoComDesconto: 100,
  }));


  return (
    <section id="destaque">
      <div className='box-destaque'>


        <div className='ps'>
          <p id='box-alta'>Produtos em alta</p>

          <Link to='/produtos' className='ver-todos'>
            Ver todos
            <img id='seta' src="../../../public/seta.svg" />
          </Link>

        </div>

        <div className="container-produtos">
          {produtos.map(produto => (
            <Produtos
              key={produto.id}
              categoria={produto.categoria}
              nome={produto.nome}
              precoOriginal={produto.precoOriginal}
              precoComDesconto={produto.precoComDesconto}
              temDesconto={produto.temDesconto}
            />
          ))}
        </div>

      </div>
    </section>
  );

}

