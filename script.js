function calcularMedia(numeros) {
    if (numeros.length === 0) {
      return 0;
    }
    
    var soma = 0;
    for (var i = 0; i < numeros.length; i++) {
      soma += numeros[i];
    }
    
    return soma / numeros.length;
  }
  
  document.getElementById("calcularBtn").addEventListener("click", function() {
    var numerosInput = document.getElementById("numeros").value;
    var numerosArray = numerosInput.split(",").map(Number);
    var resultado = document.getElementById("resultado");
  
    var media = calcularMedia(numerosArray);
    resultado.textContent = "A média dos números é: " + media.toFixed(2);
  });
  