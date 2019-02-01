function checaIdade(idade){

    setTimeout(2000);

    return new Promise( function (resolve, reject){
        setTimeout( function (){ 
            return idade >= 18 ? resolve() : reject();

        }, 2000);
    });
}

checaIdade(13)
    .then(function(){
        console.log("Maior que 18");
    })
    .catch(function(){
        console.log("Menor que 18");
    });


// Exercício 2

var nameUser = document.querySelector("#nameUser");
var button = document.querySelector("#buttonUser");
var repositories = document.querySelector(".repos");

function renderLoading(loading) {
    repositories.innerHTML = "";
    var textElement = document.createTextNode('Carregando...');
    var loadingElement = document.createElement('li');
    loadingElement.appendChild(textElement);
    repositories.appendChild(loadingElement);
  }

button.onclick = function(){
    var nameFromUser = nameUser.value;
    var url = " https://api.github.com/users/" + nameFromUser + "/repos";

    renderLoading();

    axios.get(url)
        .then(function(response){
            repositories.innerHTML = '';
            var nameUserHtml = document.createElement("h1");
            nameUserHtml.textContent = "Repositórios de " + nameFromUser;
            repositories.appendChild(nameUserHtml);
            for(repo of response.data){
                var li = document.createElement("li");
                li.textContent = repo.name;
                repositories.appendChild(li);
            }
        })
        .catch(function(erro){
            repositories.innerHTML = '';
            var errorUser = document.createElement("h1");
            errorUser.textContent = "Sem Resultado!";
            repositories.appendChild(errorUser);
        })
}