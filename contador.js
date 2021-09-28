let readlineSync = require('readline-sync');
var valor;

var valor = readlineSync.question("Digite o valor correspondente a qtd de alunos: ");

for(var i = 0; i <= valor; i++) {
    if(i == 0){
        console.log("o numero "+i + " zero");
    }else if(i%2 == 0){
        console.log("o numero " +i + " é PAR "  );
    }else {
        console.log("o numero " +i + " é ÍMPAR");
    }

}