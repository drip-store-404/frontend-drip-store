import './Header.css'
import { Logo } from '../Logo/Logo'
import { Button } from '../Button/Button';
import { ShopCart } from '../ShopCart/ShopCart';
import { Input } from '../Input/Input';
import { Useful } from '../Useful/Useful';
import { Nav } from '../Nav/Nav';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [isActiveItem, setActiveItem] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Detectar se é mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  
  return (
    <header id="header">
      <div className='box-header'>
        <div className='box-header-children'>
          <Logo margin={isMobile ? '0' : '.5rem 0 0 0.25rem'} />
          
          <Input
            type={'text'}
            placeholder={isMobile ? 'Buscar...' : 'Pesquisar produto...'}
            margin={isMobile ? '0' : '0 3rem 0 1.688rem'}
            width={isMobile ? '100%' : '34.938rem'}
            height={isMobile ? '3rem' : '3.75rem'}
            src={'../../../public/search.svg'}
          />
          
          {!isMobile && (
            <Useful
              value={'Cadastre-se'}
              margin={'1.2rem 0 0 0'}
              color={'#474747'}
              href={'#'}
              to={'/cadastro'}
              textDecoration={'underline'}
            />
          )}
          
          <Nav
            position={isMobile ? 'static' : 'absolute'}
            top={isMobile ? 'auto' : '8.375rem'}
            gap={isMobile ? '1rem' : '2rem'}
            width={isMobile ? '100%' : '26.438rem'}
            height={isMobile ? 'auto' : '1.813rem'}
          >
            <li>
              <Useful
                paddingBottom={null}
                borderBottom={null}
                borderEndEndRadius={null}
                borderEndStartRadius={null}
                value={'Início'}
                color={'#474747'}
                to={'/'}
                isActive={location.pathname === '/'}
                onClick={() => setActiveItem('Início')}
                fontWeight={'normal'}
              />
            </li>
            <li>
              <Useful
                value={'Produtos'}
                color={'#474747'}
                to={'/produtos'}
                isActive={isActiveItem === 'Produtos'}
                onClick={() => setActiveItem('Produtos')}
                fontWeight={'normal'}
              />
            </li>
            <li>
              <Useful
                value={'Meus pedidos'}
                color={'#474747'}
                to={'/pedidos'}
                isActive={isActiveItem === 'Meus pedidos'}
                onClick={() => setActiveItem('Meus pedidos')}
                fontWeight={'normal'}
              />
            </li>
            <li>
              <Useful
                value={'Ofertas'}
                color={'#474747'}
                to={'/ofertas'}
                isActive={isActiveItem === 'Ofertas'}
                onClick={() => setActiveItem('Ofertas')}
                fontWeight={'normal'}
              />
            </li>
          </Nav>
          
          {isMobile && (
            <Useful
              value={'Cadastre-se'}
              margin={'0'}
              color={'#474747'}
              href={'#'}
              to={'/cadastro'}
              textDecoration={'underline'}
            />
          )}
        </div>
        
        <Button
          width={isMobile ? '5rem' : '7.125rem'}
          height={isMobile ? '2rem' : '2.5rem'}
          margin={isMobile ? '0' : '2.75rem 0 0 1.875rem'}
        >
          {isMobile ? 'Entrar' : 'Entrar'}
        </Button>
        
        <ShopCart value={2} />
      </div>
    </header>
  )
}