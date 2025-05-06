import styles from './Login.module.css'

function CadastroPrompt({ navigate }) {
  return (
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
  );
}
