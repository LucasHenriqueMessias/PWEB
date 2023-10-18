class Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo) {
        this.nomeCorrentista = nomeCorrentista;
        this.banco = banco;
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }
}

class Corrente extends Conta {
    constructor(saldoEspecial) {
        this.saldoEspecial = saldoEspecial;
    }

    get saldoEspecial() {
        return this.saldoEspecial;
    }

    set saldoEspecial(saldoEspecial) {
        this.saldoEspecial = saldoEspecial;
    }
}

class Poupanca extends Conta {
    constructor(juros, dataVencimento) {
        this.juros = juros;
        this.dataVencimento = dataVencimento;
    }

    get juros() {
        return this.juros;
    }

    set juros(juros) {
        this.juros = juros;
    }

    get dataVencimento() {
        return this.dataVencimento;
    }

    set dataVencimento(dataVencimento) {
        this.dataVencimento = dataVencimento;
    }
}


objCorrente = new Conta();
objCorrente.nomeCorrentista = "José da Silva";
objCorrente.banco = "Banco do Brasil";
objCorrente.numeroConta = "1234-5";
objCorrente.saldo = 1000;
objCorrente.saldoEspecial = 500;

objPoupanca = new Conta();
objPoupanca.nomeCorrentista = "Maria da Silva";
objPoupanca.banco = "Santander";
objPoupanca.numeroConta = "1234-6";
objPoupanca.saldo = 1500;
objPoupanca.juros = 0.5;

alert("(Correntista) Nome Correntista: " + objCorrente.nomeCorrentista + " Banco: " + objCorrente.banco + " Numero da Conta: " + objCorrente.numeroConta + " saldo: " + objCorrente.saldo + " saldo Especial: " + objCorrente.saldoEspecial);
alert("(Poupanca) Nome Correntista: " + objPoupanca.nomeCorrentista + " Banco: " + objPoupanca.banco + " Numero da Conta: " + objPoupanca.numeroConta + " Saldo: " + objPoupanca.saldo + " Juros: " + objPoupanca.juros)