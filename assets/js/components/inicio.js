export function createInicioSection() {
    const section = document.createElement('section');
    section.id = 'inicio';
    section.className = 'secao';
    section.innerHTML = `
        <h1>Encontre celulares para consertar com facilidade</h1>
        <p>Automatizamos a busca por celulares com defeito nos principais marketplaces, para que técnicos em informática economizem tempo e nunca fiquem sem serviço.</p>
        <button onclick="document.getElementById('product-container').scrollIntoView({behavior: 'smooth'})">
            Buscar celulares
        </button>
        <!-- Substitua por uma imagem ilustrativa de automação ou técnico -->
    `;
    return section;
}
