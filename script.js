function validarFormulario() { 
    var nome = document.getElementById('nome').value; 
    var contato = document.getElementById('contato').value; 
    var mensagem = document.getElementById('mensagem').value; 
    if (!nome || !contato || !mensagem) { 
        alert("Por favor, preencha todos os campos."); 
        return false; } 
        alert("Obrigada, " + nome + ", pelo seu comentário/feedback! Em breve retornaremos."); 

}


function alternarModoNoturno() {
    document.body.classList.toggle('modo-noturno');
}
