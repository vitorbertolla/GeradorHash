import md5 from 'https://cdn.jsdelivr.net/npm/blueimp-md5@2.19.0/js/md5.min.js';

document.getElementById("botao").onclick = gerarHash

function gerarHash() {
      const texto = document.getElementById("texto").value;
      const hash = md5(texto); // usando a função MD5 da biblioteca
      document.getElementById("resultado").innerText = "MD5: " + hash;
    }