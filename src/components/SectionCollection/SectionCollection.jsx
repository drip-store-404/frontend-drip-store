
import { CardCollection } from '../CardCollection/CardCollection';
import { FeatureCollection } from '../FeatureCollection/FeatureCollection';
import './SectionCollection.css';

export const SectionCollection = () => {
  return (
    <section className="section-collection">
      <div className="cards-collection">
        <h2>Coleções em Destaque</h2>
        <div className="cards">

          <CardCollection />
          <span className="discount">30% OFF</span>
          <p className="camisa">Novo Drop Supreme</p>
          <button className="botão">Comprar</button>
          <img src="/star-wars-storm-shirts.svg" alt="Camiseta Star Wars" />

          <CardCollection />
          <span className="discount">30% OFF</span>
          <p className="tenis">Coleções Adidas</p>
          <button className="botão">Comprar</button>
          <img src="/tenis.svg" alt="Tênis Adidas" />

          <CardCollection />
          <span className="discount">30% OFF</span>
          <p className="tenis">Novo Beats Bass</p>
          <button className="botão">Comprar</button>
          <img src="/fone.svg" alt="Fone Beats" />

        </div>
      </div>

      <div className="collections">
        <h2>Coleções em Destaque</h2>
        <div>
          <FeatureCollection />
          <FeatureCollection />
          <FeatureCollection />
          <FeatureCollection />
          <FeatureCollection />
        </div>
      </div>
    </section>
  );
};
