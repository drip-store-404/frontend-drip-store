import './Comprar.css'
import { Produtos } from './Product';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

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
        {

            imagem: '../../../public/Tenis.png'
        },
        {
            imagem: '../../../public/Tenis.png'
        },
        {
            imagem: '../../../public/Tenis.png'
        },
        {
            imagem: '../../../public/Tenis.png'
        }
    ];

    return (
        <section id="all">
            <div className='ptotal'>
                <p className='phome'>Home </p>
                <p className='pcaminho'>/ Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino</p>
            </div>
            <div className='card-produto'>
                <div className="imagem-produto">
                    <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 8000 }}
                    loop={true}
                >
                    {imagens.map((imagem, index) => (
                        <SwiperSlide
                            key={index}
                            style={{ backgroundImage: `url(${imagem.imagem})` }}>
                        </SwiperSlide>
                    ))}
                </Swiper>
                </div>

                <div className="info-produto">
                    <h2 className="nome">Tênis Nike Revolution 6 Next Nature Masculino</h2>
                    <p className="categoria">Casual | Nike | REF:38416711</p>

                    <div className="avaliacao">
                        ⭐⭐⭐⭐☆ (90 avaliações)
                    </div>

                    <div className="preco">
                        <span className="preco-normal">R$ 225,00</span>
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