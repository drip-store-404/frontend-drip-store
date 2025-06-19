import './Conta.css'
import { Input } from '../Input/Input';

export const Conta = () => {
  return (
    <section className='cadastro'>
      <form className='form' action="#">
        <h1 id='criar-conta'>Criar Conta</h1>

        <div className='box-criar-conta'>
          <p className='titulo-p'>Informações Pessoais</p>
          <hr className='hr-cadastro' />
          
          <div className='box-input-nome'>
            <label htmlFor="nome">Nome Completo *</label>
            <Input
              type={'text'}
              placeholder={'Insira seu nome'}
              width={'100%'} // Responsivo
              height={'3.75rem'}
            />
          </div>

          <div className='box-input-nome'>
            <label htmlFor="cpf">CPF *</label>
            <Input
              type={'text'}
              placeholder={'Insira seu CPF'}
              width={'100%'} // Responsivo
              height={'3.75rem'}
            />
          </div>

          <div className='box-input-nome'>
            <label htmlFor="email">E-mail *</label>
            <Input
              type={'text'}
              placeholder={'Insira seu email'}
              width={'100%'} // Responsivo
              height={'3.75rem'}
            />
          </div>

          <div className='box-input-nome'>
            <label htmlFor="celular">Celular *</label>
            <Input
              type={'text'}
              placeholder={'Insira seu celular'}
              width={'100%'} // Responsivo
              height={'3.75rem'}
            />
          </div>
        </div>

        <div className='entrega'>
          <p className='titulo-p'>Informações de Entrega</p>
          <hr className='hr-cadastro' />

          <div className='box-input-nome'>
            <label htmlFor="endereco">Endereço *</label>
            <Input
              type={'text'}
              placeholder={'Insira seu endereço'}
              width={'100%'} // Responsivo
              height={'3.75rem'}
            />
          </div>

          <div className='box-input-nome'>
            <label htmlFor="bairro">Bairro *</label>
            <Input
              type={'text'}
              placeholder={'Insira seu bairro'}
              width={'100%'} // Responsivo
              height={'3.75rem'}
            />
          </div>

          <div className='box-input-nome'>
            <label htmlFor="cidade">Cidade *</label>
            <Input
              type={'text'}
              placeholder={'Insira sua cidade'}
              width={'100%'} // Responsivo
              height={'3.75rem'}
            />
          </div>

          <div className='box-input-nome'>
            <label htmlFor="cep">CEP *</label>
            <Input
              type={'text'}
              placeholder={'Insira seu CEP'}
              width={'100%'} // Responsivo
              height={'3.75rem'}
            />
          </div>

          <div className='box-input-nome'>
            <label htmlFor="complemento">Complemento</label>
            <Input
              type={'text'}
              placeholder={'Insira seu complemento'}
              width={'100%'} // Responsivo
              height={'3.75rem'}
            />
          </div>
        </div>
      </form>
    </section>
  );
}