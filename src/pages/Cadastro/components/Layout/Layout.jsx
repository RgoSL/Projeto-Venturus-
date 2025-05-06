import React from 'react';
import { MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';
import Image from './Image';
import CadastroForm from './CadastroForm';
import styles from './Cadastro.module.css';

function CadastroLayout() {
  return (
    <MDBContainer className="my-5 gradient-form" fluid>
      <MDBRow>
        <MDBCol col="6" className="mb-5">
          <Image src="/imagens/mulher.png" alt="corporativismo" className={styles.img_corp} />
        </MDBCol>
        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column ms-5">
            <div className={styles.containerInfo}>
              <p className={`Info-texto ${styles.Info_texto}`}>Por favor entre com a sua conta</p>
              <CadastroForm />
              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className={`mb-0 ${styles.Info_texto_p}`}>Já tem uma conta?</p>
                <ActionButton label="Login" className={`mx-2 ${styles.Btn_cadastrar}`} onClick={() => navigate("/Login")} />
              </div>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export {CadastroLayout};
