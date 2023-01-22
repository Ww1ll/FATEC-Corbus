function login() {
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    
    if (email == "" || senha == "" ) {
        alert("Por favor, preencha todos os campos");             
    }
    else if ( email == "usuario" && senha == "123"){
        alert("Conta logada com sucesso!") 
        window.location="login2.html"
    }
    else{
        alert("Digite uma conta válida")
    }
}

function limpar() {
    document.getElementById('email').value=""
    document.getElementById('senha').value=""
}

function cadastrar(){
    document.getElementsByClassName('btn-cadastrar').value
    alert("Cadastro realizado com sucesso")
    window.location="home.html"
}
