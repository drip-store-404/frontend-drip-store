import './Produtos.css'
import { Link } from 'react-router-dom';

export const Produtos = ({ categoria, nome, precoOriginal, precoComDesconto, temDesconto }) => {
  return (
    <Link to="/produtos" className='produto-link'>
      <div className='card'>

        <div className='box-card'>

          {temDesconto && <span className='span-desconto-card'>30% OFF</span>}

          <img className='box-produto' src="../../../public/sapato.svg" />

        </div>
        <p>

        </p>


        <div className='box-detalhes'>

          <p className='categoria-card'>{categoria}</p>

          <p className='nome-card'>{nome}</p>

          <p className='preco-card'>
            {temDesconto ? (
              <>
                <s className='preco-original-card'>${precoOriginal}</s>{' '} 
                <strong className='preco-atual-card'>${precoComDesconto}</strong>
              </> 
              // pra n ter q criar uma div
            ) : (
              <strong className='preco-sem-desconto'>${precoOriginal}</strong>
            )}
            
          </p> 
          {/*   {' '} p/ fazer um espaço em branco  */}
          {/* se temDesconto for verdadeiro, vai me dar o preço com deconto e o preço antigo riscado, se for falso fica só o preçoOriginal sem o desconto */}
        </div>

      </div >
    </Link>


  );

}
