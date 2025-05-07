function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault();
      fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha })
      })
        .then(res => res.json())
        .then(data => {
          if (data.token) {
            localStorage.setItem("token", data.token);
            alert("Login realizado com sucesso!");
            navigate("/");
          } else {
            setError(data.message || "Erro ao realizar login");
          }
        })
        .catch(err => setError("Erro ao realizar login: " + err.message));
    };
  
    return (
      <MDBContainer className="my-5 gradient-form" fluid>
        <MDBRow>
          <MDBCol col='6' className="mb-5">
            <div className="d-flex flex-column ms-5">
              <div className={styles.containerInfo}>
                <LogoSection />
                <LoginForm
                  email={email}
                  senha={senha}
                  setEmail={setEmail}
                  setSenha={setSenha}
                  handleLogin={handleLogin}
                  error={error}
                />
                <CadastroPrompt navigate={navigate} />
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
  
export {Login};