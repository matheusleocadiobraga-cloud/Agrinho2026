function trocarTema(){

    document.body.classList.toggle("dark");

    const botao = document.getElementById("modo");

    if(document.body.classList.contains("dark")){
        botao.innerHTML = "Modo Claro";
    }else{
        botao.innerHTML = "Modo Escuro";
    }

}


function usuario(){

    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;

    if(nome == "" || idade == ""){
        document.getElementById("mensagem").innerHTML =
        "Preencha todos os campos!";
        return;
    }

    document.getElementById("mensagem").innerHTML =
    "Olá, " + nome + " Você tem " + idade + " anos.";
}