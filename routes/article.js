module.exports = function (app, mongo, db) {

  // Pending articles
  app.get('/admin/article', function (req, res) {
    db.collection('articles').find({status: 'pending'})
      .toArray(function (err, articles) {
        res.json(articles);
      }
    );
  });

  app.post('/admin/article', function (req, res) {
    db.collection('articles').insertOne(
      req.body,
      function (err, result) {
        db.collection('articles').find({status: 'pending'})
          .toArray(function (err, articles) {
            res.json(articles);
          }
        );
      });
  });

  app.get('/admin/article/:id', function (req, res) {
    var articleId = new mongo.ObjectID(req.params.id);
    db.collection('articles').findOne({_id: articleId}, function (err, doc) {
      res.json(doc);
    });
  });

  app.put('/admin/article/:id', function (req, res) {
    var articleId = new mongo.ObjectID(req.params.id);
    db.collection('articles').updateOne(
      {"_id": articleId},
      {
        $set: {
          status: req.body.status,
          category: req.body.category,
          title: req.body.title,
          content: req.body.content,
          image: req.body.image,
          datetime: req.body.datetime
        }
      },
      function (err, results) {
        db.collection('articles').find()
          .toArray(function (err, articles) {
            res.json(articles);
          }
        );
      });
  });

  app.delete('/admin/article/:id', function (req, res) {
    var articleId = new mongo.ObjectID(req.params.id);
    db.collection('articles').deleteOne(
      {_id: articleId},
      function (err, results) {
        db.collection('articles').find({status: 'pending'})
          .toArray(function (err, articles) {
            res.json(articles);
          }
        );
      }
    );
  });

};