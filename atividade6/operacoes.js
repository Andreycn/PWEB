        var valor1;
        var valor2;
        var soma;
        var subtracao;
        var produto;
        var divisao;
        var resto;


        valor1 = prompt("Informe o valor 1?");
        valor2 = prompt("Informe o valor 2?");

        valor1 = parseFloat(valor1);
        valor2 = parseFloat(valor2);

        soma = (valor1+valor2);
        subtracao = (valor1-valor2);
        produto = (valor1 * valor2);
        divisao = (valor1/valor2);
        resto = (valor1%valor2);

        alert("Soma dos dois: "+ soma);
        alert("A subtracao é: "+ subtracao);
        alert("O produto dos dois: "+ produto);
        alert("A divisão do primeiro: "+ divisao);
        alert("O resto é: "+ resto);
