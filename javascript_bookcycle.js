const caminhoCapas = "assets/capas/";

const livrosOriginais = [
  { id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis", precoOriginal: 16.45, estado: "bom", genero: "ficcao", descricao: "Clássico da literatura brasileira", estoque: 3, temDesconto: false, capa: "capa_dom_casmurro.jpg" },
  { id: 2, titulo: "O Alquimista", autor: "Paulo Coelho", precoOriginal: 15.60, estado: "novo", genero: "filosofia", descricao: "Sobre sonhos e realizações", estoque: 5, temDesconto: false, capa: "capa_alquimista.jpg" },
  { id: 3, titulo: "1984", autor: "George Orwell", precoOriginal: 12.00, estado: "bom", genero: "ficcao", descricao: "Distopia clássica", estoque: 2, temDesconto: false, capa: "capa_1984.jpg" },
  { id: 4, titulo: "O Pequeno Príncipe", autor: "Saint-Exupéry", precoOriginal: 5.50, estado: "novo", genero: "filosofia", descricao: "Livro infantil filosófico", estoque: 4, temDesconto: false, capa: "capa_pequeno_principe.jpg" },
  { id: 5, titulo: "A Revolução dos Bichos", autor: "George Orwell", precoOriginal: 10.50, estado: "regular", genero: "ficcao", descricao: "Crítica social", estoque: 1, temDesconto: false, capa: "capa_revolucao_bichos.jpg" },
  { id: 6, titulo: "Cem Anos de Solidão", autor: "Gabriel García Márquez", precoOriginal: 23.00, estado: "bom", genero: "romance", descricao: "Realismo mágico", estoque: 3, temDesconto: false, capa: "capa_cem_anos.jpg" },
  { id: 7, titulo: "Poemas de um ciclo sem fim", autor: "Yehyehzados", precoOriginal: 13.45, estado: "bom", genero: "poesia", descricao: "Coletânea poética", estoque: 2, temDesconto: false, capa: "capa_poemas.jpg" },
  { id: 8, titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", precoOriginal: 18.40, estado: "novo", genero: "aventura", descricao: "Início da saga mágica", estoque: 10, temDesconto: true, capa: "capa_harry_potter.jpg" },
  { id: 9, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", precoOriginal: 24.50, estado: "bom", genero: "aventura", descricao: "Épico de fantasia", estoque: 5, temDesconto: true, capa: "capa_senhor_aneis.jpg" },
  { id: 10, titulo: "Orgulho e Preconceito", autor: "Jane Austen", precoOriginal: 15.00, estado: "bom", genero: "romance", descricao: "Clássico do romance", estoque: 4, temDesconto: true, capa: "capa_orgulho_preconceito.jpg" },
  { id: 11, titulo: "O Hobbit", autor: "J.R.R. Tolkien", precoOriginal: 14.70, estado: "novo", genero: "aventura", descricao: "Aventura pré-Senhor dos Anéis", estoque: 6, temDesconto: true, capa: "capa_hobbit.jpg" },
  { id: 12, titulo: "A Menina que Roubava Livros", autor: "Markus Zusak", precoOriginal: 9.90, estado: "bom", genero: "drama", descricao: "História na Segunda Guerra", estoque: 3, temDesconto: true, capa: "capa_menina_roubava.jpg" },
  { id: 13, titulo: "O Código Da Vinci", autor: "Dan Brown", precoOriginal: 13.30, estado: "bom", genero: "suspense", descricao: "Thriller envolvente", estoque: 4, temDesconto: true, capa: "capa_codigo_davinci.jpg" },
  { id: 14, titulo: "It - A Coisa", autor: "Stephen King", precoOriginal: 21.90, estado: "regular", genero: "terror", descricao: "Terror clássico", estoque: 2, temDesconto: true, capa: "capa_it.jpg" },
  { id: 15, titulo: "O Sol é para Todos", autor: "Harper Lee", precoOriginal: 19.60, estado: "bom", genero: "drama", descricao: "Justiça e preconceito", estoque: 3, temDesconto: true, capa: "capa_sol_para_todos.jpg" },
  { id: 16, titulo: "A Sutil Arte de Ligar o F*da-se", autor: "Mark Manson", precoOriginal: 15.99, estado: "novo", genero: "filosofia", descricao: "Autoajuda moderna", estoque: 8, temDesconto: true, capa: "capa_sutil_arte.jpg" },
  { id: 17, titulo: "O Poder do Hábito", autor: "Charles Duhigg", precoOriginal: 20.00, estado: "novo", genero: "filosofia", descricao: "Transforme sua vida", estoque: 7, temDesconto: true, capa: "capa_poder_habito.jpg" },
  { id: 18, titulo: "Rápido e Devagar", autor: "Daniel Kahneman", precoOriginal: 30.00, estado: "bom", genero: "filosofia", descricao: "Duas formas de pensar", estoque: 3, temDesconto: true, capa: "capa_rapido_devagar.jpg" },
  { id: 19, titulo: "Flores para Algernon", autor: "Daniel Keyes", precoOriginal: 24.00, estado: "bom", genero: "ficcao", descricao: "Ficção científica emocionante", estoque: 4, temDesconto: true, capa: "capa_flores_algernon.jpg" },
  { id: 20, titulo: "O Grande Gatsby", autor: "F. Scott Fitzgerald", precoOriginal: 17.40, estado: "bom", genero: "romance", descricao: "O sonho americano", estoque: 5, temDesconto: true, capa: "capa_grande_gatsby.jpg" },
  { id: 21, titulo: "O Lobo da Estepe", autor: "Hermann Hesse", precoOriginal: 23.25, estado: "regular", genero: "filosofia", descricao: "Clássico existencialista", estoque: 2, temDesconto: true, capa: "capa_lobo_estepe.jpg" },
  { id: 22, titulo: "Misto Quente", autor: "Charles Bukowski", precoOriginal: 17.40, estado: "regular", genero: "drama", descricao: "Vida marginal", estoque: 3, temDesconto: true, capa: "capa_misto_quente.jpg" },
  { id: 23, titulo: "Ensaio sobre a Cegueira", autor: "José Saramago", precoOriginal: 22.30, estado: "bom", genero: "ficcao", descricao: "Distopia premiada", estoque: 4, temDesconto: true, capa: "capa_ensaio_cegueira.jpg" },
  { id: 24, titulo: "O Nome da Rosa", autor: "Umberto Eco", precoOriginal: 20.00, estado: "bom", genero: "suspense", descricao: "Mistério medieval", estoque: 3, temDesconto: true, capa: "capa_nome_rosa.jpg" },
  { id: 25, titulo: "O Morro dos Ventos Uivantes", autor: "Emily Brontë", precoOriginal: 22.20, estado: "bom", genero: "romance", descricao: "Paixão e vingança", estoque: 4, temDesconto: true, capa: "capa_morro_ventos.jpg" },
  { id: 26, titulo: "Os Miseráveis", autor: "Victor Hugo", precoOriginal: 48.61, estado: "regular", genero: "drama", descricao: "Clássico francês", estoque: 2, temDesconto: true, capa: "capa_miseraveis.jpg" },
  { id: 27, titulo: "Crime e Castigo", autor: "Fiódor Dostoiévski", precoOriginal: 15.00, estado: "bom", genero: "drama", descricao: "Psicologia russa", estoque: 3, temDesconto: true, capa: "capa_crime_castigo.jpg" },
  { id: 28, titulo: "A Metamorfose", autor: "Franz Kafka", precoOriginal: 16.78, estado: "novo", genero: "ficcao", descricao: "Clássico surrealista", estoque: 5, temDesconto: true, capa: "capa_metamorfose.jpg" },
  { id: 29, titulo: "O Estrangeiro", autor: "Albert Camus", precoOriginal: 19.88, estado: "bom", genero: "filosofia", descricao: "Existencialismo", estoque: 4, temDesconto: true, capa: "capa_estrangeiro.jpg" },
  { id: 30, titulo: "Admirável Mundo Novo", autor: "Aldous Huxley", precoOriginal: 25.50, estado: "bom", genero: "ficcao", descricao: "Distopia futurista", estoque: 4, temDesconto: true, capa: "capa_admiravel_mundo.jpg" },
  { id: 31, titulo: "Fahrenheit 451", autor: "Ray Bradbury", precoOriginal: 18.40, estado: "bom", genero: "ficcao", descricao: "Queima de livros", estoque: 5, temDesconto: true, capa: "capa_fahrenheit.jpg" },
  { id: 32, titulo: "O Conto da Aia", autor: "Margaret Atwood", precoOriginal: 14.20, estado: "bom", genero: "ficcao", descricao: "Distopia feminista", estoque: 3, temDesconto: true, capa: "capa_conto_aia.jpg" },
  { id: 33, titulo: "Neuromancer", autor: "William Gibson", precoOriginal: 23.22, estado: "regular", genero: "ficcao", descricao: "Cyberpunk clássico", estoque: 2, temDesconto: true, capa: "capa_neuromancer.jpg" },
  { id: 34, titulo: "Fundação", autor: "Isaac Asimov", precoOriginal: 20.60, estado: "bom", genero: "ficcao", descricao: "Épico de ficção científica", estoque: 3, temDesconto: true, capa: "capa_fundacao.jpg" },
  { id: 35, titulo: "Duna", autor: "Frank Herbert", precoOriginal: 25.15, estado: "bom", genero: "aventura", descricao: "Clássico da ficção científica", estoque: 4, temDesconto: true, capa: "capa_duna.jpg" },
  { id: 36, titulo: "O Guia do Mochileiro das Galáxias", autor: "Douglas Adams", precoOriginal: 32.40, estado: "novo", genero: "aventura", descricao: "Comédia cósmica", estoque: 6, temDesconto: true, capa: "capa_guia_mochileiro.jpg" },
  { id: 37, titulo: "Coraline", autor: "Neil Gaiman", precoOriginal: 17.90, estado: "bom", genero: "terror", descricao: "Mistério e fantasia sombria", estoque: 5, temDesconto: true, capa: "capa_coraline.jpg" }
];

const sebos = [
  { id: 1, nome: "Sebo Arcádia", endereco: "Rua Augusta, 1234", distancia: "5km", avaliacao: 4.8, imagem: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&h=200&fit=crop", telefone: "(11) 98765-4321", horario: "9h-18h" },
  { id: 2, nome: "TrocaTela", endereco: "Av. Paulista, 1578", distancia: "2km", avaliacao: 4.6, imagem: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=200&fit=crop", telefone: "(11) 91234-5678", horario: "10h-20h" },
  { id: 3, nome: "Livros & Cia", endereco: "Rua dos Pinheiros, 890", distancia: "3.5km", avaliacao: 4.9, imagem: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=200&fit=crop", telefone: "(11) 99876-5432", horario: "8h-19h" }
];

let reservas = JSON.parse(localStorage.getItem("bookcycle_reservas")) || [];
let favoritos = JSON.parse(localStorage.getItem("bookcycle_favoritos")) || [];
let itensPorPagina = 12;
let paginaAtual = 1;
let livrosFiltrados = [...livrosOriginais];
let filtroEstado = "todos";
let filtroGenero = "todos";
let filtroPreco = null;
let filtroPromo = "todos";
let buscaTermo = "";
let timersAtivos = {};

function salvarFavoritos() {
  localStorage.setItem("bookcycle_favoritos", JSON.stringify(favoritos));
}

function salvarReservas() {
  localStorage.setItem("bookcycle_reservas", JSON.stringify(reservas));
}

function escaparHtml(texto) {
  return String(texto).replace(/[&<>"']/g, (caractere) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  }[caractere]));
}

function getPrecoFinal(livro) {
  return livro.temDesconto ? livro.precoOriginal / 2 : livro.precoOriginal;
}

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function isFavorito(id) {
  return favoritos.includes(id);
}

function atualizarContadorFavoritos() {
  document.querySelectorAll("#favoritos-count, #menu-favoritos-count").forEach((contador) => {
    contador.textContent = favoritos.length;
  });
}

function getBookCoverHtml(livro) {
  const caminhoCompleto = `${caminhoCapas}${livro.capa}`;
  const titulo = escaparHtml(livro.titulo);

  return `
    <img
      src="${caminhoCompleto}"
      alt="Capa de ${titulo}"
      class="book-cover"
      data-title="${titulo}"
    >
  `;
}

function formatarTempoRestante(tempoRestante) {
  if (tempoRestante <= 0) return "Tempo esgotado";

  const horas = Math.floor(tempoRestante / 3600);
  const minutos = Math.floor((tempoRestante % 3600) / 60);
  const segundos = tempoRestante % 60;

  return `${horas.toString().padStart(2, "0")}:${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
}

function criarCardLivro(livro, opcoes = {}) {
  const precoFinal = getPrecoFinal(livro);
  const favoritado = isFavorito(livro.id);
  const tituloSeguro = escaparHtml(livro.titulo);

  return `
    <article class="book-card">
      <button class="favorite-btn ${favoritado ? "favorited" : ""}" type="button" aria-label="Favoritar ${tituloSeguro}" data-favorito-id="${livro.id}">
        ${favoritado ? "♥" : "♡"}
      </button>
      ${getBookCoverHtml(livro)}
      <h2 class="book-title">${tituloSeguro}</h2>
      <p class="book-author">${escaparHtml(livro.autor)}</p>
      <p class="book-price">
        ${livro.temDesconto ? `<span class="original-price">${formatarPreco(livro.precoOriginal)}</span>` : ""}
        ${formatarPreco(precoFinal)}
        ${livro.temDesconto ? '<span class="discount-badge">-50% OFF</span>' : ""}
      </p>
      <p class="book-author">${escaparHtml(livro.descricao)}</p>
      <span class="badge">${escaparHtml(livro.genero)}</span>
      <span class="badge">${escaparHtml(livro.estado)}</span>
      ${opcoes.mostrarEstoque ? `<span class="badge">${livro.estoque} disponíveis</span>` : ""}
      ${opcoes.mostrarReserva ? `<button class="chip reserve-button" type="button" data-reservar-id="${livro.id}">Reservar por 24h</button>` : ""}
    </article>
  `;
}

function renderizarRecomendados() {
  const container = document.getElementById("recomendados-lista");
  if (!container) return;

  container.innerHTML = livrosOriginais.slice(0, 4).map((livro) => criarCardLivro(livro)).join("");
}

function renderizarFavoritos() {
  const container = document.getElementById("favoritos-lista");
  if (!container) return;

  const livrosFavoritos = livrosOriginais.filter((livro) => favoritos.includes(livro.id));

  container.innerHTML = livrosFavoritos.length
    ? livrosFavoritos.map((livro) => criarCardLivro(livro, { mostrarReserva: true })).join("")
    : '<article class="book-card">Nenhum livro favoritado ainda. Explore o catálogo e favorite seus livros.</article>';

  atualizarContadorFavoritos();
}

function renderizarSebos() {
  const sebosHtml = sebos.map((sebo) => `
    <article class="sebo-card">
      <img src="${sebo.imagem}" alt="${escaparHtml(sebo.nome)}" class="sebo-image">
      <div class="sebo-info">
        <h2 class="book-title">${escaparHtml(sebo.nome)}</h2>
        <p class="book-author">${escaparHtml(sebo.endereco)}</p>
        <p class="book-author">${sebo.avaliacao} estrelas · ${escaparHtml(sebo.distancia)}</p>
        <p class="book-price">${escaparHtml(sebo.horario)}</p>
        <span class="badge">${escaparHtml(sebo.telefone)}</span>
      </div>
    </article>
  `).join("");

  const container = document.getElementById("sebos-lista");
  const destaque = document.getElementById("sebos-destaque");

  if (container) container.innerHTML = sebosHtml;
  if (destaque) destaque.innerHTML = sebosHtml;
}

function aplicarFiltros() {
  let filtrados = [...livrosOriginais];

  if (filtroEstado !== "todos") filtrados = filtrados.filter((livro) => livro.estado === filtroEstado);
  if (filtroGenero !== "todos") filtrados = filtrados.filter((livro) => livro.genero === filtroGenero);

  if (filtroPreco) {
    filtrados = filtrados.filter((livro) => {
      const preco = getPrecoFinal(livro);
      if (filtroPreco === "ate30") return preco <= 30;
      if (filtroPreco === "30a50") return preco > 30 && preco <= 50;
      if (filtroPreco === "50a80") return preco > 50 && preco <= 80;
      if (filtroPreco === "acima80") return preco > 80;
      return true;
    });
  }

  if (filtroPromo !== "todos") {
    filtrados = filtrados.filter((livro) => filtroPromo === "comdesconto" ? livro.temDesconto : !livro.temDesconto);
  }

  if (buscaTermo) {
    const termo = buscaTermo.toLowerCase();
    filtrados = filtrados.filter((livro) => (
      livro.titulo.toLowerCase().includes(termo) ||
      livro.autor.toLowerCase().includes(termo)
    ));
  }

  livrosFiltrados = filtrados;
  paginaAtual = 1;
  renderizarLivros();
}

function renderizarLivros() {
  const container = document.getElementById("livros-lista");
  if (!container) return;

  const fim = paginaAtual * itensPorPagina;
  const livrosExibir = livrosFiltrados.slice(0, fim);

  container.innerHTML = livrosExibir.length
    ? livrosExibir.map((livro) => criarCardLivro(livro, { mostrarEstoque: true, mostrarReserva: true })).join("")
    : '<article class="book-card">Nenhum livro encontrado.</article>';

  const btn = document.getElementById("loadMoreBtn");
  if (btn) btn.style.display = livrosFiltrados.length > fim ? "block" : "none";
}

function renderizarReservas() {
  const container = document.getElementById("reservas-lista");
  if (!container) return;

  const agora = Date.now();
  reservas = reservas.filter((reserva) => reserva.dataExpiracao > agora);
  salvarReservas();

  if (reservas.length === 0) {
    container.innerHTML = '<article class="book-card">Nenhuma reserva ativa.</article>';
    return;
  }

  container.innerHTML = reservas.map((reserva) => `
    <article class="book-card">
      <h2 class="book-title">${escaparHtml(reserva.titulo)}</h2>
      <p class="book-author">Reservado em: ${escaparHtml(reserva.data)}</p>
      <p class="book-price">Valor: ${formatarPreco(reserva.precoFinal)}</p>
      <div id="timer-${reserva.id}"></div>
      <button class="chip danger-button reserve-button" type="button" data-cancelar-id="${reserva.id}">Cancelar reserva</button>
    </article>
  `).join("");

  reservas.forEach((reserva) => iniciarTimer(reserva.id, reserva.dataExpiracao));
}

function iniciarTimer(reservaId, dataExpiracao) {
  if (timersAtivos[reservaId]) clearInterval(timersAtivos[reservaId]);

  const atualizarTimer = () => {
    const reserva = reservas.find((item) => item.id === reservaId);
    const timerElement = document.getElementById(`timer-${reservaId}`);
    if (!reserva || !timerElement) return;

    const tempoRestante = Math.max(0, Math.floor((dataExpiracao - Date.now()) / 1000));
    reserva.tempoRestante = tempoRestante;

    if (tempoRestante <= 0) {
      timerElement.innerHTML = '<div class="timer-expired">Tempo esgotado. Reserva cancelada.</div>';
      clearInterval(timersAtivos[reservaId]);
      delete timersAtivos[reservaId];
      cancelarReserva(reservaId, true);
      return;
    }

    timerElement.innerHTML = `
      <div class="timer-container">
        <span class="timer-label">Tempo para finalizar compra:</span>
        <span class="timer-display">${formatarTempoRestante(tempoRestante)}</span>
      </div>
      <button class="buy-button" type="button" data-finalizar-id="${reservaId}">Finalizar compra</button>
    `;
  };

  atualizarTimer();
  timersAtivos[reservaId] = setInterval(atualizarTimer, 1000);
}

function reservarLivro(id) {
  const livro = livrosOriginais.find((item) => item.id === id);
  if (!livro || livro.estoque <= 0) {
    alert("Livro indisponível.");
    return;
  }

  const dataExpiracao = Date.now() + (24 * 60 * 60 * 1000);
  const novaReserva = {
    id: Date.now(),
    livroId: livro.id,
    titulo: livro.titulo,
    data: new Date().toLocaleString("pt-BR"),
    dataExpiracao,
    tempoRestante: 24 * 60 * 60,
    status: "pendente",
    precoFinal: getPrecoFinal(livro)
  };

  livro.estoque -= 1;
  reservas.push(novaReserva);
  salvarReservas();
  alert(`Livro "${livro.titulo}" reservado com sucesso. Você tem 24 horas para finalizar a compra.`);
  renderizarLivros();
  renderizarReservas();
}

function finalizarCompra(reservaId) {
  const reserva = reservas.find((item) => item.id === reservaId);
  if (!reserva) {
    alert("Reserva não encontrada.");
    return;
  }

  if (reserva.dataExpiracao <= Date.now()) {
    alert("O tempo para compra expirou. A reserva foi cancelada.");
    cancelarReserva(reservaId, true);
    return;
  }

  alert(`Compra finalizada com sucesso!\n\nLivro: ${reserva.titulo}\nValor: ${formatarPreco(reserva.precoFinal)}\n\nO livro será enviado para o seu endereço em até 5 dias úteis.`);
  reservas = reservas.filter((item) => item.id !== reservaId);
  clearInterval(timersAtivos[reservaId]);
  delete timersAtivos[reservaId];
  salvarReservas();
  renderizarReservas();
  renderizarLivros();
}

function cancelarReserva(reservaId, autoExpirou = false) {
  const reserva = reservas.find((item) => item.id === reservaId);
  if (reserva) {
    const livro = livrosOriginais.find((item) => item.id === reserva.livroId);
    if (livro) livro.estoque += 1;
  }

  reservas = reservas.filter((item) => item.id !== reservaId);
  clearInterval(timersAtivos[reservaId]);
  delete timersAtivos[reservaId];
  salvarReservas();
  renderizarReservas();
  renderizarLivros();

  if (!autoExpirou) alert("Reserva cancelada.");
}

function toggleFavorito(id) {
  if (favoritos.includes(id)) {
    favoritos = favoritos.filter((favoritoId) => favoritoId !== id);
  } else {
    favoritos.push(id);
  }

  salvarFavoritos();
  renderizarRecomendados();
  renderizarLivros();
  renderizarFavoritos();
  atualizarContadorFavoritos();
}

function mostrarPagina(pageId) {
  const destino = document.getElementById(pageId) ? pageId : "inicio";

  document.querySelectorAll(".page").forEach((page) => {
    page.classList.toggle("active-page", page.id === destino);
  });

  document.querySelectorAll(".nav-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.page === destino);
  });

  if (destino === "favoritos") renderizarFavoritos();
  if (destino === "reservas") renderizarReservas();

  window.location.hash = destino;
}

function configurarEventos() {
  document.querySelectorAll(".nav-tab").forEach((tab) => {
    tab.addEventListener("click", (event) => {
      event.preventDefault();
      mostrarPagina(tab.dataset.page);
    });
  });

  document.querySelectorAll(".filter-chip[data-filtro='estado']").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".filter-chip[data-filtro='estado']").forEach((item) => item.classList.remove("active"));
      chip.classList.add("active");
      filtroEstado = chip.dataset.valor;
      aplicarFiltros();
    });
  });

  document.querySelectorAll(".filter-chip[data-filtro='genero']").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".filter-chip[data-filtro='genero']").forEach((item) => item.classList.remove("active"));
      chip.classList.add("active");
      filtroGenero = chip.dataset.valor;
      aplicarFiltros();
    });
  });

  document.querySelectorAll(".filter-price").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".filter-price").forEach((item) => item.classList.remove("active"));
      chip.classList.add("active");
      filtroPreco = chip.dataset.preco;
      aplicarFiltros();
    });
  });

  document.querySelectorAll(".filter-promo").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".filter-promo").forEach((item) => item.classList.remove("active"));
      chip.classList.add("active");
      filtroPromo = chip.dataset.promo;
      aplicarFiltros();
    });
  });

  document.getElementById("searchInput").addEventListener("input", (event) => {
    buscaTermo = event.target.value;
    aplicarFiltros();
  });

  document.getElementById("searchForm").addEventListener("submit", (event) => {
    event.preventDefault();
    buscaTermo = document.getElementById("searchInput").value;
    aplicarFiltros();
    mostrarPagina("livros");
  });

  document.getElementById("loadMoreBtn").addEventListener("click", () => {
    paginaAtual += 1;
    renderizarLivros();
  });

  document.addEventListener("click", (event) => {
    const favoritoBtn = event.target.closest("[data-favorito-id]");
    const reservarBtn = event.target.closest("[data-reservar-id]");
    const cancelarBtn = event.target.closest("[data-cancelar-id]");
    const finalizarBtn = event.target.closest("[data-finalizar-id]");

    if (favoritoBtn) toggleFavorito(Number(favoritoBtn.dataset.favoritoId));
    if (reservarBtn) reservarLivro(Number(reservarBtn.dataset.reservarId));
    if (cancelarBtn) cancelarReserva(Number(cancelarBtn.dataset.cancelarId));
    if (finalizarBtn) finalizarCompra(Number(finalizarBtn.dataset.finalizarId));
  });

  document.addEventListener("error", (event) => {
    const imagem = event.target;

    if (imagem.classList.contains("book-cover")) {
      imagem.outerHTML = `
        <div class="book-cover-placeholder">
          <span>Livro</span>
          <strong>${imagem.dataset.title}</strong>
        </div>
      `;
    }

    if (imagem.closest(".logo")) {
      imagem.remove();
    }
  }, true);

  window.addEventListener("hashchange", () => {
    mostrarPagina(window.location.hash.replace("#", "") || "inicio");
  });
}

function inicializar() {
  configurarEventos();
  renderizarRecomendados();
  renderizarSebos();
  aplicarFiltros();
  renderizarReservas();
  renderizarFavoritos();
  atualizarContadorFavoritos();
  mostrarPagina(window.location.hash.replace("#", "") || "inicio");
}

document.addEventListener("DOMContentLoaded", inicializar);
