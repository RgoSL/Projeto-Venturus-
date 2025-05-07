import React, { useState } from 'react';
import {CampoTexto} from '../CampoTexto/CampoTexto';
import { ActionButton } from '../Button/Button'; 
import { useNavigate } from "react-router-dom";

function CadastroForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    dataNascimento: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cadastroData = { ...form };

    try {
      const response = await fetch("http://localhost:5000/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(cadastroData)
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Erro ao cadastrar');

      if (data.token) {
        localStorage.setItem("token", data.token);
        alert("Cadastro realizado com sucesso!");
        navigate("/Login");
      } else {
        alert("Erro ao cadastrar: " + (data.message || "Sem mensagem"));
      }
    } catch (err) {
      alert("Erro ao cadastrar: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CampoTexto
        label="Seu Nome"
        type="text"
        name="nome"
        value={form.nome}
        onChange={handleChange}
        autoComplete="off"
      />
      <CampoTexto
        label="Fulano@gmail.com"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        autoComplete="email"
      />
      <CampoTexto
        label="Data de Nascimento"
        type="date"
        name="dataNascimento"
        value={form.dataNascimento}
        onChange={handleChange}
      />
      <CampoTexto
        label="Sua senha"
        type="password"
        name="senha"
        value={form.senha}
        onChange={handleChange}
        autoComplete="new-password"
      />
      <div className="text-center pt-1 mb-5 pb-1">
        <ActionButton label="Cadastrar" className="CadBtn" />
      </div>
    </form>
  );
}

export {CadastroForm};
