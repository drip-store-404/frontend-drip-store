import './Conta.css'

export const Conta = () => {
  return (
    <section className='cadastro'>
      <form  className='form' action="#">
        <h1 id='criar-conta'>Criar Conta</h1>

        <div className='box-criar-conta'>

          <p id='info-conta'>Informações Pessoais</p>

          <hr id='hr-conta'></hr>

          <label htmlFor="nome">Nome Completo *</label>
          <input id='nome-input' placeholder='Insira seu nome' type="text" />

          <label htmlFor="cpf"> CPF *</label>
          <input id='cpf-input' placeholder='Insira seu CPF' type="text" />

          <label htmlFor="email"></label>
          <input id='email-input' placeholder='Insira seu e-mail' type="text" />

          <label htmlFor="celular"></label>
          <input id='celular-input' placeholder='Insira seu Celular' type="text" />

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