import './TenisProdutos.css'

export const Tenis = ({ categoria, nome, precoOriginal, precoComDesconto, temDesconto }) => {
  return (
    <>

      <select>
        <option value=""></option>
      </select>


      <div className='detalhes-produtos'>

        <p className='categoria-produtos'>{categoria}</p>

        <p className='nome-produto'>{nome}</p>

        <p className='preco-produto'>
          {temDesconto ? (
            <>
              <s className='preco-original-produto'>${precoOriginal}</s>{' '}
              <strong className='preco-atual-produto'>${precoComDesconto}</strong>
            </>
            // pra n ter q criar uma div
          ) : (
            <strong className='preco-sem-desconto'>${precoOriginal}</strong>
          )}

        </p>
        {/*   {' '} p/ fazer um espaço em branco  */}
        {/* se temDesconto for verdadeiro, vai me dar o preço com deconto e o preço antigo riscado, se for falso fica só o preçoOriginal sem o desconto */}
      </div>
      </>


  );

}