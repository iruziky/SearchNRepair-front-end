export function createNavbar() {
    const nav = document.createElement('div');
    nav.className = 'navbar';
    nav.innerHTML = `
        <div class="logo">📱SearchNRepair</div>
        <nav class="nav-links">
            <a href="#" data-section="inicio">Início</a>
            <a href="#" data-section="sobre">Sobre</a>
            <a href="#" data-section="produtos">Produtos</a>
            <a href="#" data-section="contato">Contato</a>
        </nav>
    `;
    return nav;
}
