// //CRIAR OBJETOS
// let usuario1 = {
//     nomeCompleto: "Enio Casper",
//     nomeUsuario: "enio",
//     senhaUsuario: "123456",
//     ccUsuario: "sc"
// }

// let usuario2 = {
//     nomeCompleto: "Danid Silva",
//     nomeUsuario: "danid",
//     senhaUsuario: "123456",
//     ccUsuario: "rj"
// }

// usuario1 = usuario2;

// console.log("Nome do usuário: " + usuario1.nomeCompleto);

// usuario1.nomeCompleto = "Lukas";
// console.log("Nome completo: " + usuario1.nomeCompleto);

// //Criar nova variavel dentro do usuario1
// usuario1["cpf"] = "12345678900";
// console.log("CPF do usuário: " + usuario1.cpf)


//LISTA DE USUÁRIOS
// let listaDeUsuarios = [];
// listaDeUsuarios.push(usuario1, usuario2)

let listaDeUsuarios = [
    {
        nomeCompleto: "Enio Casper",
        nomeUsuario: "enio",
        senhaUsuario: "123456",
        ccUsuario: "sc"
    },
    {
        nomeCompleto: "Danid Silva",
        nomeUsuario: "danid",
        senhaUsuario: "123456",
        ccUsuario: "rj"
    },
    {
        nomeCompleto: "Gerson Lima",
        nomeUsuario: "gege",
        senhaUsuario: "123456",
        ccUsuario: "sp"
    },
    {
        nomeCompleto: "Jorginho Lima",
        nomeUsuario: "jojo",
        senhaUsuario: "123456",
        ccUsuario: "rj"
    },
    {
        nomeCompleto: "Edulado Biolante",
        nomeUsuario: "danid",
        senhaUsuario: "123456",
        ccUsuario: "sp"
    }
];

const msgStatus = document.querySelector("#msg");
const formLogin = document.querySelector("form[name = 'frm01'");

const botaoSubmit = document.querySelector("#btnSubmit");
botaoSubmit.addEventListener("submit", validaFormularioCompleto);

function validaFormularioCompleto(){

    formLogin.OnpreventDefault();

    const inputUser = document.querySelector("#idNm");
    const inputPass = document.querySelector("#idPass");
    const selCentroCusto = document.querySelector("#idCusto");

    //OBJETO USUÁRIO-LOGADO
    const usuarioLogado = {
        nomeUsuarioLogado: inputUser.value, 
        senhaUsuarioLogado: inputPass.value,
        ccUsuarioLogado: selCentroCusto.value
    }

    //OBJETO USUÁRIO-VALIDADO
    let usuarioValidado = {};

    if(usuarioLogado.nomeUsuarioLogado != "" && usuarioLogado.senhaUsuarioLogado != "" && usuarioLogado.ccUsuarioLogado != "0"){
        
        for (let x = 0; x < listadeUsuarios.length; x++) {

            if(usuarioLogado.nomeUsuarioLogado == listaDeUsuarios[x].nomeUsuario && 
                usuarioLogado.senhaUsuarioLogado == listaDeUsuarios[x].senhaUsuario && 
                usuarioLogado.ccUsuarioLogado == listaDeUsuarios[x].ccUsuario){

                usuarioValidado = listaDeUsuarios[x];
                console.log("VALIDADO");
                
                msgStatus.setAttribute("style", "color:#00ff00");
                msgStatus.innerHTML = `<span><strong>O usuário ${usuarioValidado.nomeCompleto} fez o login com SUCESSO!!</strong></span>`;

            }
            // else{
            //     msgStatus.setAttribute("style", "color:#ff0000");
            //     msgStatus.innerHTML = `<span><strong>Nome de usuário ou senha inválidos...</strong></span>`;
            // }
        }
    
    }else{
        console.log("EXISTE ALGUM CAMPO SEM PREENCHIMENTO!")
    }
}

const inputUser = document.querySelector("#idNm");
const inputPass = document.querySelector("#idPass");
const selectCusto = document.querySelector("#idCusto");

const labelUser = document.querySelector("label[for='idNm']");
const labelPass = document.querySelector("label[for='idPass']");

inputUser.addEventListener("keyup" ,()=>{

    if(inputUser.value.length < 4){
        labelUser.setAttribute("style","color:#ff0000;");
    }else{
        labelUser.setAttribute("style","color:#00ff00;");
    }
});

inputPass.addEventListener("keyup" ,()=>{

    if(inputPass.value.length < 5){
        labelPass.setAttribute("style","color:#ff0000;");
    }else{
        labelPass.setAttribute("style","color:#00ff00;");
    }
});