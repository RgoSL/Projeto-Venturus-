import styles from '../Login.module.css'

function LoginForm({ email, senha, setEmail, setSenha, handleLogin, error }) {
  return (
    <>
      <p className={`Info-texto ${styles.Info_texto}`}>Por favor entre com a sua conta</p>
      {error && <p className={styles.errorText}>{error}</p>}

      <MDBInput
        wrapperClass={`mb-4 ${styles.input_login}`}
        label='Fulano@gmail.com...'
        type='email'
        autoComplete='off'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <MDBInput
        wrapperClass={`mb-4 ${styles.input_login}`}
        label='Sua senha'
        type='password'
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <div className="text-center pt-1 mb-5 pb-1">
        <MDBBtn className={styles.CadBtn} onClick={handleLogin}>Entrar</MDBBtn>
      </div>
    </>
  );
}
  