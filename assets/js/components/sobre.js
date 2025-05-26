export function createSobreSection() {
    const section = document.createElement('section');
    section.id = 'sobre';
    section.className = 'secao';
    section.innerHTML = `
        <h2>Sobre o projeto</h2>
        <p>SearchNRepair é uma iniciativa independente criada para economizar horas de busca dos técnicos em informática. Muitos deixam de procurar celulares para conserto por ser algo trabalhoso e demorado. Este sistema resolve isso automaticamente.</p>
        <p>Sou estudante do 5º período do Bacharelado em Tecnologia da Informação (BTI) no IMD/UFRN. Este projeto não é acadêmico — é um empreendimento real com propósito claro: manter técnicos sempre ocupados com novos consertos.</p>
        <p>Utilizamos Inteligência Artificial para identificar celulares com defeito entre os anúncios disponíveis, otimizando ainda mais a triagem dos aparelhos.</p>
        <p><strong>Diferencial:</strong> Enquanto outros sistemas apenas listam produtos, o SearchNRepair atua como um assistente inteligente, sempre alertando você sobre oportunidades de conserto com alto potencial de lucro.</p>
    `;
    return section;
}
