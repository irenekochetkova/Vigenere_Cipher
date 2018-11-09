/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {      
      alphabets: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
      keywords: [],
      indexKeys: [],
      newOrderAlphs: [],
      inputWords: "",
      outputWords: ""      
    };
  },
  created: function() {},
  methods: {
    getIndKey: function() {
      if (this.keywords) {
        var array = this.keywords.toUpperCase().split('');
        this.indexKeys = array.map(el => this.alphabets.indexOf(el));      
        // console.log(this.indexKeys);
        // console.log(this.alphabets);      
        }
  
      this.newOrderAlphs = this.alphabets.slice(this.indexKeys[0]).concat(this.alphabets.slice(0, this.indexKeys[0])); 
      // console.log(this.indexKeys[0]);
      // console.log(this.newOrderAlphs);

    },
    
    getCipher: function(alphabet) {  
      this.alphabet = alphabet;        
      this.inputWords += alphabet;
      var index = this.alphabets.indexOf(alphabet);
      this.outputWords += this.newOrderAlphs[index]; 
      var len = this.inputWords.length;
      this.newOrderAlphs = this.alphabets.slice(this.indexKeys[len % this.indexKeys.length]).concat(this.alphabets.slice(0, this.indexKeys[len % this.indexKeys.length]));
    },

    deleteInputWords: function(inputWords) {
  
      this.inputWords = '';
    }


  }
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }]
});

var app = new Vue({
  el: "#vue-app",
  router: router
});
