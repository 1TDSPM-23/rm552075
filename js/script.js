//    //Declarar uma variável com a palavra reservada var.
//    // var nr1 = 10;
//    // var nr2 = 5;

//    // //Vamos imprimir as variáveis com o objeto console.
//    // console.log(nr1);
//    // console.log(nr2);

//    //Realizando as operações básicas com estes valores:
//    // + / - / * e /
   
//    //REALIZE A CONCATENAÇÃO COM O TEXTO RESULTADO:
//    //EX: console.log(RESULTADO nr1 + nr2);
   
// //    //ADIÇÃO
// //    console.log("Resultado: " + (parseInt(nr1) + parseInt(nr2)));
// //    console.log(`Resultado adição:  + ${parseInt(nr1) + parseInt(nr2)}`);
// //    //SUBTRAÇÃO
// //    console.log(`Resultado subtração:  + ${parseInt(nr1) - parseInt(nr2)}`);

// //    //MULTIPLICAÇÃO
// //    console.log(`Resultado multiplicação:  + ${parseInt(nr1) * parseInt(nr2)}`);

// //    //DIVISÃO
// //    console.log(`Resultado divisão:  + ${parseInt(nr1) / parseInt(nr2)}`);
// //    //OBTENHA O RESTO DA DIVISÃO
// //    console.log(`Resultado resto da divisão:  + ${parseInt(nr1) % parseInt(nr2)}`);

// //    //DESCOBRINDO SE UM NÚMERO É PAR OU ÍMPAR
// //    //UTILIZANDO OPERADOR TERNÁRIO (?)
// //    var nr1 = "10";
// //    var nr2 = "5";
// //    var resultado;

// //    resultado = !(parseInt(nr1)%parseInt(nr2)) ? "PAR" : "ÍMPAR";
// //    console.log('O NÚMERO É: ${resultado}');

// //    //DIFERENÇA ENTRE VAR/LET/CONST
// // //    var nome1 = "Beatriz";
// // //    let nome2 = "Matheus";
// //    let nome = "Beatriz";

// //    if(nome == ""){
// //     let nome = "Robson";
// //    }

// //    //Qual é o nome que será impresso no log?
// //    console.log(nome);

// //    //REGRAS DO CONST
// //    //1ª Regra = Inicializar na declaração
// //    const nome3 = "Violante";

// //    //2ª Regra = Não pode ser alterado durante o fluxo do programa.
// //    nome3 = "Jonathan";


//    //ARRAY e seus métodos
//    let frutas = ["banana", "maçã", "morango", "carambola", "acerola", "laranja"];

//    //Imprimindo um array
//    console.log(frutas);
//    console.table(frutas);
//    console.log(frutas[1]);

//     //Adicionar um iten ao final do array com o método push(iten);
//     frutas.push("melão");
//     console.log(frutas);
//     //Adicionar um iten no início do array com o método unshift(iten);
//     frutas.unshift("cajú");
//     console.log(frutas);
//     //Remover um iten do final do array com o método pop();
//     frutas.pop();
//     console.log(frutas);
//     //Remover um iten do início do array com o método shift();
//     frutas.shift();
//     console.log(frutas);

//     //Para localizar um item dentro do array, utilizamos o método indexOf (itemNome)
//     // let indice = frutas.indexOf("morango");
//     // console.log(frutas[indice]);    

//     //Para localizar um item dentro do array, e apagar ele utilizamos o método splice(indice do item, quantidade de vezes que o indice será removido).
//     //Obs: utilize o método indexOf(itemNome) para obter indice do item;
//     let indice = frutas.indexOf("carambola");
//     frutas.splice(indice, 1);
//     console.log(frutas)

//     frutas.forEach( (fruta)=>{} ){
//         console.log("fruta: " + fruta);
//     }

const inputUser = document.getElementById("idNm");
console.log(inputUser)