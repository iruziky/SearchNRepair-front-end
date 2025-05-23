export function createNavbar() {
    const nav = document.createElement('div');
    nav.className = 'navbar';
    nav.innerHTML = `
        <div class="logo">📱 SearchNRepair</div>
        <nav class="nav-links">
            <a href="#">Início</a>
            <a href="#">Sobre</a>
            <a href="#">Produtos</a>
            <a href="#">Contato</a>
            <a href="#">Dashboard</a>
        </nav>
    `;
    return nav;
}
