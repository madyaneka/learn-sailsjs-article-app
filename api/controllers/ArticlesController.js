/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    list (req, res) {
        Articles.find().exec((err, articles) => {
            if (err) {
                return res.send(500, {
                    error: 'Database Error'
                })
            }

            return res.view('list', {articles})
        })
    },
    
    add (req, res) {
        return res.view('add')
    }

};
