/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  list (req, res) {
    let users = (async () => {
      return await Users.find();
    })();

    users.then((users) => {
      return res.view('listUsers', { users });
    }).catch((err) => {
      console.log(err);
    });
  }

};
