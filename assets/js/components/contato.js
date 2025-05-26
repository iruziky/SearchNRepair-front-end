export function createContatoSection() {
    const section = document.createElement('section');
    section.id = 'contato';
    section.className = 'secao';
    section.innerHTML = `
        <h2>Contato</h2>
        <ul>
            <li><strong>Email:</strong> <a href="mailto:iruziky@gmail.com">iruziky@gmail.com</a></li>
            <li><strong>WhatsApp:</strong> <a href="https://wa.me/5584999946962" target="_blank">(84) 9 9994-6962</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/iruziky/" target="_blank">/iruziky</a></li>
        </ul>
    `;
    return section;
}
