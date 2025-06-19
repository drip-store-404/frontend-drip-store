import './Conta.css'
import { Input } from '../Input/Input';

export const Conta = () => {
  return (
    <section className='cadastro'>
      <form className='form' action="#">
        <h1 id='criar-conta'>Criar Conta</h1>

        <div className='box-criar-conta'>



          {/* <p id='info-conta'>Informações Pessoais</p> */}
          <p className='titulo-p'>Informações Pessoais</p>
          <hr className='hr-cadastro' />
          <div className='box-input-nome'>
            <label htmlFor="nome">Nome Completo *</label>
            <Input
              type={'text'}
              placeholder={'Insira seu nome'}
              // margin={'0 3rem 0 1.688rem'}
              width={'34.938rem'}
              height={'3.75rem'}
            />
          </div>

          <div className='box-input-nome'>
            <label htmlFor="nome">CPF *</label>
            <Input
              type={'text'}
              placeholder={'Insira seu CPF'}
              // margin={'0 3rem 0 1.688rem'}
              width={'34.938rem'}
              height={'3.75rem'}
            />
          </div>


          <div className='box-input-nome'>
            <label htmlFor="nome"> E-mail*</label>
            <Input
              type={'text'}
              placeholder={'Insira seu email'}
              // margin={'0 3rem 0 1.688rem'}
              width={'34.938rem'}
              height={'3.75rem'}
            />
          </div>

          <div className='box-input-nome'>
            <label htmlFor="nome">Celular *</label>
            <Input
              type={'text'}
              placeholder={'Insira seu celular'}
              // margin={'0 3rem 0 1.688rem'}
              width={'34.938rem'}
              height={'3.75rem'}
            />
          </div>




          {/* 
          <div className='name-pai'>
            <label htmlFor="nome">Nome Completo *</label>
            <input id='nome-input' placeholder='Insira seu nome' type="text" />

          </div>

          <div className='cpf-pai'>
            <label htmlFor="cpf"> CPF *</label>
            <input id='cpf-input' placeholder='Insira seu CPF' type="text" />

          </div>

          <div className='email-pai'>
            <label htmlFor="email"></label>
            <input id='email-input' placeholder='Insira seu e-mail' type="text" />

          </div>

          <div className='celular-pai'>
            <label htmlFor="celular"></label>
            <input id='celular-input' placeholder='Insira seu Celular' type="text" /><br />

          </div> */}

        </div> {/* box-criar-conta */}



        <div className='entrega'>

          <p id='info-entrega'>Informações de Entrega</p>

          <label htmlFor="endereco"></label>
          <input id='endereco-input' placeholder='Insira seu endereço' type="text" />

          <label htmlFor="bairro"></label>
          <input id='bairro-input' placeholder='Insira seu bairro' type="text" />

          <label htmlFor="cidade"></label>
          <input id='cidade-input' placeholder='Insira sua cidade' type="text" />

          <label htmlFor="cep"></label>
          <input id='cep-input' placeholder='Insira seu CEP' type="text" />

          <label htmlFor="complemento"></label>
          <input id='complemento-input' placeholder='Insira seu complemento' type="text" />

        </div> {/* entrega */}



      </form>

      {/* aqui vai ter um botão */}

      {/* aqui vai ter um botão maior */}

    </section>
  );
}