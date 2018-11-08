/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      indexKeys: [],
      alphabets: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
      keywords: []
      
    };
  },
  created: function() {},
  methods: {
    getIndKey: function() {
      if (this.keywords) {
      console.log(this.keywords);
      var array = this.keywords.toUpperCase().split('');
      console.log(array);
      this.indexKeys = array.map(el => this.alphabets.indexOf(el));      
      console.log(this.indexKeys);
      console.log(this.alphabets);
      }
    },
    
    


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
