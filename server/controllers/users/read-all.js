const UserModel = require('../../models/user');

module.exports = (req, res) => {
  UserModel.find({}, (err, users) => {
    res.render('admin/users/users', {title: 'Usuários', users: users});
  });
};
