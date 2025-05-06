import style from './Forms.module.css';

const Forms = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nome", document.getElementById("fname").value);
    formData.append("categoria", document.getElementById("fcategoria").value);
    formData.append("descricao", document.getElementById("fdescricao").value);
    formData.append("sessao", document.getElementById("ftime").value);

    const imagem = document.getElementById("fimagem").files[0];
    if (imagem) {
      formData.append("imagem", imagem);
    }

    try {
      const response = await fetch("http://localhost:3001/criar-usuario", {
        method: "POST",
        body: formData, // <- sem headers aqui
      });

      const resultado = await response.json();
      alert(resultado.mensagem);
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      alert("Erro ao enviar dados.");
    }
  };

  return (
    <div className={style.f_container}>
      <form onSubmit={handleSubmit}>
        <legend>Preencha os dados para criar o card do colaborador</legend>

        <label htmlFor="fname">Nome</label>
        <input type="text" id="fname" name="fname" />

        <label htmlFor="fcategoria">Categoria (Importância/Urgência)</label>
        <select id="fcategoria" name="fcategoria">
          <option value="">Selecione uma categoria</option>
          <option value="Alta importância / Alta urgência">Alta importância / Alta urgência</option>
          <option value="Alta importância / Baixa urgência">Alta importância / Baixa urgência</option>
          <option value="Baixa importância / Alta urgência">Baixa importância / Alta urgência</option>
          <option value="Baixa importância / Baixa urgência">Baixa importância / Baixa urgência</option>
        </select>

        <label htmlFor="fdescricao">Descrição</label>
        <input type="text" id="fdescricao" name="fdescricao" />

        <label htmlFor="fimagem">Imagem (Opcional)</label>
        <input type="file" id="fimagem" name="fimagem" accept="image/*" />

        <label htmlFor="ftime">Sessão</label>
        <select id="ftime" name="ftime">
          <option value="">Selecione um time</option>
          <option value="Escola">Escola</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
        </select>

        <button type="submit">Criar Card</button>
      </form>
    </div>
  );
};

export { Forms };
