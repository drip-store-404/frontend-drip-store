import './Produtos.css'
import { Produtos } from './Product';

export const Tenis = () => {

  const produtos = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    categoria: "Tênis",
    nome: `K-Swiss V8 - Masculino`,
    precoOriginal: 200,
    precoComDesconto: 100,
    temDesconto: i < 4,
  }));

  return (
    <section className='layout-produtos'>
      <div className='pagina-produtos'>

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
    </section>


  );

}