import { useState, useRef, useEffect } from 'react';
import './ShopCart.css'


export const ShopCart = () => {
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome: 'Tênis Nike Revolution 6 Next Nature Masculino',
      preco: 219,
      imagem: '../../../public/Tenis.png',
    },
    {
      id: 2,
      nome: 'Tênis Nike Revolution 6 Next Nature Masculino',
      preco: 219,
      imagem: '../../../public/Tenis.png',
    },
  ]);

  const [abrir, setAbrir] = useState(false);
  const dropdownRef = useRef(null);

  const calcularTotal = () => {
    return produtos.reduce((soma, produto) => soma + produto.preco, 0);
  };

  const esvaziar = () => {
    setProdutos([]);
  };

  useEffect(() => {
    function clicarFora(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAbrir(false);
      }
    }

 document.addEventListener('click', clicarFora);

  return () => {
    document.removeEventListener('click', clicarFora);
  };
}, []);


  return (
    <div className="box-Shop-cart" ref={dropdownRef} onClick={(e) => e.stopPropagation()}>
      <div className="cart-icon" onClick={() => setAbrir(!abrir)}>
        <img src="../../../public/shopCart.svg" />
        <span >{produtos.length}</span>
      </div>

      {abrir && (
        <div className="cart-dropdown">
          <h3>Meu Carrinho</h3>

          {produtos.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            <>
              { }
              <hr />
              {produtos.map((produto) => (
                <div key={produto.id} className="cart-item">
                  <div className='back'>
                    <img src={produto.imagem} />
                  </div>
                  <div>
                    <p>{produto.nome}</p>
                    <strong>R$ {produto.preco},00</strong>
                  </div>
                </div>
              ))}
              <hr />
              <div className="cart-total">
                <p>Valor total: <strong>R$ {calcularTotal()},00</strong></p>
              </div>

              <div className="cart-buttons">
                <button onClick={esvaziar} className="esvaziar-btn">Esvaziar</button>
                <button className="ver-carrinho-btn">Ver Carrinho</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}