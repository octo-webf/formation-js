var model = {

  specialFunction: function() {
    console.log('special function');
  },

  anotherSpecialFunction: function() {
    console.log('another special function');
  },

  getAsyncData: function(callback) {
    callback();
  },

  render: function() {
    this.getAsyncData(function() {
      this.specialFunction();
      this.anotherSpecialFunction();
    });
  }
};

model.render();