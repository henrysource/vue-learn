<style>
  .red {
    color: #f00;
  }
</style>

<template>
  <h1 class="red">{{msg}}</h1>
  <a @click="a">test</a>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        msg: 'Hello world!'
      }
    },

    ready: function(){
      //this.a();
    },
    methods:{
      a: function(){
        alert('hello');
      }
    }


  }
</script>