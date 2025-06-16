import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Carrossel.css';

export const Carrossel = () => {
    const slides = [
        {
            enfeite: '../../../public/Balls.svg',
            imagem: '../../../public/Tenis.png',
            pretitulo: 'Melhores ofertas personalizadas',
            titulo: 'Queima de estoque Nike',
            icone: '../../../public/Fogo.png',
            descricao: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
            botaoTexto: 'Ver Ofertas',
            botaoLink: '#slide1',
        },
        {
            enfeite: '../../../public/Balls.svg',
            imagem: '../../../public/Tenis.png',
            pretitulo: 'Melhores ofertas personalizadas',
            titulo: 'Queima de estoque Nike',
            icone: '../../../public/Fogo.png',
            descricao: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
            botaoTexto: 'Saiba mais',
            botaoLink: '#slide1',
        },
        {
            enfeite: '../../../public/Balls.svg',
            imagem: '../../../public/Tenis.png',
            pretitulo: 'Melhores ofertas personalizadas',
             titulo: 'Queima de estoque Nike',
            icone: '../../../public/Fogo.png',
            descricao: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
            botaoTexto: 'Saiba mais',
            botaoLink: '#slide1',
        },
        {
            enfeite: '../../../public/Balls.svg',
            imagem: '../../../public/Tenis.png',
            pretitulo: 'Melhores ofertas personalizadas',
            titulo: 'Queima de estoque Nike',
            icone: '../../../public/Fogo.png',
            descricao: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
            botaoTexto: 'Saiba mais',
            botaoLink: '#slide1',
        }
    ];

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 8000 }}
            loop={true}
        >
            {slides.map((slide, index) => (
                <SwiperSlide
                    key={index}
                    style={{ backgroundImage: `url(${slide.imagem})` }}
                >
                    <div className="slide-content">
                        <h3>{slide.pretitulo}</h3>
                        <div className='fire'>
                            <img src={slide.icone} />
                        </div>
                        <h1>{slide.titulo}</h1>
                        <p>{slide.descricao}</p>
                        <a href={slide.botaoLink}>
                            <button>{slide.botaoTexto}</button>
                        </a>
                    </div>
                    <img src={slide.enfeite} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
