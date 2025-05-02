import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';
import styles from './Login.module.css';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  // Função chamada quando o usuário clica no botão de login
  const handleLogin = (e) => {
    e.preventDefault();

    // Enviar dados de login para o backend
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        senha: senha
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.token) {
        // Armazena o token JWT no localStorage após o login
        localStorage.setItem("token", data.token);
        alert("Login realizado com sucesso!");

        // Redireciona para a página principal ou outra rota
        navigate("/"); // Substitua "/dashboard" pela sua rota
      } else {
        setError(data.message || "Erro ao realizar login");
      }
    })
    .catch(err => {
      console.error('Erro ao realizar login:', err);
      setError("Erro ao realizar login: " + err.message);
    });
  };

  return (
    <MDBContainer className="my-5 gradient-form" fluid>
      <MDBRow>
        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">
            <div className={styles.containerInfo}>
              <div className="text-center">
                <img src="./imagens/logo.png" className={styles.logo} alt="logo" />
                <h4 className={`mt-1 mb-5 pb-1 ${styles.Info_texto}`}>Nós somos ...</h4>
              </div>

              <p className={`Info-texto ${styles.Info_texto}`}>Por favor entre com a sua conta</p>

              {/* Exibe mensagem de erro, se houver */}
              {error && <p style={{ color: 'red' }}>{error}</p>}

              <MDBInput
                wrapperClass={`mb-4 ${styles.input_login}`}
                label='Fulano@gmail.com...'
                id='form1'
                type='email'
                autoComplete='off'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBInput
                wrapperClass={`mb-4 ${styles.input_login}`}
                label='Sua senha'
                id='form2'
                type='password'
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />

              <div className="text-center pt-1 mb-5 pb-1">
                <MDBBtn className={styles.CadBtn} onClick={handleLogin}>Entrar</MDBBtn>
              </div>

              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className={`mb-0 ${styles.Info_texto_p}`}>Não tem uma conta?</p>
                <MDBBtn
                  outline
                  className={`mx-2 ${styles.Btn_cadastrar}`}
                  color='warning'
                  onClick={() => navigate("/cadastro")}
                >
                  Cadastrar
                </MDBBtn>
              </div>
            </div>
          </div>
        </MDBCol>

        <MDBCol col='6' className={`mb-5 d-flex justify-content-center align-items-center ${styles.column2}`}>
          <img
            src="/imagens/homem.png"
            alt="corporativismo"
            className={styles.img_corp}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export { Login };
