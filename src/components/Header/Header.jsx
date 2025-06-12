import './Header.css'
import { Logo } from '../Logo/Logo'
import { Button } from '../Button/Button';
import { ShopCart } from '../ShopCart/ShopCart';
import { Input } from '../Input/Input';
import { Useful } from '../Useful/Useful';
import { Nav } from '../Nav/Nav';
import { useState } from 'react';


export const Header = () => {
  const [isActiveItem, setActiveItem] = useState("");
  return (
    <header id="header">
      <div className='box-header'>
        <div className='box-header-children'>
          <Logo margin={'.5rem 0 0 0.25rem'} />
          <Input
            type={'text'}
            placeholder={'Pesquisar produto...'}
            margin={'0 3rem 0 1.688rem'}
            width={'34.938rem'}
            height={'3.75rem'}
            src={'../../../public/search.svg'}
          />
          <Useful
            value={'Cadastre-se'}
            margin={'1.2rem 0 0 0'}
            color={'#474747'}
            href={'#'}
            textDecoration={'underline'}
          />
          <Nav
            position={'absolute'}
            top={'8.375rem'}
            gap={'2rem'}
            width={'26.438rem'}
            height={'1.813rem'}
          >
            <li>
              <Useful
                paddingBottom={null}
                borderBottom={null}
                fontWeight={null}
                borderRadius={null}
                borderEndEndRadius={null}
                borderEndStartRadius={null}
                value={'Início'}
                color={'#474747'}
                to={'/'}
                isActive={isActiveItem === 'Início'}
                onClick={() => setActiveItem('Início')}
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
        </div>
        <Button
          width={'7.125rem'}
          height={'2.5rem'}
          margin={'2.75rem 0 0 1.875rem'}
        >Entrar</Button>
        <ShopCart value={2} />
      </div>
    </header>
  );
}