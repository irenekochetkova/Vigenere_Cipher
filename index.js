/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      indexKeys: [],
      alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
      keywords: []
      
    };
  },
  created: function() {},
  methods: {
    getIndKey: function() {
      if (this.keywords) {
    //     // this.keywords.push(this.keyword);
        // this.keywords = keywords.split('');
      console.log(this.keywords);
      // this.keywords = keywords.toUpperCase();
      var array = this.keywords.toUpperCase().split('');
      console.log(array);

      // var newArray = array.map(el => this.alphabet.indexOf(el));
      this.indexKeys = array.map(el => this.alphabet.indexOf(el));
      
      console.log(this.indexKeys);
      console.log(this.alphabet);
    }

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
