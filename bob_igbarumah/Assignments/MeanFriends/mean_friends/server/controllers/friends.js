var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = {
  index: function(req,res){
      console.log("got to index");
    Friend.find({}).exec(function(err,users){
      if(err){
        return res.json(err);
      }
      return res.json(users);
    });
  },

  create: function(req,res){
      console.log("got to create");
    var friend = new Friend(req.body);
    Friend.create(req.body,function(err,friend){
      if(err){
        console.log(err);
        return res.json(err);
      }
      console.log(friend);
      return res.json(friend);
    });
  },
  show: function(req,res){
      console.log("got to show");
    Friend.findById(req.params.id,function(err,friend){
      if(err){
        return res.json(err);
      }
      if(!friend){
        return res.json({
          "error": "404 -Friend not found"
        })

      };
        return res.json(friend);
    });
  },
  update: function(req,res){
      console.log("got to update");
    Friend.findById(req.params.id,function(err,friend){
      if(err){
        return res.json(err);
      }
      if(!friend){
        return res.json({
          "error": "404- friend not found"
        });
      }
      friend.first_name = req.body.first_name;
      friend.last_name = req.body.last_name;
      friend.birthday = req.body.birthday;
      friend.save(function(err,friend){
        if(err){
          return res.json(err);
        }
        return res.json(friend);
      });
    });
  },
  destroy: function(req,res){
    console.log("got to destroy");
    Friend.findByIdAndRemove(req.params.id,function(err,friend){
      if(err){
        console.log(err);
        return res.json(err);
      }
      console.log(friend);
      return res.json(friend);
    });
  }
}
