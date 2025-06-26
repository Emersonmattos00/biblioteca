<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Biblioteca Digital</title>

<!-- jQuery e Turn.js para efeito virar páginas -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/turn.js/4.1.0/turn.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/turn.js/4.1.0/turn.min.css" />

<style>
  html, body {
    height: 100%; margin: 0;
    font-family: Arial, sans-serif;
    position: relative;
    background: #fff;
    overflow-x: hidden;
  }
  body::before {
    content: ""; position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: url('assets/imagens/capa.png') no-repeat center center fixed;
    background-size: cover;
    opacity: 0.5;
    pointer-events: none;
    z-index: 0;
  }
  header {
    position: fixed;
    top: 0; left: 0; right: 0;
    background: transparent;
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    gap: 15px;
    z-index: 30;
  }
  header button {
    background: transparent;
    border: none;
    color: #007acc;
    font-weight: bold;
    font-size: 1.1rem;
    padding: 0.5rem 1.2rem;
    cursor: pointer;
    border-radius: 8px;
    transition: box-shadow 0.3s ease, text-shadow 0.3s ease, background-color 0.3s ease;
  }
  header button:hover {
    background: #007acc;
    color: white;
    box-shadow: 0 5px 15px rgba(0, 122, 204, 0.6);
    text-shadow: 0 0 10px rgba(255,255,255,0.8);
  }
  main {
    padding: 6rem 1rem 2rem;
    position: relative;
    z-index: 10;
    min-height: 100vh;
  }
  .hidden { display: none; }
  #livros-container, #favoritos-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .livro {
    background: rgba(255,255,255,0.9);
    border-radius: 8px;
    border: 1px solid #ccc;
    padding: 10px;
    width: 150px;
    cursor: pointer;
    box-shadow: 1px 1px 6px rgba(0,0,0,0.1);
    transition: box-shadow 0.3s ease;
  }
  .livro:hover {
    box-shadow: 2px 2px 12px rgba(0,0,0,0.3);
  }
  .livro img {
    max-width: 100%; height: auto;
    border-radius: 5px; margin-bottom: 8px;
  }

  /* Centralizar formulário e limitar largura */
  .form-wrapper {
    max-width: 700px;
    width: 90%;
    margin: 0 auto;
    padding: 40px;
    background: rgba(255,255,255,0.95);
    border-radius: 12px;
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
    max-height: 80vh;
    overflow-y: auto;
  }
  #livro-form {
    width: 100%;
    box-sizing: border-box;
  }

  form input {
    display: block;
    margin-bottom: 10px;
    width: 100%;
    padding: 8px;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 1rem;
  }

  /* Editor contenteditable estilizado */
  #livro-texto {
    min-height: 200px;
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 1rem;
    overflow-y: auto;
    background: white;
  }

  form button {
    padding: 10px 18px;
    background: #007acc;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    border: none;
    transition: background-color 0.3s ease;
  }
  form button:hover {
    background: #005f99;
  }
  .btn-flutuante {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: transparent;
    color: #007acc;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    font-size: 30px;
    cursor: pointer;
    z-index: 40;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: color 0.3s, background-color 0.3s, box-shadow 0.3s;
    box-shadow: none;
  }
  .btn-flutuante + .btn-flutuante {
    bottom: 90px;
    right: 20px;
  }
  .btn-flutuante:hover {
    background: #007acc;
    color: white;
    box-shadow: 0 4px 12px rgba(0,0,0,0.35);
  }
  #livro-real {
    width: 600px;
    max-width: 100%;
    height: 400px;
    margin: 1rem auto;
    background: white;
    box-shadow: 0 0 15px rgba(0,0,0,0.3);
    position: relative;
    z-index: 10;
  }
  #voltar-home, #btn-favorito {
    cursor: pointer;
    background: #007acc;
    border: none;
    color: white;
    padding: 10px 18px;
    border-radius: 8px;
    margin: 0.5rem 0.2rem 1rem 0;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  #voltar-home:hover, #btn-favorito:hover {
    background: #005f99;
  }
  #search {
    width: 70%; max-width: 400px;
    padding: 10px 12px;
    font-size: 1rem;
    border-radius: 8px;
    border: 1px solid #ccc;
  }
  #loading-button {
    display: none;
    margin-left: 10px;
    padding: 10px 16px;
    font-size: 1rem;
    border-radius: 8px;
    border: none;
    background: #007acc;
    color: white;
    cursor: default;
  }

  /* Barra de ferramentas do editor */
  .editor-toolbar {
    margin-bottom: 10px;
    user-select: none;
  }
  .editor-toolbar button {
    background: #eee;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 6px 12px;
    margin-right: 5px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }
  .editor-toolbar button:hover {
    background-color: #ddd;
  }
