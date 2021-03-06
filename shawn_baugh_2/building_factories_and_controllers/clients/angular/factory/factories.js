console.log('Friend Factory');
app.factory('friendsFactory', ['$http', function($http) {
  var factory = {};
  factory.index = function() {
      //call this method if you want to update or set the friends variable
      $http.get('/friends').then(function(returned_data){
        console.log(returned_data.data);
        callback(friends);
      });
  }
  factory.show = function() {
      // Your code here
      $http.get('/friends/:id')
  }
  factory.create = function(newfriend, callback) {
      $http.post('/friends', newfriend).then(function(returned_data){
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
  }
  factory.update = function(id, callback) {
    $http.put(/*ROUTE*/).then(function(returned_data) {
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
    })
  }
  factory.delete = function() {
      // Your code here
  }
  return factory;
}]);
