let stockData = {
    labels: [],
    datasets: [{
        label: 'Estoque',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    },
    {
        label: 'Saídas',
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }]
};

let stockChart;

function initializeChart() {
    const ctx = document.getElementById('stockChart').getContext('2d');
    stockChart = new Chart(ctx, {
        type: 'line',
        data: stockData,
        options: {
            scales: {
                x: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Data'
                    }
                }],
                y: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Quantidade'
                    }
                }]
            }
        }
    });
}

function updateChart() {
    stockChart.update();
}

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

    const currentDate = new Date().toLocaleDateString();
    stockData.labels.push(currentDate);
    stockData.datasets[0].data.push(itemQuantity);
    stockData.datasets[1].data.push(quantityToSell);

    const newTotalValue = (itemQuantity - quantityToSell) * parseFloat(document.getElementById('itemPrice').value);
    document.getElementById('newTotal').innerText = `Novo Total em Estoque: R$ ${newTotalValue.toFixed(2)}`;

    updateChart();
}

// Chamada para inicializar o gráfico ao carregar a página
initializeChart();
