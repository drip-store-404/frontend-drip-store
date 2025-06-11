import { Logo } from '../Logo/Logo';
import { Nav } from '../Nav/Nav';
import { Useful } from '../Useful/Useful';
import './Footer.css';

export const Footer = () => {
  return (
    <footer id='footer'>
      <div className="box-footer">
        <Logo id='login'
          width={"15.813rem"}
          color={'#ffffff'} />

        <p id='lorem'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </p>

        <div
          id='imagens-footer'>
          <img className='facebook' src="../../../public/Facebook.svg" />
          <img className='instagram' src="../../../public/Instagram.svg" />
          <img className='twitter' src="../../../public/Twitter.svg" />
        </div>

        <p id='info-footer'> Informação</p>

        <div className='info-footer-children'>
          <ul>
            <li>Sobre Drip Store</li>
            <br />
            <li>Segurança</li>
            <br />
            <li>Wishlist</li>
            <br />
            <li>Blog</li>
            <br />
            <li>Trabalhe conosco</li>
            <br />
            <li>Meus pedidos</li>
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

        <p id='contato-footer'>
          Contato
        </p>

        <p
          className='local-contato-footer'>
          Av. Santos Dumont, 1510 - 1<br />
          andar - Aldeota, Fortaleza -<br />
          CE, 60150-161
        </p>
        <p className='numero-contato-footer'>
          (85) 3051-3411
        </p>

        <hr id='hr-footer'></hr>

        <p id='copywriting'>
          © 2022 Digital College
        </p>

      </div>
    </footer>
  );
}