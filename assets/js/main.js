import { createNavbar } from './components/navbar.js';
import { createProductCard } from './components/productCard.js';

document.getElementById('navbar').appendChild(createNavbar());

fetch('https://olx-back-end.onrender.com/smartphones/listAll')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('product-container');
        data.forEach(product => {
            if(product.is_break === true){
                container.appendChild(createProductCard(product));
            }
        });
    })
    .catch(error => console.error('Erro ao carregar dados:', error));
