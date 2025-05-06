import styles from '../Login.module.css'

function LogoSection() {
  return (
    <div className="text-center">
      <img src="./imagens/logo.png" className={styles.logo} alt="logo" />
      <h4 className={`mt-1 mb-5 pb-1 ${styles.Info_texto}`}>Nós somos ...</h4>
    </div>
  );
}
