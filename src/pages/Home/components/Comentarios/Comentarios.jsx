import style from './Comentarios.module.css'

function Comentarios() {
    return (
        <section className={style.ComentariosSec}>
            <div className={style.Titulo}>
                <span>O que os usuários acham do Tarefão</span>
            </div>

            <div className={style.Comentario1}>
                <div className={style.LinhaTexto}>
                    <img src="./Imagens/citar.png" className={style.IconeCitar} />
                    <p className={style.TextoPrincipal}>
                        Ótimo, muito bem organizado e simples de entender. Super importante para a produtividade.
                    </p>
                </div>
                <p className={style.Autor}>Marcus Fonseca Rocha</p>
                <p className={style.Cargo}>Executivo de Finanças</p>
            </div>


            <div className={style.Comentario2}>
                <div className={style.LinhaTexto}>
                <img src="./Imagens/citar.png" className={style.IconeCitar} />
                <p className={style.TextoPrincipal}>Simples, rápido e pratico. Utilizei para meu projeto na faculdade e tive uma produtividade incrível!</p>
                </div>
                
                
                <p className={style.Autor}>Mariana Arashiro</p>
                <p className={style.Cargo}>Estudante de Tecnologia</p>
            </div>
        </section>
    )
}
export { Comentarios };