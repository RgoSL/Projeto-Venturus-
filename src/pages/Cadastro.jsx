import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';
import styles from './Cadastro.module.css';
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const navigate = useNavigate();

  // Corrigindo valores iniciais do estado para não conterem espaços em branco
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    dataNascimento: ""  // Se for necessário, adicione este campo ao estado
  });

  // Função para atualizar o estado conforme o usuário digita nos campos
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Função que é chamada quando o formulário é submetido
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Monta o JSON com os dados preenchidos
    const cadastroData = {
      nome: form.nome,
      email: form.email,
      senha: form.senha,
      dataNascimento: form.dataNascimento,  // Enviando o campo dataNascimento, se necessário
    };

    try {
      const response = await fetch("http://localhost:5000/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cadastroData),
      });
  
      const data = await response.json(); // <- pega o JSON ANTES de verificar response.ok
  
      if (!response.ok) {
        throw new Error(data.message || 'Erro ao cadastrar');
      }
  
      if (data.token) {
        localStorage.setItem("token", data.token);
        alert("Cadastro realizado com sucesso!");
        navigate("/Login");
      } else {
        alert("Erro ao cadastrar: " + (data.message || "Sem mensagem"));
      }
    } catch (err) {
      alert("Erro ao cadastrar: " + err.message);
    }
    
  };

  return (
    <MDBContainer className="my-5 gradient-form" fluid>
      <MDBRow>
        <MDBCol col='6' className="mb-5 ">
          <img src="/imagens/mulher.png" alt="corporativismo" className={styles.img_corp} />
        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">
            <div className={styles.containerInfo}>
              <p className={`Info-texto ${styles.Info_texto}`}>Por favor entre com a sua conta</p>

              <MDBInput
  wrapperClass={`mb-4 ${styles.input_login}`}
  label='Seu Nome'
  id='formNome'
  type='text'
  name='nome'
  value={form.nome}
  onChange={handleChange}
  autoComplete='off'
/>

<MDBInput
  wrapperClass={`mb-4 ${styles.input_login}`}
  label='Fulano@gmail.com'
  id='formEmail'
  type='email'
  name='email'
  value={form.email}
  onChange={handleChange}
  autoComplete='email'
/>

<MDBInput
  wrapperClass={`mb-4 ${styles.input_login}`}
  label='Data de Nascimento'
  id='formDataNascimento'
  type='date'
  name='dataNascimento'
  value={form.dataNascimento}
  onChange={handleChange}
/>

<MDBInput
  wrapperClass={`mb-4 ${styles.input_login}`}
  label='Sua senha'
  id='formSenha'
  type='password'
  name='senha'
  value={form.senha}
  onChange={handleChange}
  autoComplete='new-password'
/>

              <div className="text-center pt-1 mb-5 pb-1">
                <MDBBtn className={styles.CadBtn} onClick={handleSubmit}>
                  Cadastrar
                </MDBBtn>
              </div>

              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className={`mb-0 ${styles.Info_texto_p}`}>Já tem uma conta?</p>
                <MDBBtn outline className={`mx-2 ${styles.Btn_cadastrar}`} color='warning' onClick={() => navigate("/Login")}>
                  Login
                </MDBBtn>
              </div>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export { Cadastro };
