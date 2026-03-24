let nome = prompt("Digite seu nome:");
let idade = Number(prompt("Digite sua idade:"));
let cadastro = prompt("Possui cadastro? (S/N)").toUpperCase();
let autorizacao = prompt("Possui autorização especial? (S/N)").toUpperCase();
let acompanhado = prompt("Está acompanhado? (S/N)").toUpperCase();

alert("Verificando acesso...");

//  Validação Inicial (NOT)
if (!(cadastro === "S")) {
  alert("Acesso negado: usuário não cadastrado.");
}

//  Condição com AND
else if (cadastro === "S" && idade >= 18) {
  alert("Acesso liberado normalmente.");
}

//  Condição com OR
else if (idade < 18 || autorizacao === "N") {

  //  IF ANINHADO
  if (acompanhado === "S") {
    alert("Entrada permitida com restrição (acompanhado por responsável).");
  } else {
    alert("Acesso negado: menor desacompanhado.");
  }

}

// Caso final
else {
  alert("Acesso liberado.");
}
