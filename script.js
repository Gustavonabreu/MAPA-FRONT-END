function handleSubmit() {

    const qtdHomens = parseInt(document.getElementById("Homen").value);
    const qtdMulheres = parseInt(document.getElementById("Mulher").value);
    const qtdCriancas = parseInt(document.getElementById("Crianca").value);

    const carneBovinaH = 500; 
    const frangoH = 200; 
    const linguiçaH = 200; 
    const refrigeranteH = 300; 
    const cervejaH = 800; 

    const carneBovinaM = 300; 
    const frangoM = 200;
    const linguiçaM = 200; 
    const refrigeranteM = 400; 
    const cervejaM = 500; 
    
    const carneBovinaC = 200; 
    const frangoC = 100; 
    const linguiçaC = 200; 
    const refrigeranteC = 400; 
    const cervejaC = 0; 

    const Carnetotal = ((qtdHomens * carneBovinaH) + (qtdMulheres * carneBovinaM) + (qtdCriancas * carneBovinaC)) / 1000; 
    const Frangototal = ((qtdHomens * frangoH) + (qtdMulheres * frangoM) + (qtdCriancas * frangoC)) / 1000; 
    const LinguicaTotal = ((qtdHomens * linguiçaH) + (qtdMulheres * linguiçaM) + (qtdCriancas * linguiçaC)) / 1000; 
    const refrigeranteTotal = ((qtdHomens * refrigeranteH) + (qtdMulheres * refrigeranteM) + (qtdCriancas * refrigeranteC)) / 1000; 
    const cervejaTotal = ((qtdHomens * cervejaH) + (qtdMulheres * cervejaM) + (qtdCriancas * cervejaC)) / 1000; 

    
    const listaDeIngredientes = document.querySelector(".ingredienteUl");

    
    listaDeIngredientes.innerHTML = `
        <li class="IngredienteLista">${Carnetotal.toFixed(2)} kg de carne bovina</li>
        <li class="IngredienteLista">${Frangototal.toFixed(2)} kg de frango</li>
        <li class="IngredienteLista">${LinguicaTotal.toFixed(2)} kg de linguiça</li>
        <li class="IngredienteLista">${refrigeranteTotal.toFixed(2)} l de refrigerante</li>
        <li class="IngredienteLista">${cervejaTotal.toFixed(2)} l de cerveja</li>
    `;

    let divResultado = document.getElementById("divResultado");
    divResultado.classList.remove("hidden");

    return false;
}
