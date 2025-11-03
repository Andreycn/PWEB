class Conta {
  constructor(nomeCorrentista, banco, numeroConta, saldo) {
    this._nomeCorrentista = nomeCorrentista;
    this._banco = banco;
    this._numeroConta = numeroConta;
    this._saldo = saldo;
  }

  get nomeCorrentista() { return this._nomeCorrentista; }
  set nomeCorrentista(nome) { this._nomeCorrentista = nome; }

  get banco() { return this._banco; }
  set banco(banco) { this._banco = banco; }

  get numeroConta() { return this._numeroConta; }
  set numeroConta(numero) { this._numeroConta = numero; }

  get saldo() { return this._saldo; }
  set saldo(valor) { this._saldo = valor; }
}

class Corrente extends Conta {
  constructor(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
    super(nomeCorrentista, banco, numeroConta, saldo);
    this._saldoEspecial = saldoEspecial;
  }

  get saldoEspecial() { return this._saldoEspecial; }
  set saldoEspecial(valor) { this._saldoEspecial = valor; }
}

class Poupanca extends Conta {
  constructor(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
    super(nomeCorrentista, banco, numeroConta, saldo);
    this._juros = juros;
    this._dataVencimento = dataVencimento;
  }

  get juros() { return this._juros; }
  set juros(valor) { this._juros = valor; }

  get dataVencimento() { return this._dataVencimento; }
  set dataVencimento(data) { this._dataVencimento = data; }
}

let contaCorrente = new Corrente("João Silva", "Banco do Brasil", "12345-6", 2000, 500);
let contaPoupanca = new Poupanca("Maria Souza", "Caixa Econômica", "78910-1", 3000, 0.05, "29/11/2025");

alert("=== Conta Corrente ===");
alert("Nome: " + contaCorrente.nomeCorrentista);
alert("Banco: " + contaCorrente.banco);
alert("Número: " + contaCorrente.numeroConta);
alert("Saldo: " + contaCorrente.saldo);
alert("Saldo Especial: " + contaCorrente.saldoEspecial);

alert("\n=== Conta Poupança ===");
alert("Nome: " + contaPoupanca.nomeCorrentista);
alert("Banco: " + contaPoupanca.banco);
alert("Número: " + contaPoupanca.numeroConta);
alert("Saldo: " + contaPoupanca.saldo);
alert("Juros: " + contaPoupanca.juros);
alert("Data de Vencimento: " + contaPoupanca.dataVencimento);
