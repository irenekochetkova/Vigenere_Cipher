var HomePage = {
  template: "#home-page",
  data: function() {
    return {      
      alphabets: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
      keywords: [],
      indexKeys: [],
      newOrderAlphs: [],
      inputWords: "",
      outputWords: "",
      errors: [],
      shouldDisable: true,
      activeEl: 0       
    };
  },
  created: function() {},
  methods: {
    getIndKey: function() {
      this.inputWords = '';
      this.outputWords = '';
      this.activeEl = 0;
      this.keywords = this.$refs.my_input.value;
      this.errors = [];
      
      if (this.keywords.length > 2 && this.keywords.length < 9  ) {
        var array = this.keywords.toUpperCase().split('');
        this.indexKeys = array.map(el => this.alphabets.indexOf(el));     
        this.newOrderAlphs = this.alphabets.slice(this.indexKeys[0]).concat(this.alphabets.slice(0, this.indexKeys[0]));   
      } else {
        this.errors.push('Keyword should be a single word between three and eight characters long');
        this.indexKeys = null;
        this.keywords = null;
      }    
    }, 
    
    getCipher: function(alphabet) {  
      this.alphabet = alphabet;        
      this.inputWords += alphabet;
      var index = this.alphabets.indexOf(alphabet);
      this.outputWords += this.newOrderAlphs[index]; 
      var len = this.inputWords.length;
      this.newOrderAlphs = this.alphabets.slice(this.indexKeys[len % this.indexKeys.length]).concat(this.alphabets.slice(0, this.indexKeys[len % this.indexKeys.length]));
      this.activeEl = len % this.indexKeys.length;
    },

    deleteInputWords: function(inputWords) {
      this.inputWords = '';
      this.outputWords = '';
      this.activeEl = 0;
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
