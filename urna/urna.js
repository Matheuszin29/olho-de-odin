//controle de interface
let seuVoto = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0 ;
let numero ='' ;
let votobranco =false;


function comecarEtapa() {
    let etapa = etapas[etapaAtual];
    let numeroHtml = '';
    numero='';
    votobranco = false;

     
    for(let i=0 ; i<etapa.numeros;i++){
        if(i===0){
            numeroHtml += '<div class="numero pisca"></div>';
        }else{
        numeroHtml += '<div class="numero"></div>' ;
        } 
    }
    seuVoto.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display =  'none' ;
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml ;

}

function atualizarinterface (){
    //acahando candidatos  no banco de dados
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero){
            return true;
        }else {
            return false;
        }
    });
    //alterando a tela com os dados recebidos
    if(candidato.length>0){
        candidato = candidato[0];
        seuVoto.style.display = 'block';
        aviso.style.display ='block';
        descricao.innerHTML = `Nome : ${candidato.nome} </br>Partido : ${candidato.partido}`;


        let fotosHtml = '' ;

        for(let i in candidato.foto){
          if(candidato.foto[i].small){
            fotosHtml += `<div class="d-1-image small"><img src="imagens/${candidato.foto[i].url}" alt="" />${candidato.foto[i].legends}</div>`;
          }else{  
            fotosHtml += `<div class="d-1-image"><img src="imagens/${candidato.foto[i].url}" alt="" />${candidato.foto[i].legends}</div>`;  
          }  
        }
          lateral.innerHTML = fotosHtml;
    }else{
        seuVoto.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = '<div class="aviso-grande pisca">VOTO NULO</div>';
    }
}

//clicagem dos botões
function clicou(n){
    let elnumero = document.querySelector('.numero.pisca');
    if  (elnumero !== null ){
        elnumero.innerHTML = n;
        //`${}` serve para chamar funçoes de js
        numero = `${numero}${n}`;
        //removendo uma classe do elnumro
        elnumero.classList.remove('pisca');
        //colocando pisca no proximo elemento
        if (elnumero.nextElementSibling !== null){
            elnumero.nextElementSibling.classList.add('pisca');
        }else {
            atualizarinterface();
        }

        
    }
}
function branco(){
    if(numero===''){
        numero = '';
        votobranco = true;
        seuVoto.style.display = 'block';
        aviso.style.display = 'block';
        numeros.innerHTML = '';
        descricao.innerHTML = '<div class="aviso-grande pisca">VOTO BRANCO</div>';
        lateral.innerHTML = '';
    }else {
        alert('corrige isso parceiro');
    }
}
function confirma(){
    let etapa = etapas[etapaAtual];
    let votoConfirma = false;
    if(votobranco===true){
        votoConfirma =true;
        console.log("Confirmando como Branco...");
    }else if (numero.length=== etapa.numeros){
        votoConfirma = true
        console.log("COnfirmando como "+numero);
    }
    if(votoConfirma){
        etapaAtual++;
        if(etapas[etapaAtual] !== undefined){
            comecarEtapa();
        }else{
            document.querySelector('.tela').innerHTML = '<div class="aviso-gigante pisca">FIM</div>' ;
        }
    }
}
function corrige(){
    comecarEtapa();
}
//chamdo da função
comecarEtapa();


