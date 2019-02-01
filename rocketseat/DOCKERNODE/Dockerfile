# baixa a ultima versão do node e o alpine é uma versão reduzida do node na maquina que não tem muitas funcionalidades# baixa a ultima versão do node e o alpine é uma versão reduzida do node na maquina que não tem muitas funcionalidades
FROM node:alpine 

# diretorio que ira trabalhar dentro do container
WORKDIR /usr/app    

# copia os arquivos json para a maquina do docker
COPY package*.json ./   
RUN npm install

# copiar todos o restante dos arquivos para dentro do container, exceto o nodemodule, que por ter rodado o npm install no container não ira precisar
#nodemodules não vai pois está definido no .dockerignore
COPY . . 

# Porta que o servidor la dentro tem que expor para a maquina acessar
EXPOSE 3000

# comando unico no docker file e irá dizer qual comando sera rodado para que ele start
CMD ["npm", "start"]
