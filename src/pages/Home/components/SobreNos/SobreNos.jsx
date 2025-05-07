import React, { useState } from "react";
import Membro4 from "./images/Membro4.jpeg"; // Importando a imagem
import Membro3 from "./images/Membro3.jpeg"; // Importando a imagem
import Membro1 from "./images/Membro1.jpg"; // Importando a imagem
import Membro2 from "./images/Membro2.jpeg"; // Importando a imagem

const SobreNos = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText =
    " ";
  const previewText = fullText.split(" ").slice(0, 10).join(" ") + "..."; // Mostra as primeiras 10 palavras

  return (
    <div>
      {/* Header Navigation */}

      {/* Main Content - Side by Side */}
      <section
        style={{
          padding: "2rem",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            flex: "1",
            maxWidth: "400px",
            textAlign: "left",
            minWidth: "300px",
          }}
        >
          <h2 style={{ fontSize: "2rem", color: "#000" }}>
            Nós somos um time de pessoas que ama o que faz
          </h2>
        </div>
        <div
          style={{
            flex: "1",
            maxWidth: "400px",
            textAlign: "left",
            minWidth: "300px",
          }}
        >
          <p style={{ color: "#666" }}>
            {window.innerWidth <= 600 && !isExpanded ? previewText : fullText}
          </p>
          {window.innerWidth <= 600 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              style={{
                background: "none",
                border: "none",
                color: "#000",
                cursor: "pointer",
                fontWeight: "bold",
                padding: "0.5rem 0",
                textDecoration: "underline",
              }}
            >
              {isExpanded ? "Ler Menos" : "Ler Mais"}
            </button>
          )}
        </div>
      </section>

      {/* Team Section */}
      <section
        style={{
          padding: "2rem",
          backgroundColor: "#f5f5f5",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: "1.5rem", color: "#666", marginBottom: "2rem" }}>
          Conheça Nosso Time
        </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            maxWidth: "100%",
            margin: "0 auto",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{ margin: "1rem", textAlign: "center", flex: "1 1 150px" }}
          >
            <img
              src={Membro1}
              alt="Foto do Membro do Grupo"
              style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            />
            <h4 style={{ color: "#000", margin: "0.5rem 0" }}>Rodrigo Lima</h4>
            <p style={{ color: "#666", margin: 0 }}>Desenvolvedor</p>
          </div>
          <div
            style={{ margin: "1rem", textAlign: "center", flex: "1 1 150px" }}
          >
            <img
              src={Membro2}
             alt="Foto do Membro do Grupo"
              style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            />
            <h4 style={{ color: "#000", margin: "0.5rem 0" }}>João Mota</h4>
            <p style={{ color: "#666", margin: 0 }}>Desenvolvedor</p>
          </div>
          <div
            style={{ margin: "1rem", textAlign: "center", flex: "1 1 150px" }}
          >
            <img
              src={Membro3}
              alt="Foto do Membro do Grupo"
              style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            />
            <h4 style={{ color: "#000", margin: "0.5rem 0" }}>Felipe Oliveira</h4>
            <p style={{ color: "#666", margin: 0 }}>Desenvolvedor</p>
          </div>
          <div
            style={{ margin: "1rem", textAlign: "center", flex: "1 1 150px" }}
          >
            <img
              src={Membro4}
              alt="Foto do Membro do Grupo"
              style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            />
            <h4 style={{ color: "#000", margin: "0.5rem 0" }}>Enzo Paz</h4>
            <p style={{ color: "#666", margin: 0 }}>Desenvolvedor </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export { SobreNos };
