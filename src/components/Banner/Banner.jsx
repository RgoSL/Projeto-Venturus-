import style from './Banner.module.css';

function Banner() {
    return (
        <>
            <header className={style.navImage}>
                <nav className={style.nav}>
                    <div className={style.NavBack}>
                        <img src="/Imagens/LogoFinal.png" alt="Logo do projeto" className={style.Logo} />

                        <div className={style.linkGroup}>
                            <a className={style.navItem} href="#opinioes">Opiniões</a>
                            <a className={style.navItem} href="#vantagens">Vantagens</a>
                            <a className={style.navItem} href="#equipe">Equipe</a>
                        </div>

                        <div className={style.loginGroup}>
                            <a className={style.login} href="#login">Login</a>
                        </div>
                    </div>
                </nav>
                <div className={style.Content}>
                    <h1 className={style.Titulo}>Use o Tarefão</h1>
                    <h1 className={style.Titulo2}>Para Evitar um Problemão</h1>
                    <button className={style.BtnRegistro}>Cadastrar-se </button>
                </div>
            </header>
        </>
    );
}

export { Banner };