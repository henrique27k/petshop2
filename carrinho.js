function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.splice(index, 1); // Remove o item do carrinho com base no índice
    localStorage.setItem('cart', JSON.stringify(cart)); // Atualiza o carrinho no localStorage
    displayCart(); // Atualiza a exibição do carrinho
}

// Função para exibir os itens do carrinho
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const cartList = document.getElementById('cart');

    // Limpa o conteúdo atual do carrinho
    cartList.innerHTML = '';

    // Verifica se há itens no carrinho
    if (cart && cart.length > 0) {
        // Loop através de cada item do carrinho e adiciona à lista
        cart.forEach((item, index) => {
            const cartItem = document.createElement('li');

            const itemImage = document.createElement('img');
            itemImage.src = item.image;
            itemImage.alt = item.name;
            cartItem.appendChild(itemImage);

            const itemName = document.createElement('p');
            itemName.textContent = item.name;
            cartItem.appendChild(itemName);

            const itemPrice = document.createElement('p');
            itemPrice.textContent = item.price;
            cartItem.appendChild(itemPrice);

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            // Adiciona um evento de clique para remover o item do carrinho
            removeButton.addEventListener('click', () => removeFromCart(index));
            cartItem.appendChild(removeButton);

            cartList.appendChild(cartItem);
        });
    } else {
        // Se o carrinho estiver vazio, exibe uma mensagem
        cartList.innerHTML = '<div style="text-align: center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"><img src="imagens/carrinhopagina2.jpg" alt="Carrinho vazio" style="width: 106px;"><p style="font-size: 20px;">Carrinho vazio</p></div>';
    }
}

// Chama a função para exibir os itens do carrinho ao carregar a página
window.onload = displayCart;