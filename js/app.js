let valorTotal = 0;
limpar()

function adicionar(){
    const produtoRequerido = document.querySelector(".produto-input").value;
    const nomeProduto = produtoRequerido.split('-')[0];
    const valorProduto = produtoRequerido.split('R$')[1];
    const quantidadeRequerida = document.querySelector(".quantidade-input").value;
    
    const subValorProduto = quantidadeRequerida * valorProduto;
    const informacaoCarinho = document.getElementById("lista-produtos");
    
    informacaoCarinho.innerHTML = informacaoCarinho.innerHTML + `<section class="carrinho__produtos__produto"> <span class="texto-azul">${quantidadeRequerida} x </span> ${nomeProduto} <span class="texto-azul"> ${subValorProduto}</span></section>`;

    valorTotal = valorTotal + subValorProduto;

    const total = document.getElementById("valor-total");
    total.innerHTML = `<span class="texto-azul" id="valor-total"> R$${valorTotal}</span>`;
    document.querySelector(".quantidade-input").value = "";
}

function limpar(){
    valorTotal = 0;
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").innerHTML = "";
}