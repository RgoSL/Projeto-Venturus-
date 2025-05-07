import React, { useState } from 'react';
import EnzoCostaPaz from './images/enzocostapaz.jpeg'; // Importando a imagem
import Felipe from './images/eu.jpeg'; // Importando a imagem
import Rodrigo from './images/rodrigo.jpg'; // Importando a imagem
import Joao from './images/jp.jpeg'; // Importando a imagem

const SobreNos = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = "A equipe do Tarefão é composta por profissionais dedicados e multifacetados, reunindo líderes visionários, desenvolvedores inovadores e designers criativos, todos comprometidos em transformar ideias em ferramentas práticas. Esta colaboração sinérgica reflete o compromisso da empresa em oferecer soluções que elevem a experiência do usuário.A empresa desenvolveu um organograma intuitivo, projetado para simplificar a visualização e a gestão de estruturas organizacionais. Com foco em conforto e facilidade de uso, esta solução permite que indivíduos de qualquer nível de experiência naveguem, compreendam e personalizem o organograma de maneira eficiente. O propósito é entregar uma ferramenta acessível e amigável, que suporte a organização de equipes e processos, promovendo clareza e produtividade em diversos ambientes de trabalho.";
  const previewText = fullText.split(' ').slice(0, 10).join(' ') + '...'; // Mostra as primeiras 10 palavras

  return (
    <div>
      {/* Header Navigation */}

      {/* Main Content - Side by Side */}
      <section style={{ padding: '2rem', backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', maxWidth: '400px', textAlign: 'left', minWidth: '300px' }}>
          <h2 style={{ fontSize: '2rem', color: '#000' }}>
            Nós somos um time de pessoas que ama o que faz
          </h2>
        </div>
        <div style={{ flex: '1', maxWidth: '400px', textAlign: 'left', minWidth: '300px' }}>
          <p style={{ color: '#666' }}>
            {window.innerWidth <= 600 && !isExpanded ? previewText : fullText}
          </p>
          {window.innerWidth <= 600 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              style={{
                background: 'none',
                border: 'none',
                color: '#000',
                cursor: 'pointer',
                fontWeight: 'bold',
                padding: '0.5rem 0',
                textDecoration: 'underline'
              }}
            >
              {isExpanded ? 'Ler Menos' : 'Ler Mais'}
            </button>
          )}
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: '2rem', backgroundColor: '#f5f5f5', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.5rem', color: '#666', marginBottom: '2rem' }}>Conheça nosso time</h3>
        <div style={{ display: 'flex', justifyContent: 'space-around', maxWidth: '100%', margin: '0 auto', flexWrap: 'wrap' }}>
          <div style={{ margin: '1rem', textAlign: 'center', flex: '1 1 150px' }}>
            <img src={Rodrigo} alt="Rodrigo" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
            <h4 style={{ color: '#000', margin: '0.5rem 0' }}>Rodrigo</h4>
            <p style={{ color: '#666', margin: 0 }}>Desenvolvedor</p>
          </div>
          <div style={{ margin: '1rem', textAlign: 'center', flex: '1 1 150px' }}>
            <img src={Joao} alt="João" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
            <h4 style={{ color: '#000', margin: '0.5rem 0' }}>João</h4>
            <p style={{ color: '#666', margin: 0 }}>Desenvolvedor</p>
          </div>
          <div style={{ margin: '1rem', textAlign: 'center', flex: '1 1 150px' }}>
            <img src={Felipe} alt="Felipe" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
            <h4 style={{ color: '#000', margin: '0.5rem 0' }}>Felipe</h4>
            <p style={{ color: '#666', margin: 0 }}>Desenvolvedor</p>
          </div>
          <div style={{ margin: '1rem', textAlign: 'center', flex: '1 1 150px' }}>
            <img src={EnzoCostaPaz} alt="Enzo" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
            <h4 style={{ color: '#000', margin: '0.5rem 0' }}>Enzo</h4>
            <p style={{ color: '#666', margin: 0 }}>Desenvolvedor </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export {SobreNos};
