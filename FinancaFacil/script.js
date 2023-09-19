function calculateTotal() {
    const itemQuantity = parseFloat(document.getElementById('itemQuantity').value);
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);

    const totalValue = itemQuantity * itemPrice;
    document.getElementById('total').innerText = `Total em Estoque: R$ ${totalValue.toFixed(2)}`;
}

function calculateSale() {
    const itemQuantity = parseFloat(document.getElementById('itemQuantity').value);
    const quantityToSell = parseFloat(document.getElementById('quantityToSell').value);

    if (quantityToSell > itemQuantity) {
        alert('A quantidade a ser vendida não pode ser maior que a quantidade em estoque.');
        return;
    }

    const newTotalValue = (itemQuantity - quantityToSell) * parseFloat(document.getElementById('itemPrice').value);
    document.getElementById('newTotal').innerText = `Novo Total em Estoque: R$ ${newTotalValue.toFixed(2)}`;
}