</style>
</head>
<body>

<header>
  <button data-page="home">Início</button>
  <button data-page="favoritos">Favoritos</button>
  <button data-page="editar">Adicionar Livro</button>
</header>

<main>
  <section id="home" class="page">
    <div style="margin:1rem 0;text-align:center;">
      <input id="search" placeholder="Pesquisar livros..." />
      <button id="loading-button" disabled>Carregando...</button>
    </div>
    <div id="livros-container"></div>
    <div id="loading">Carregando livros...</div>
  </section>

  <section id="favoritos" class="page hidden">
    <h2>Meus Favoritos</h2>
    <div id="favoritos-container"></div>
  </section>

  <section id="editar" class="page hidden">
    <h2>Adicionar / Editar Livro</h2>
    <div class="form-wrapper">

      <!-- Barra de ferramentas do editor -->
      <div class="editor-toolbar" role="toolbar" aria-label="Ferramentas de formatação">
        <button type="button" data-cmd="bold" title="Negrito (Ctrl+B)"><b>B</b></button>
        <button type="button" data-cmd="italic" title="Itálico (Ctrl+I)"><i>I</i></button>
        <button type="button" data-cmd="underline" title="Sublinhado (Ctrl+U)"><u>U</u></button>
        <button type="button" data-cmd="undo" title="Desfazer (Ctrl+Z)">↺</button>
        <button type="button" data-cmd="redo" title="Refazer (Ctrl+Y)">↻</button>
      </div>

      <form id="livro-form">
        <input id="livro-titulo" placeholder="Título do livro" required />
        <input id="livro-autor" placeholder="Autor" required />
        <input id="livro-capa" placeholder="URL da capa (opcional)" />
        <input type="file" id="pdf-upload" accept="application/pdf" style="margin-bottom:10px" />
        
        <!-- Área editável substitui textarea -->
        <div id="livro-texto" contenteditable="true" aria-label="Texto do livro" spellcheck="true" placeholder="Digite o texto do livro aqui..." style="white-space: pre-wrap;"></div>
        
        <button type="submit">Salvar</button>
      </form>
    </div>
  </section>

  <section id="leitura" class="page hidden">
    <button id="voltar-home">← Voltar</button>
    <h2 id="titulo-livro"></h2>
    <h4 id="autor-livro"></h4>
    <div id="livro-real"></div>
    <button id="btn-favorito">❤️ Favoritar</button>
  </section>
</main>

<button id="btn-adicionar" class="btn-flutuante" title="Adicionar Livro">+</button>
<button id="btn-home" class="btn-flutuante" title="Início" style="bottom: 90px">🏠</button>

