import './Comprar.css'
import { Produtos } from './Product';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';

export const Compras = () => {

    const produtos = Array.from({ length: 4 }).map((_, i) => ({
        id: i,
        categoria: "Tênis",
        nome: `K-Swiss V8 - Masculino`,
        precoOriginal: 200,
        precoComDesconto: 100,
        temDesconto: i < 2,
    }));

    const imagens = [
        { src: "/Tenis.png", corFundo: "#E2E3FF" },
        { src: "/Tenis.png", corFundo: "#FFE8BC" },
        { src: "/Tenis.png", corFundo: "#FFC0BC" },
        { src: "/Tenis.png", corFundo: "#DEC699" },
    ];

    const [fundoAtual, setFundoAtual] = useState(imagens[0].corFundo);

    const handleSlideChange = (swiper) => {
        const index = swiper.activeIndex;
        setFundoAtual(imagens[index].corFundo);
    };
    return (
        <section id="all">
            <div className='ptotal'>
                <p className='phome'>Home </p>
                <p className='pcaminho'>/ Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino</p>
            </div>
            <div className='card-produto'>
                <div
                    className="carrossel"
                    style={{ backgroundColor: fundoAtual, transition: 'background-color 0.5s ease' }}
                >
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        spaceBetween={50}
                        slidesPerView={1}
                        initialSlide={0}
                        onSlideChange={handleSlideChange}
                    >
                        {imagens.map((imagem, index) => (
                            <SwiperSlide key={index}>
                                    <img src={imagem.src} alt={`Imagem ${index}`} className="imagem-principal" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>


                <div className="info-produto">
                    <h2 className="nome">Tênis Nike Revolution 6 Next Nature Masculino</h2>
                    <p className="categoria">Casual | Nike | REF:38416711</p>

                    <div className="avaliacao">
                        ⭐⭐⭐⭐⭐ (90 avaliações)
                    </div>

                    <div className="preco">
                        <span>R$225,00</span>
                    </div>

                    <p className="descricao">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <div className="tamanhos">
                        <strong>Tamanhos:</strong> 39 | 40 | 41 | 42 | 43
                    </div>

                    <div className="cores">
                        <strong>Cores:</strong>
                        <div className="cores-opcoes">
                            <span className="cor cor-azul"></span>
                            <span className="cor cor-cinza"></span>
                            <span className="cor cor-preto"></span>
                            <span className="cor cor-roxo"></span>
                        </div>

                        <button className="botao-comprar">Comprar</button>
                    </div>
                </div>
            </div>

            <div className='box-relacionados'>
                <div className='produtosrel'>
                    <p id='box-rel'>Produtos relacionados</p>
                    <Link to='/produtos' className='ver-todos'>
                        Ver todos
                        <img id='seta' src="../../../public/seta.svg" />
                    </Link>
                </div>

                <div className='cards'>
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
        </section >
    );

}