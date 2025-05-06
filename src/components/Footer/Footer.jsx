import style from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.content}>
                <div className={style.header}>
                    <span className={style.titulo1}>
                        Você ou sua equipe interessaram-se pelo Tarefão?
                    </span>
                    <span className={style.titulo2}>
                        Comecem a usar e terem uma melhor organização de seus projetos
                    </span>
                    <button className={style.btnFooter}>Cadastrar-se</button>
                </div>
                
                <div className={style.Linha}></div>
                <div className={style.columns}>
                    <div className={style.brand}>
                        <img src="/Imagens/LogoFinal.png" alt="logo do Projeto" className={style.logoFooter} />
                        <span className={style.projectName}>Tarefão</span>
                    </div>

                    <div className={style.faq}>
                        <h2>FAQ</h2>
                        <a href="#" className={style.link}>Sobre Nós</a>
                        <a href="#" className={style.link}>Vantagens</a>
                        <a href="#" className={style.link}>Opiniões</a>
                    </div>

                    <div className={style.social}>
                        <h2>Redes Sociais</h2>
                        <a href="https://github.com/RgoSL/Projeto-Venturus-">
                        <FontAwesomeIcon icon={faGithub} className={style.githubLogo}/>
                        </a>
                    </div>
                </div>
            </div>

            <div className={style.copy}>
                <span className={style.textCopy}>©Tarefão 2025</span>
            </div>
        </footer>
    );
}

export { Footer };
