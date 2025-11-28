
document.getElementById("botao").onclick = gerarHash

function gerarHash() {
      const texto = document.getElementById("texto").value;
      const hash = md5(texto); // usando a função MD5 da biblioteca
      document.getElementById("resultado").innerText = "MD5: " + hash;
    }