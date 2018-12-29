import axios from 'axios';

const delay = () => new Promise(resolve => setTimeout(resolve('Ok'),1000));

export async function onePerSecond(){
    console.log(await delay());
    console.log(await delay());
    console.log(await delay());
    console.log(await delay());
}

export async function getUserFromGithub(user){
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log('Request para APIs');
        console.log(response);
    } catch (err){
        console.warn('Não existe o usuário');
    }
}

export class Github {
    static async getRepositories(repo){
        try{
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log('Response dos repositorios');
            console.log(response);
        }catch(err){
            console.warn('Repositorio não encontrado');
        }
    }
}

export const searchUser = async(user) => {
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log('User usando arrow function');
        console.log(response);
    }
    catch(error){
        console.warn(error); 
    }
}