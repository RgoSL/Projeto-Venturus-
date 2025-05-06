import { useEffect, useState } from "react";
import style from './ExibirUsuarios.module.css';

const ExibirUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const buscarUsuarios = async () => {
      try {
        const res = await fetch("http://localhost:3001/usuarios");
        const data = await res.json();
        setUsuarios(data);
      } catch (err) {
        console.error("Erro ao buscar usuários:", err);
      }
    };

    buscarUsuarios();
  }, []);

  const getCategoriaClass = (categoria) => {
    const normalizada = categoria.toLowerCase().replace(/\s*\/\s*/g, " - ");
    switch (normalizada) {
      case "alta importância - alta urgência":
        return style.vermelho;
      case "alta importância - baixa urgência":
        return style.laranja;
      case "baixa importância - alta urgência":
        return style.amarelo;
      case "baixa importância - baixa urgência":
        return style.verde;
      default:
        return "";
    }
  };

  const handleDelete = (id) => {
    const confirmado = window.confirm("Tem certeza que deseja excluir este usuário?");
    if (confirmado) {
      setUsuarios(usuarios.filter(u => u.id !== id));
      // Opcional: enviar requisição DELETE para o backend
      // fetch(`http://localhost:3001/usuarios/${id}`, { method: 'DELETE' });
    }
  };

  const handleEdit = (id) => {
    const usuario = usuarios.find(u => u.id === id);
    const novoNome = prompt("Novo nome:", usuario.nome);
    const novaDescricao = prompt("Nova descrição:", usuario.descricao);

    if (novoNome !== null && novaDescricao !== null) {
      const novosUsuarios = usuarios.map(u =>
        u.id === id ? { ...u, nome: novoNome, descricao: novaDescricao } : u
      );
      setUsuarios(novosUsuarios);

      // Opcional: enviar PUT para backend
      // fetch(`http://localhost:3001/usuarios/${id}`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ ...usuario, nome: novoNome, descricao: novaDescricao })
      // });
    }
  };

  return (
    <div className={style.ExibirUsuarios}>
      <h2>Usuários Descriptografados</h2>
      {usuarios.length === 0 && <p>Nenhum usuário encontrado.</p>}

      <div className={style.grid}>
      {usuarios.map((u, i) => (
  <div key={i} className={style.card}>
    {u.imagemPath && (
      <img
        src={`http://localhost:3001/uploads/${u.imagemPath}`}
        alt={`Imagem de ${u.nome}`}
        className={style.imagem}
      />
    )}

    <span className={style.nome}>{u.nome}</span>
    <span className={`${style.categoria} ${getCategoriaClass(u.categoria)}`}>
      {u.categoria}
    </span>
    <em>{u.sessao}</em>
    <p>{u.descricao}</p>

    <div className={style.botoes}>
      <button onClick={() => handleEdit(u.id)}>Editar</button>
      <button onClick={() => handleDelete(u.id)}>Excluir</button>
    </div>
  </div>
))}

      </div>
    </div>
  );
};

export default ExibirUsuarios;
