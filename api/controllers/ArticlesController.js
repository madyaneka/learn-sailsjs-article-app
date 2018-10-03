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
    },

    create (req, res) {
        let title = req.body.title
        let body = req.body.body

        Articles.create({
            title,
            body
        }).exec((err) => {
            if (err) {
                return res.send(500, {
                    error: 'Database Error'
                })
            }

            return res.redirect('/articles/list')
        })
    },

    delete (req, res) {
        Articles.destroy({ id: req.params.id }).exec((err) => {
            if (err) {
                return res.send(500, {
                    error: 'Database Error'
                })
            }

            return res.redirect('/articles/list')
        })
    },

    edit (req, res) {
        let id = req.params.id

        Articles.findOne({ id }).exec((err, article) => {
            if (err) {
                return res.send(500, {
                    error: 'Database Error'
                })
            }

            return res.view('edit', { article })
        })
    },

    update (req, res) {
        let id = req.params.id
        let title = req.body.title
        let body = req.body.body

        Articles.update({ id: id }, { title, body }).exec((err) => {
            if (err) {
                return res.send(500, {
                    error: 'Database Error'
                })
            }

            return res.redirect('/articles/list')
        })
    }

};
