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
      // var newWords = [];

      if (this.keywords) {
        // console.log(this.keywords);
        var array = this.keywords.toUpperCase().split('');
        // console.log(array);
        this.indexKeys = array.map(el => this.alphabets.indexOf(el));      
        // console.log(this.indexKeys);
        // console.log(this.alphabets);      
        }
      // for (var i = 0; i < this.keywords.length; i++) {
      //   var char = this.keywords[i].toUpperCase();
      //   console.log(char);
      //   var newInd = this.alphabets.indexOf(char) + this.indexKeys[i % this.indexKeys.length];
      //   console.log(newInd);
      //   this.newWords = newWords.push(this.alphabets[newInd % this.alphabets.length]);
      //   console.log(this.newWords);
      // }

      this.newOrderAlphs = this.alphabets.slice(this.indexKeys[0]).concat(this.alphabets.slice(0, this.indexKeys[0])); 
      // console.log(this.indexKeys[0]);
      // console.log(this.newOrderAlphs);

    },
    
    getCipher: function(alphabet) {  
        this.alphabet = alphabet;        
        this.inputWords += alphabet;
        var len = this.inputWords.length;
        this.newOrderAlphs = this.alphabets.slice(this.indexKeys[len % this.indexKeys.length]).concat(this.alphabets.slice(0, this.indexKeys[len % this.indexKeys.length]));
       
    }


  },
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }]
});

var app = new Vue({
  el: "#vue-app",
  router: router
});
