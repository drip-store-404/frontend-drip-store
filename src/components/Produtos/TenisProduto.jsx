import './Produtos.css'
import { Produtos } from './Product';

export const Tenis = ({ categoria, nome, precoOriginal, precoComDesconto, temDesconto }) => {

  const produtos = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    categoria: "Tênis",
    nome: `K-Swiss V8 - Masculino`,
    precoOriginal: 200,
    precoComDesconto: 100,
    temDesconto: i < 2,
  }));

  return (
    <>
    <div className='divpaizao'>
    <div className='titulo-quantidade'>
      <p className='resultado'>Resultados para "Tênis" - </p>
      <p className='produtos'>389 produtos</p>
    </div>

    <div className='box-paizao'>
     <p>Filtrar por</p>
     <hr/>

      <p>Marca</p>
     <div className='box-marca'>
      <label><input type='checkbox'/>Adiddas</label>
      <label><input type='checkbox'/>Calenciaga</label>
      <label><input type='checkbox'/>K-Swiss</label>
      <label><input type='checkbox'/>Nike</label>
      <label><input type='checkbox'/>Puma</label>
     </div>

     <p>Categoria</p>
      <div className='box-categoria'>
      <label><input type='checkbox'/>Esporte e lazer</label>
      <label><input type='checkbox'/>Casual</label>
      <label><input type='checkbox'/>Utilitário</label>
      <label><input type='checkbox'/>Corrida</label>
     </div>

     <p>Gênero</p>
      <div className='box-genero'>
      <label><input type='checkbox'/>Masculino</label>
      <label><input type='checkbox'/>Feminino</label>
      <label><input type='checkbox'/>Unissex</label>
     </div>

    <p>Estado</p>
    <div className='box-estado'>
      <label><input type='radio'/>Novo</label>
      <label><input type='radio'/>Usado</label>
    </div>
    </div>
      <select>
        <option value=""></option>
      </select>


      <div className='detalhes-produtos'>

        <p className='categoria-produtos'>{categoria}</p>

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
      </>


  );

}