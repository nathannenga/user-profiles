

var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {

    login:function(req,res){
      var userFound = {};
      for(var i = 0, length = users.length; i < length; i++){
        if(users[i].name === req.body.name && users[i].password === req.body.password){
          req.session.currentUser = users[i];
          res.send({ userFound: true});
          return;
        }

      };
      res.send({userFound: false});
    },


  }
