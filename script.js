console.log('script carregado')

const limpa_botoes = () => {
  document.getElementById("success").style.display = 'none';
  document.getElementById("error").style.display = 'none';
}

const validacao = () => {
  limpa_botoes();
  console.log("função de validar rodando");
  my_cpf = document.getElementById("cpf_digitado").value;
  if (validaCPF(my_cpf)) {
    document.getElementById("success").style.display = 'block';
  } else {
    document.getElementById("error").style.display = 'block';
  }
}

const validaCPF = (cpf) => {
  if (cpf.length != 11) return false

  let numbers = cpf.substring(0, 9);
  let digits = cpf.substring(9);

  // verifica o primeiro digito
  let soma = 0;
  for ( let i = 10; i > 1 ; i--) {
    soma += numbers.charAt(10 - i) * i;
  }
  let digit_1 = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (digit_1 != digits.charAt(0)) return false

  // verifica o segundo digito
  soma = 0;
  numbers = cpf.substring(0, 10);
  for ( let k = 11; k > 1 ; k--) {
    soma += numbers.charAt(11 - k) * k;
  }
  let digit_2 = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (digit_2 != digits.charAt(1)) return false

  return true
}

