// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;; 
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLElement;

campoSaldo.innerHTML = String(0)
let saltoTotal:number = 0;

function limpaCampoSoma(){
    soma.value='';
}

function somarAoSaldo(soma:number) {
    saltoTotal += soma;
    campoSaldo.innerHTML = String(saltoTotal);
    limpaCampoSoma();
}

function limparSaldo() {
    saltoTotal = 0;
    campoSaldo.innerHTML = String(saltoTotal);
    limpaCampoSoma();
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */