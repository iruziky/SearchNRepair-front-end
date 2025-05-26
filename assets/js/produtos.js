// js/produtos.js
import { createNavbar } from '../components/navbar.js';
import { createProductCard } from '../components/productCard.js';

document.getElementById('navbar').appendChild(createNavbar());

const container = document.getElementById('product-container');

fetch('https://olx-back-end.onrender.com/smartphones/listAll')
  .then(res => res.json())
  .then(data => {
    data.forEach(product => {
      if (product.break === true) {
        container.appendChild(createProductCard(product));
      }
    });
  })
  .catch(err => console.error('Erro ao buscar produtos:', err));
