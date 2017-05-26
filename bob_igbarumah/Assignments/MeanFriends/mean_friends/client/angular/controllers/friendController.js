app.controller('friendController', function($location,$routeParams,FriendFactory){
  var self = this;
  self.friends = [];
  self.friend = [];

  self.index = function(){
    FriendFactory.index(function(res){
      self.friends = res.data;
    })
  }

  self.create = function(newFriend){
      console.log(newFriend);
    FriendFactory.create(newFriend,function(res){
      console.log("created friend");
      console.log(res.data);
      self.newFriend = {};
      self.index();
      $location.url('/');
    })
  }

  self.show = function(){
    console.log("i am in show controller");
    console.log($routeParams.id);
    FriendFactory.show($routeParams.id,function(res){
      self.friend = res.data;
      console.log("shown friend");
      console.log(res.data);

    })
  }

  self.edit = function(editFriend){
    console.log("am in edit controller");
    FriendFactory.update($routeParams.id,editFriend,function(res){
      console.log(res.data);
      console.log('FINISHED EDITING');
      $location.url('/');
    })
  }
  self.delete = function(id){
    console.log("am in delete");
    console.log(id);
    
    FriendFactory.delete(id,function(){
      console.log("deleted");
      $location.url('/');
    })
  }
})
