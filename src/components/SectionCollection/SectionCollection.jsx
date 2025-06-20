

import { CardCollection } from '../CardCollection/CardCollection';
import { FeatureCollection } from '../FeatureCollection/FeatureCollection';
import './SectionCollection.css';

export const SectionCollection = () => {
  return (
    <section className="section-collection">
      <div className="cards-collection">
        <h2>Coleções em Destaque</h2>
        <div className="cards-container">

          <div className="card-item">
            <div className="card-content">
              <span className="discount">30% OFF</span>
              <p className="card-title">Novo Drop</p>
              <p className="card-subtitle">Supreme</p>
              <button className="card-button">Comprar</button>
            </div>
            <img src="/star-wars-storm-shirts.svg" alt="Camiseta Star Wars" className="card-image" />
          </div>

          <div className="card-item">
            <div className="card-content">
              <span className="discount">30% OFF</span>
              <p className="card-title">Coleção</p>
              <p className="card-subtitle">Adidas</p>
              <button className="card-button">Comprar</button>
            </div>
            <img src="/tenis.svg" alt="Tênis Adidas" className="card-image" />
          </div>

          <div className="card-item">
            <div className="card-content">
              <span className="discount">30% OFF</span>
              <p className="card-title">Novo</p>
              <p className="card-subtitle">Beats Bass</p>
              <button className="card-button">Comprar</button>
            </div>
            <img src="/fone.svg" alt="Fone Beats" className="card-image" />
          </div>
        </div>
      </div>

      <div className="collections">
        <h2>Coleções em Destaque</h2>
        <div className="features-container">
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