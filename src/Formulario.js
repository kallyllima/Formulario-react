import React, { useState } from 'react';
import './styles.css'; // Importa o arquivo CSS

const Formulario = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    descricao: '',
    prioridade: '',
    possuiChamados: false,
    experiencias: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar se todos os campos obrigatórios estão preenchidos
    if (
      formValues.nome &&
      formValues.sobrenome &&
      formValues.email &&
      formValues.descricao &&
      formValues.prioridade &&
      (formValues.possuiChamados || formValues.experiencias)
    ) {
      // Adicione aqui a lógica para enviar o formulário se todos os campos estão preenchidos
      // ...

      // Após o envio do formulário, exiba a mensagem de sucesso
      setFormSubmitted(true);
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  };

  const handleOkButtonClick = () => {
    // Redefina o estado para ocultar a mensagem de sucesso e limpar os campos do formulário
    setFormSubmitted(false);
    setFormValues({
      nome: '',
      sobrenome: '',
      email: '',
      descricao: '',
      prioridade: '',
      possuiChamados: false,
      experiencias: false,
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <>
      <div className={`content ${formSubmitted ? 'hidden' : ''}`}>
        <h1>Envio de chamados 📧</h1>
        <form id="form" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="nome"
              placeholder="Digite seu nome"
              className="inputs required"
              value={formValues.nome}
              onChange={handleInputChange}
              required
            />
            <span className="span-required">Nome deve ter no mínimo 3 caracteres</span>
          </div>
          <div>
            <input
              type="text"
              name="sobrenome"
              placeholder="Digite seu sobrenome"
              className="inputs required"
              value={formValues.sobrenome}
              onChange={handleInputChange}
              required
            />
            <span className="span-required">Nome deve ter no mínimo 3 caracteres</span>
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Digite seu email"
              className="inputs required"
              value={formValues.email}
              onChange={handleInputChange}
              required
            />
            <span className="span-required">Digite um email válido</span>
          </div>
          <textarea
            className="inputs"
            name="descricao"
            id="descricao"
            cols="25"
            rows="6"
            placeholder="Descreva melhor seu problema..."
            value={formValues.descricao}
            onChange={handleInputChange}
            required
          ></textarea>
          <p>Qual o nível de prioridade do seu chamado?:</p>
          <div className="box-select">
            <div>
              <input
                type="radio"
                id="m"
                value="m"
                name="prioridade"
                checked={formValues.prioridade === 'm'}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="m">Baixo</label>
            </div>
            <div>
              <input
                type="radio"
                id="f"
                value="f"
                name="prioridade"
                checked={formValues.prioridade === 'f'}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="f">Médio</label>
            </div>
            <div>
              <input
                type="radio"
                id="o"
                value="o"
                name="prioridade"
                checked={formValues.prioridade === 'o'}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="o">Alto</label>
            </div>
          </div>
          <p>Possui outros chamados em aberto?</p>
          <div className="box-select">
            <div>
              <input
                type="checkbox"
                id="possuiChamados"
                value="possuiChamados"
                name="possuiChamados"
                checked={formValues.possuiChamados}
                onChange={handleInputChange}
              />
              <label htmlFor="possuiChamados">Sim</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="experiencias"
                value="experiencias"
                name="experiencias"
                checked={formValues.experiencias}
                onChange={handleInputChange}
              />
              <label htmlFor="experiencias">Não</label>
            </div>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
      {formSubmitted && (
        <div className="success-message">
          <p>Recebemos seu chamado, resolveremos o quanto antes!</p>
          <button onClick={handleOkButtonClick}>OK</button>
        </div>
      )}
    </>
  );
};

export default Formulario;
