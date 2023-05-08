function changeColor(){
    document.body.style.backgroundColor = "purple";
}

function addItem(){
    const input = document.getElementById("textoDigitado");
    const texto = input.value;

    //Texto vazio não será adicionado
    if (texto != ""){
        const list = document.getElementById("lista");
        const newItem = document.createElement("li");
        newItem.textContent = texto;
        list.appendChild(newItem);
        input.value = "";
    }
}

function mudarImagem(){
    const urlImgLobo1 = "../img/lobo1.jpg";
    const urlImgLobo2 = "../img/lobo2.jpg";
  
    const urlAtual = new URL(imagem.src);
  
    if (urlAtual.pathname.endsWith('lobo1.jpg')) {
      imagem.src = urlImgLobo2;
    } else {
      imagem.src = urlImgLobo1;
    }
}

function mensagem(){
    const mensagem = document.getElementById('mensagem');
    
    mensagem.innerText = 'Você clicou no botão!';
}

function ocultarImagem(){
    const imagem = document.getElementById("imagem");
    const botaoOcultar = document.getElementById("ocultarImg");

    imagem.style.display = "none";
    botaoOcultar.innerText = "Imagem Ocultada";
}