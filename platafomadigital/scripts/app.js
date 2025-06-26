let todosOsLivros = [];

function exibirLivros(data) {
  const container = document.getElementById('livros-container');
  if (!container) return;

  container.innerHTML = '';
  data.forEach(livro => {
    const div = document.createElement('div');
    div.classList.add('livro');
    div.innerHTML = `
      <img src="${livro.capa || 'assets/imagens/capa.png'}" alt="${livro.titulo}">
      <h3>${livro.titulo}</h3>
      <p>${livro.autor}</p>
      <button class="btn-ler">📖 Ler</button>
    `;
    const botaoLer = div.querySelector('.btn-ler');
    botaoLer.addEventListener('click', (e) => {
      e.stopPropagation();
      window.location.href = `livro.html?id=${livro.id}`;
    });
    container.appendChild(div);
  });
}

// Página Inicial
if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
  fetch('./data/books.json')
    .then(res => res.json())
    .then(data => {
      const locais = JSON.parse(localStorage.getItem('meusLivros')) || [];
      todosOsLivros = [...data, ...locais];
      document.getElementById('loading')?.style?.display = 'none';
      document.getElementById('livros-container')?.style?.display = 'flex';
      exibirLivros(todosOsLivros);
    });
  
  // BUSCA DE LIVROS COM BOTÃO DE CARREGAMENTO
  const searchInput = document.getElementById('search');
  const loadingButton = document.getElementById('loading-button');

  if (searchInput && loadingButton) {
    searchInput.addEventListener('input', async (e) => {
      const texto = e.target.value.trim().toLowerCase();

      // Exibir botão de carregamento e desabilitar pesquisa
      loadingButton.style.display = 'inline-block';
      searchInput.disabled = true;

      // Simular atraso para melhorar UX
      await new Promise(r => setTimeout(r, 300));

      if (!texto) {
        exibirLivros(todosOsLivros);
        loadingButton.style.display = 'none';
        searchInput.disabled = false;
        return;
      }

      const filtrados = todosOsLivros.filter(b =>
        String(b.titulo).toLowerCase().includes(texto) ||
        String(b.autor).toLowerCase().includes(texto)
      );
      exibirLivros(filtrados);

      loadingButton.style.display = 'none';
      searchInput.disabled = false;
    });
  }
}

// Página do livro
if (window.location.pathname.endsWith('livro.html')) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  fetch('./data/books.json')
    .then(res => res.json())
    .then(data => {
      const locais = JSON.parse(localStorage.getItem('meusLivros')) || [];
      const todos = [...data, ...locais];
      const livro = todos.find(b => b.id == id || b.id == Number(id));
      if (livro) {
        const container = document.getElementById('livro-detalhe');
        if (livro.caminho) {
          fetch(livro.caminho).then(r => r.text())
            .then(texto => {
              const pages = texto.split('\n\n');
              let pagesHTML = pages.map(p => `<div class="page"><div class="page-text">${p}</div></div>`).join('');
              const favoritoBtn = document.createElement('button');
              favoritoBtn.textContent = "❤️ Favorito";
              favoritoBtn.addEventListener('click', () => {
                const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
                if (!favoritos.includes(String(id))) {
                  favoritos.push(String(id));
                  localStorage.setItem('favoritos', JSON.stringify(favoritos));
                  alert("Livro adicionado aos favoritos!");
                } else {
                  alert("Já está nos favoritos!");
                }
              });
              container.innerHTML = `
                <h1>${livro.titulo}</h1>
                <h3>Autor: ${livro.autor}</h3>
                <p>${livro.descricao}</p>
                <div id="livro-revistas">${pagesHTML}</div>
              `;
              container.appendChild(favoritoBtn);
              $("#livro-revistas").turn({ width: 600, height: 400, autoCenter: true });
            });
        } else {
          const favoritoBtn = document.createElement('button');
          favoritoBtn.textContent = "❤️ Favorito";
          favoritoBtn.addEventListener('click', () => {
            const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
            if (!favoritos.includes(String(id))) {
              favoritos.push(String(id));
              localStorage.setItem('favoritos', JSON.stringify(favoritos));
              alert("Livro adicionado aos favoritos!");
            } else {
              alert("Já está nos favoritos!");
            }
          });
          container.innerHTML = `
            <h1>${livro.titulo}</h1>
            <h3>Autor: ${livro.autor}</h3>
            <p>${livro.descricao}</p>
            <div style="white-space: pre-line">${livro.texto}</div>
          `;
          container.appendChild(favoritoBtn);
        }
      }
    });
}

// Página de favoritos
if (window.location.pathname.endsWith('favoritos.html')) {
  const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  fetch('./data/books.json')
    .then(res => res.json())
    .then(data => {
      const locais = JSON.parse(localStorage.getItem('meusLivros')) || [];
      const todos = [...data, ...locais];
      const favoritosData = todos.filter(b => favoritos.includes(String(b.id)));
      exibirLivros(favoritosData);
    });
}

// Página de edição
if (window.location.pathname.endsWith('editar.html')) {
  const form = document.getElementById('livro-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const titulo = document.getElementById('livro-titulo').value.trim();
    const autor = document.getElementById('livro-autor').value.trim();
    const capa = document.getElementById('livro-capa').value.trim() || 'assets/imagens/capa.png';
    const texto = document.getElementById('livro-texto').value.trim();

    if (!titulo || !autor || !texto) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const id = Date.now();
    const livro = {
      id,
      titulo,
      autor,
      capa,
      descricao: "Livro adicionado pelo usuário",
      caminho: "",
      texto
    };
    const favoritos = JSON.parse(localStorage.getItem('meusLivros')) || [];
    favoritos.push(livro);
    localStorage.setItem('meusLivros', JSON.stringify(favoritos));
    alert('Livro salvo com sucesso!');
    window.location.href = 'index.html';
  });
}
