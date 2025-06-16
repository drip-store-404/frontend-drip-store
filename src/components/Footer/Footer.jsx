import { Logo } from '../Logo/Logo';
import { Nav } from '../Nav/Nav';
import { Useful } from '../Useful/Useful';
import './Footer.css';

export const Footer = () => {
  const prevent = (e) => e.preventDefault();
  return (
    <footer id='footer'>
      <div className="box-footer">
        <Logo id='login'
          width={"15.813rem"}
          color={'#ffffff'} />

        <a id='lorem' href="#" onClick={prevent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </a>

        <div id='imagens-footer'>
          <a href="#" onClick={prevent}><img className='facebook' src="../../../public/Facebook.svg" /></a>
          <a href="#" onClick={prevent}><img className='instagram' src="../../../public/Instagram.svg" /></a>
          <a href="#" onClick={prevent}><img className='twitter' src="../../../public/Twitter.svg" /></a>
        </div>

        <p id='info-footer'> Informação</p>

        <div className='info-footer-children'>
          <ul>
            <li><a href="#" onClick={prevent}>Sobre Drip Store</a></li>
            <br />
            <li><a href="#" onClick={prevent}>Segurança</a></li>
            <br />
            <li><a href="#" onClick={prevent}>Wishlist</a></li>
            <br />
            <li><a href="#" onClick={prevent}>Blog</a></li>
            <br />
            <li><a href="#" onClick={prevent}>Trabalhe conosco</a></li>
            <br />
            <li><a href="#" onClick={prevent}>Meus pedidos</a></li>
          </ul>
        </div>

        <p id='categorias-footer'>Categorias</p>

        <Nav
          className={'nav-footer'}
          position={'absolute'}
          flexDirection={'column'}
          gap={'1.3rem'}
          margin={'3.5rem 47.3rem  '}
        >
          <li>
            <Useful
              value={'Camisetas'}
              color={'#ffffff'}
              to={'produtos'}
            />
          </li>
          <li>
            <Useful
              value={'Calças'}
              color={'#ffffff'}
              to={'produtos'}
            />
          </li>
          <li>
            <Useful
              value={'Bonés'}
              color={'#ffffff'}
              to={'produtos'}
            />
          </li>
          <li>
            <Useful
              value={'Headphones'}
              color={'#ffffff'}
              to={'produtos'}
            />
          </li>
          <li>
            <Useful
              value={'Tênis'}
              color={'#ffffff'}
              to={'produtos'}
            />
          </li>
        </Nav>

        <p id='contato-footer'>Contato</p>

        <a className='local-contato-footer' href="#" onClick={prevent}>
          Av. Santos Dumont, 1510 - 1<br />
          andar - Aldeota, Fortaleza -<br />
          CE, 60150-161
        </a>
        <a className='numero-contato-footer' href="#" onClick={prevent}>
          (85) 3051-3411
        </a>

        <hr id='hr-footer'></hr>

        <p id='copywriting'>
          © 2022 Digital College
        </p>

      </div>
    </footer>
  );
}
