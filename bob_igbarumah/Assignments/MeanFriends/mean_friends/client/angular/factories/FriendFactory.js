app.factory('FriendFactory',function($http){
  var factory = {};

  factory.index = function(callback){
    $http.get('/friends').then(callback);
  }

  factory.create = function(newFriend,callback){
    console.log("got to friends factory");
    $http.post('/friends', newFriend).then(callback);
  }
  factory.show = function(id,callback){
    console.log("got to show factory");
    $http.get('/friends/'+id).then(callback);
  }
  factory.update = function(id,editFriend,callback){
    console.log("am in update");
    console.log(id);
    $http.put('/friends/'+id,editFriend).then(callback);
  }
  factory.delete = function(id,callback){
    console.log("am in del factory");
    console.log(id);
    $http.delete('/friends/'+id).then(callback);
  }
  return factory;
})