<script>
(() => {
  let livros = [];
  let meusLivros = JSON.parse(localStorage.getItem('meusLivros')) || [];
  let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  let livroAtual = null;

  // Elementos
  const sections = document.querySelectorAll('section.page');
  const navButtons = document.querySelectorAll('header button[data-page]');
  const livrosContainer = document.getElementById('livros-container');
  const favoritosContainer = document.getElementById('favoritos-container');
  const loadingDiv = document.getElementById('loading');
  const loadingButton = document.getElementById('loading-button');
  const searchInput = document.getElementById('search');
  const livroForm = document.getElementById('livro-form');
  const leituraSection = document.getElementById('leitura');
  const tituloLivro = document.getElementById('titulo-livro');
  const autorLivro = document.getElementById('autor-livro');
  const btnFavorito = document.getElementById('btn-favorito');
  const voltarHomeBtn = document.getElementById('voltar-home');
  const btnAdicionar = document.getElementById('btn-adicionar');
  const btnHomeFlutuante = document.getElementById('btn-home');

  function mostrarPagina(id) {
    sections.forEach(s => s.classList.add('hidden'));
    const sec = document.getElementById(id);
    if (sec) sec.classList.remove('hidden');
  }

  async function carregarLivros() {
    loadingDiv.style.display = 'block';
    livrosContainer.style.display = 'none';
    try {
      const res = await fetch('data/books.json');
      if (!res.ok) {
        console.warn('books.json não encontrado ou não carregado corretamente.');
        livros = [...meusLivros];
      } else {
        const data = await res.json();
        livros = [...data, ...meusLivros];
      }
    } catch (e) {
      console.error('Erro ao tentar carregar books.json.', e);
      livros = [...meusLivros];
    }
    montarCards(livrosContainer, livros);
    loadingDiv.style.display = 'none';
    livrosContainer.style.display = 'flex';
  }

  function carregarFavoritos() {
    const favoritosLivros = livros.filter(l => favoritos.includes(String(l.id)));
    montarCards(favoritosContainer, favoritosLivros);
  }

  function montarCards(container, listaLivros) {
    container.innerHTML = '';
    if (!listaLivros.length) {
      container.innerHTML = '<p>Nenhum livro encontrado.</p>';
      return;
    }
    listaLivros.forEach(livro => {
      const div = document.createElement('div');
      div.className = 'livro';
      div.innerHTML = `
        <img src="${livro.capa || 'assets/imagens/capa.png'}" alt="${livro.titulo}" />
        <h3>${livro.titulo}</h3>
        <p>${livro.autor}</p>
        <div style="margin-top:8px; display:flex; justify-content: space-between;">
          <button class="btn-editar" style="flex:1; margin-right:5px;">✏️ Editar</button>
          <button class="btn-remover" style="flex:1; margin-left:5px; color:#c00;">🗑️ Remover</button>
        </div>`;
      div.querySelector('img').addEventListener('click', () => abrirLivro(livro));
      div.querySelector('.btn-editar').addEventListener('click', (e) => {
        e.stopPropagation();
        editarLivro(livro);
      });
      div.querySelector('.btn-remover').addEventListener('click', (e) => {
        e.stopPropagation();
        if (confirm(`Remover o livro "${livro.titulo}"?`)) {
          // Remover do meusLivros e favoritos
          meusLivros = meusLivros.filter(l => l.id !== livro.id);
          favoritos = favoritos.filter(f => f !== String(livro.id));
          localStorage.setItem('meusLivros', JSON.stringify(meusLivros));
          localStorage.setItem('favoritos', JSON.stringify(favoritos));
          carregarLivros();
          carregarFavoritos();
        }
      });
      container.appendChild(div);
    });
  }

  function abrirLivro(livro) {
    livroAtual = livro;
    mostrarPagina('leitura');
    tituloLivro.textContent = livro.titulo;
    autorLivro.textContent = livro.autor;

    const livroReal = document.getElementById('livro-real');
    livroReal.innerHTML = '';

    const texto = livro.texto || 'Conteúdo não disponível.';

    // Cria páginas para turn.js com base em blocos de 500 chars, preservando html simples
    const paginas = [];
    const charsPorPagina = 500;

    for (let i = 0; i < texto.length; i += charsPorPagina) {
      paginas.push(texto.substring(i, i + charsPorPagina));
    }

    paginas.forEach(paginaTexto => {
      const pageDiv = document.createElement('div');
      pageDiv.style.padding = '20px';
      pageDiv.style.boxSizing = 'border-box';
      pageDiv.style.width = '100%';
      pageDiv.style.height = '100%';
      pageDiv.style.background = 'white';
      pageDiv.style.fontSize = '16px';
      pageDiv.style.lineHeight = '1.5em';
      // Permite HTML para manter formatação do editor
      pageDiv.innerHTML = paginaTexto;
      livroReal.appendChild(pageDiv);
    });

    if ($(livroReal).data('turn')) {
      $(livroReal).turn('destroy');
    }
    $(livroReal).turn({ width: 600, height: 400, autoCenter: true });

    btnFavorito.textContent = favoritos.includes(String(livro.id))
      ? '❤️ Remover Favorito'
      : '❤️ Favoritar';
  }

  btnFavorito.addEventListener('click', () => {
    if (!livroAtual) return;
    const idStr = String(livroAtual.id);
    if (favoritos.includes(idStr)) {
      favoritos = favoritos.filter(f => f !== idStr);
      btnFavorito.textContent = '❤️ Favoritar';
      alert('Livro removido dos favoritos.');
    } else {
      favoritos.push(idStr);
      btnFavorito.textContent = '❤️ Remover Favorito';
      alert('Livro adicionado aos favoritos!');
    }
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  });

  voltarHomeBtn.addEventListener('click', () => {
    navegarPara('home');
  });

  searchInput.addEventListener('input', async e => {
    const texto = e.target.value.trim().toLowerCase();
    loadingButton.style.display = 'inline-block';
    searchInput.disabled = true;

    await new Promise(r => setTimeout(r, 300));

    if (!texto) {
      montarCards(livrosContainer, livros);
    } else {
      const filtrados = livros.filter(
        l => l.titulo.toLowerCase().includes(texto) || l.autor.toLowerCase().includes(texto)
      );
      montarCards(livrosContainer, filtrados);
    }

    loadingButton.style.display = 'none';
    searchInput.disabled = false;