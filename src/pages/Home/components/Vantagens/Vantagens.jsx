import style from './Vantagens.module.css';

function Vantagens() {
    return (
        <section className={style.VantagensSec}>
            <div className={style.Titulo}>
                <p>Quais são as vantagens de usar o Tarefão?</p>
            </div>

            <div className={style.VantagensContainer}>
                <div className={style.Qualidade}>
                    <p className={style.TituloVantagem}>
                        Objetividade <img src="./Imagens/objetivo.png" alt="Icone do Titulo" className={style.Icone} />
                    </p>
                    <p className={style.ConteudoVantagem}>Definimos as tarefas da maneira mais direta e prática possivel para você</p>
                </div>

                <div className={style.Qualidade}>
                    <p className={style.TituloVantagem}>
                        Resultado Claro <img src="./Imagens/resultados.png" alt="Icone do Titulo" className={style.Icone} />
                    </p>
                    <p className={style.ConteudoVantagem}>Expomos a objetividade de maneira visual</p>
                </div>

                <div className={style.Qualidade}>
                    <p className={style.TituloVantagem}>
                        Foco <img src="./Imagens/FocoCliente.png" alt="Icone do Titulo" className={style.Icone} />
                    </p>
                    <p className={style.ConteudoVantagem}>Temos o objetivo de resumir o trabalho de organização</p>
                </div>
            </div>
        </section>

    );
}

export { Vantagens }