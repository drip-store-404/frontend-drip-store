
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
        <h2>Categorias em Destaque</h2>
        <div className="features-container">
          <div className="feature-item">
            <img src="/tshirt-_1_.svg" alt="Camisetas" className="feature-icon" />
            <p className="feature-label">Camisetas</p>
          </div>

          <div className="feature-item">
            <img src="/pants.svg" alt="Calças" className="feature-icon" />
            <p className="feature-label">Calças</p>
          </div>

          <div className="feature-item">
            <img src="/pants.svg" alt="Bonés" className="feature-icon" />
            <p className="feature-label">Bonés</p>
          </div>

          <div className="feature-item">
            <img src="/headphones_1.svg" alt="Headphones" className="feature-icon" />
            <p className="feature-label">Headphones</p>
          </div>

          <div className="feature-item">
            <img src="/sneakers.svg" alt="Tênis" className="feature-icon" />
            <p className="feature-label">Tênis</p>
          </div>
        </div>
      </div>
    </section>
  );
};
