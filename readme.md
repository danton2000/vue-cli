# Primeiro projeto com vue-cli

## criar pasta mkdir vue-cli
## acessar pasta cd vue-cli
## instalando o vue cli
```
npm i -g @vue/cli
```
## apartir desta instalação os comandos vue ficam habilitados
## para cada projeto, precisa instalar o @vue/cli
## criando o projeto
```
vue create nome_projeto
```
## precisa selecionar como vai qurer a instalacao do projeto, quais os recursos

## voce tambem pode criar uma confguracao com suas instalacoes definadas por vc, e salvar essa preset(feature), para utilizar futuramente

## precisa ter a pasta node_modules para executar o servidor(npm run serve), as dependencias estao nessa pasta
## parecida com a pasta venv do python

## npm i ele instala a pasta node_modules com a dependencias q estao no arquivo package.json

## devTools(F12) vai encontrar o arquivo app.js no index.html. O app.js só vai aparecer quando executar o build de producao

## O arquivo package-lock.json deixa as dependencias com as versões já estabelecidas para o projeto, vai sempre pegar as versao que está setadas nesse arquivo

# Colocando o projeto para PRODUÇÃO
```
npm run build
```
# vai carregar uma basta dist que tem os arquivos q vao para produção

# user/nome-usuario
```
cat .vuerc
```
# cria um arquivo json com todos os presets do vue-cli(neste PC) para a criação dos projetos

# Adicionando novos pluggins com o projeto já "montado"(dentro da pasta do projeto)
# Electron controi a aplicação para desktop
```
vue add electron-builder
```
# Startar a nossa aplicação vue em uma aplicação em desktop
```
npm run electron:serve
```
# Constuido a build da aplicacao feita com o electron
```
npm run electron:build
```
# Instalando um outro pluggin para layouts(varios components) para a nossa aplicação vue
```
vue add vuetify
```