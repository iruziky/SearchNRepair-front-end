export function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'card';

  const images = product.images.split(';').filter(Boolean);
  let currentIndex = 0;

  const imageContainer = document.createElement('div');
  imageContainer.className = 'carousel';
  const img = document.createElement('img');
  img.src = images[0];
  imageContainer.appendChild(img);

  if (images.length > 1) {
    const prev = document.createElement('button');
    prev.textContent = '⟨';
    prev.className = 'prev';
    prev.onclick = () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      img.src = images[currentIndex];
    };

    const next = document.createElement('button');
    next.textContent = '⟩';
    next.className = 'next';
    next.onclick = () => {
      currentIndex = (currentIndex + 1) % images.length;
      img.src = images[currentIndex];
    };

    imageContainer.appendChild(prev);
    imageContainer.appendChild(next);
  }

  card.innerHTML = `
    <a href="${product.link}"><h2 class="title">${product.title}</h2></a>
    <div class="desc-container"><div class="desc-text">${product.description}</div></div>
    <p class="price"><strong>Preço:</strong> ${product.price}</p>
    <p class="battery"><strong>Bateria:</strong> ${product.batteryLife}</p>
    <p class="memory"><strong>Memória:</strong> ${product.memory}</p>
  `;
  card.insertBefore(imageContainer, card.firstChild);
  return card;
}