<template>
  <button @click="add">Add</button>
	ProductId: {{pid}} Count: {{qty}}
	<button @click="minus">Minus</button>

  <select name="item_{{pid}}" id="" v-model="selected">
    <option value="-1">Please Chose</option>
    <option value="1">1</option>
    <option value="2">2</option>
  </select>

  Selected: {{selected}}
  <br>
</template>

<script>
  module.exports = {
    
    props: ['pid'],

    data: function() {
      return {
       	qty: 0,
        selected: -1
      }
    },

    methods:{
      add: function() {
	        this.qty += 1;
	    },

	    minus: function() {
	    	if(this.qty > 0 ) this.qty -= 1;
	    }


    }
  }
</script>