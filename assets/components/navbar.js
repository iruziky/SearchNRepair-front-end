export function createNavbar() {
  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.innerHTML = `
    <div class="logo">SearchNRepair</div>
    <div class="nav-links">
      <a href="index.html">Início</a>
      <a href="sobre.html">Sobre</a>
      <a href="produtos.html">Produtos</a>
      <a href="contato.html">Contato</a>
    </div>
  `;
  return nav;
}