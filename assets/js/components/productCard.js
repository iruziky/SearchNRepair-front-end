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
        <h2>${product.title}</h2>
        <p><strong>Descrição:</strong> ${product.description}</p>
        <p><strong>Preço:</strong> ${product.price}</p>
        <p><strong>Bateria:</strong> ${product.batteryLife}</p>
        <p><strong>Memória:</strong> ${product.memory}</p>
    `;
    card.insertBefore(imageContainer, card.firstChild);
    return card;
}
