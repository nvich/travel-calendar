const UserModel = require('../../models/user');

module.exports = (req, res) => {
  UserModel.remove({
    _id: req.params.id
  }, (err, user) => {
    if(err) {
      res.send(err);
    }
    res.render('admin/users/user', {title: 'Usuário', user: user, message: 'Usuário deletado'});
  });
};
