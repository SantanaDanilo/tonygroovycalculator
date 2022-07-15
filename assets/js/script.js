var btn = document.querySelector(".main__btn");

btn.addEventListener("click", function () {
    var produto = document.querySelector("#produto");
    var valorProduto = produto.value;

    var desconto = document.querySelector("#desconto");
    var valorDesconto = desconto.value;

    var valorPorCento = (100 - desconto.value);

    alert("O valor era de R$" + (((100 * valorProduto) / valorPorCento)).toFixed(2);
})
