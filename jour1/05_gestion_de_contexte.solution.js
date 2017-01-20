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
    var self = this;
    self.getAsyncData(function() {
      self.specialFunction();
      self.anotherSpecialFunction();
    });
  }
};

model.render();
