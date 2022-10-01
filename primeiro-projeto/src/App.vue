<!-- atalho "default.vue" cria o tempalte do vue -->

<template>
  <div id="app">
    <h1>{{titulo}}</h1>
    <button @click="titulo += '#'">Alterar</button>
  </div>
</template>

<script>
  export default{
    //sistema de módulos(arquivos) do Node.js
    //exportando um objeto
    data(){
      //como é um componente precisa ter uma "function()"
      return{
        titulo: "Teste data usando Vue JS"
      }
    }
  }
</script>

<style>
  #app {
    background-color: purple;
    color: #fff;
  }
</style>

