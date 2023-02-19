var prodPrice = [];

prodPrice.push(2.3, 5.2, 3.78, 4.18, 0);

console.log("Produtos escolhidos: " + prodPrice);

var soma = prodPrice.reduce((total, quantidade) => total + quantidade);

console.log("Total de compras: R$" + soma);

var pagamento;
pagamento = 20.0;

console.log("Você pagou: R$" + pagamento);

var troco;

troco = pagamento - soma;

console.log("Seu troco é: R$" + troco);
