import { createNavbar } from './components/navbar.js';
import { createProductCard } from './components/productCard.js';
import { createInicioSection } from './components/inicio.js';
import { createSobreSection } from './components/sobre.js';
import { createContatoSection } from './components/contato.js';

const navbarContainer = document.getElementById('navbar');
navbarContainer.appendChild(createNavbar());

const inicio = createInicioSection();
const sobre = createSobreSection();
const contato = createContatoSection();
const produtos = document.getElementById('product-container');

const app = document.createElement('div');
app.id = 'app';
document.body.insertBefore(app, produtos);

app.appendChild(inicio);
app.appendChild(sobre);
app.appendChild(contato);

const produtosSection = document.createElement('section');
produtosSection.id = 'produtos';
produtosSection.className = 'secao';
produtos.parentNode.insertBefore(produtosSection, produtos);
produtosSection.appendChild(produtos);

function showSection(sectionId) {
    const sections = document.querySelectorAll('.secao');
    sections.forEach(sec => sec.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

showSection('inicio');

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('data-section');
        showSection(target);
    });
});

fetch('https://olx-back-end.onrender.com/smartphones/listAll')
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            if (product.break === true) {
                produtos.appendChild(createProductCard(product));
            }
        });
    })
    .catch(error => console.error('Erro ao carregar dados:', error));
