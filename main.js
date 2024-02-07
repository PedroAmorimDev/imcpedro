function soma() {
  const valormassa = document.getElementById("valormassa");
  const valoraltura = document.getElementById("valoraltura");

  const numeromassa = Number(valormassa.value);
  const numeroaltura = Number(valoraltura.value);

  const resultado = numeromassa / (numeroaltura * numeroaltura);

  if(!numeromassa || !numeroaltura){
    document.getElementById("resultado").innerText = "Preencha"
  } else{let resultadoverbalimc = ""

  if (resultado < 16.9) {
    resultadoverbalimc = "e você está muito abaixo do peso";
  } else if (resultado >= 17 && resultado <= 18.4) {
    resultadoverbalimc = "e você está abaixo do peso";
  } else if (resultado >= 18.5 && resultado <= 24.9) {
    resultadoverbalimc = "e você está peso normal";
  } else if (resultado >= 25 && resultado <= 29.9) {
    resultadoverbalimc = "e você está acima do peso";
  } else if (resultado >= 30 && resultado <= 34.9) {
    resultadoverbalimc = "Obesidade grau I";
  } else if (resultado >= 35 && resultado <= 40) {
    resultadoverbalimc = "Obesidade grau II";
  } else if (resultado > 40) {
    resultadoverbalimc = "Obesidade grau III";
  }

  document.getElementById("resultado").innerText =
    "O resultado é " + resultado.toFixed(2) +` ${resultadoverbalimc}`;
}}

  
