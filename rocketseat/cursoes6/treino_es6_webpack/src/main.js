import api from './api';

class App{
    constructor(){
        this.repositories = [];
        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repositorie]');
        this.listEl = document.getElementById('repo-list');
        this.registerHandlers();   
    }

    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepositorie(event);
    }

    setLoading(loading = true){
        if(loading === true){
            let loadingElement = document.createElement('span');
            loadingElement.appendChild(document.createTextNode('Caregando....'));
            loadingElement.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingElement);
        }else{
            document.getElementById('loading').remove(); 
        }
    }

    async addRepositorie(event){
        event.preventDefault(); //não deixa que a pagina carregue

        const repoInput = this.inputEl.value;

        console.log(repoInput);

        if(repoInput.length === 0)
            return;

        this.setLoading();

        try{
            const response = await api.get(`/repos/${repoInput}`);

            const {name, description, html_url, owner: { avatar_url }} = response.data;

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            });

            this.inputEl.value = '';

            this.render();
        }
        catch(err){ 
            alert('O repositório não existe!');
        }

        this.setLoading(false);

    }

    render(){
        this.listEl.innerHTML ='';

        this.repositories.forEach(repo =>{
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url); 
            
            let strongEl = document.createElement('strong');
            strongEl.textContent = repo.name;

            let descriptionEl = document.createElement('p');
            descriptionEl.textContent = repo.description;

            let linkEl = document.createElement('a');

            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.textContent = 'Acessar';

            let listElement = document.createElement('li');
            listElement.appendChild(imgEl);
            listElement.appendChild(strongEl);
            listElement.appendChild(descriptionEl);
            listElement.appendChild(linkEl);

            this.listEl.appendChild(listElement);
        });
    }
}

new App();

